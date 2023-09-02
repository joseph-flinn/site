import datetime
import json
import os
import tomllib
import subprocess

from src.log import logger


def err(message: str) -> None:
    logger.error(message)
    exit(1)


def build_context(ctx):
    ctx.obj["TIMESTAMP"] = (
        datetime.datetime.utcnow().isoformat(timespec="milliseconds") + "Z"
    )

    config_path = ctx.obj["CONFIG_PATH"]
    db = ctx.obj['DB']
    env = ctx.obj['ENV']

    # Setup Wrangler config (symlinked to current directory)
    try:
        with open(config_path, mode="rb") as fp:
            ctx.obj["WRANGLER_CONFIG"] = tomllib.load(fp)
    except Exception as e:
        err(f"{config_path} does not exist\ncwd: {os.getcwd()}\nError: {e}")

    # Setup local database migration directory heirarchy
    if ctx.obj["TESTING"]:
        db = "test"

    dbs = [filename for filename in os.listdir("./") if os.path.isdir(filename)]
    if db and db in dbs:
        ctx.obj["MIGRATIONS"] = f"{db}/migrations"
        ctx.obj["TRANSITIONS"] = f"{db}/transition_migrations"
        ctx.obj["FINALIZATIONS"] = f"{db}/finalization_migrations"
    else:
        err(f"{db} migrations not found\nDBs found: {dbs}")

    # Setup Wrangler Environment from config
    if env:
        if env not in ctx.obj["WRANGLER_CONFIG"]["env"]:
            err(f"{env} is not configured in {config_path}")
        else:
            # Setup Wrangler database name and connection depending on the environment
            env_db = db if env.lower() in ["production", "prod"] else f"{db}-dev"
            env_dbs = [
                env_db["database_name"]
                for env_db in ctx.obj["WRANGLER_CONFIG"]["env"][env]["d1_databases"]
            ]

            if env_db not in env_dbs:
                err(f"{db} D1 is not bound to env.{env}")

            ctx.obj["D1_DB"] = env_db

    return ctx


def get_inc(migrations, transitions):
    logger.debug(f"migrations: {migrations}")
    logger.debug(f"transitions: {transitions}")
    files = [
        *[
            filename for filename in os.listdir(migrations)
            if os.path.isfile(os.path.join(migrations, filename))
        ],
        *[
            filename for filename in os.listdir(transitions)
            if os.path.isfile(os.path.join(transitions, filename))
        ],
    ]

    curr = sorted(files)[-1].split("_")[0]
    logger.debug(f"Current ID: {curr}")

    inc = str(int(curr) + 1).rjust(4, "0")
    logger.debug(f"Next ID: {inc}")

    return inc


def write_migration_file(
    migration_dir,
    migration_file,
    migration_number,
    timestamp,
    migration_type='',
    finalization_body=None
):
    migration_contents = f"-- Migration number: {migration_number} \t {timestamp}\n"

    if migration_type == "init":
        migration_contents += (
            f"\nCREATE TABLE IF NOT EXISTS {MIGRATION_TABLE}(\n"
            "    id INTEGER PRIMARY KEY AUTOINCREMENT,\n"
            "    name TEXT UNIQUE,\n"
            "    is_transition BOOLEAN DEFAULT FALSE NOT NULL,\n"
            "    in_transition_state BOOLEAN DEFAULT FALSE NOT NULL,\n"
            "    applied_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL\n"
            ");\n\n"
            f"INSERT INTO {MIGRATION_TABLE} (name) values ('{migration_file}');\n"
        )

    elif migration_type == "" and finalization_body:
        migration_contents += f"\n{finalization_body}\n\n"

    try:
        with open(f"{migration_dir}/{migration_file}", "w") as new_migration:
            new_migration.write(migration_contents)
    except e:
        err(f"Error writing to {migration_file}\n\n{e}")


def get_local_migrations(migration_dir):
    return [filename for filename in os.listdir(migration_dir)]


def execute_sql_file(migration_file, migration_dir, env, env_db) -> str:
    client = subprocess.run(
        [
            "wrangler", "--env", env, "d1", "execute", env_db,
            "--file",  f"{migration_dir}/{migration_file}", "--json"
        ],
        text=True,
        capture_output=True
    )

    return (client.stdout, client.returncode)


def execute_sql_command(command, env, env_db) -> str:
    client = subprocess.run(
        [
            "wrangler", "--env", env, "d1", "execute", env_db,
            f"--command",  f"{command}", "--json"
        ],
        text=True,
        capture_output=True
    )

    return (client.stdout, client.returncode)


def get_status(env, env_db):
    sql_command = f"SELECT * FROM {MIGRATION_TABLE};"
    results, results_code = execute_sql_command(sql_command, env, env_db)

    if results_code == 1:
        return []

    return [migration['name'] for migration in json.loads(results)[0]["results"]]


def log_migration(migration_file, env, env_db, is_transition=False, is_transitioning=False):
    sql_command = f"""
        DECLARE
          @name TEXT='{migration_file}',
          @is_transition BOOLEAN={int(is_transition)},
          @in_transition_state={int(is_transitioning)}

        IF ((select count(*) from edda_migrations where name=@name) = 1)
          BEGIN
            UPDATE edda_migrations
            SET Name = @name, age = @age
            WHERE ID = @id;
          END
        ELSE
          BEGIN
            INSERT INTO edda_migrations (name,is_transition,in_transition_state)
            VALUES (@name,@is_transition,@in_transition_state)
          END
    """

   #f"INSERT INTO {MIGRATION_TABLE} (name) values ('{migration_file}');\n"

    results, results_code = execute_sql_command(sql_command, env, env_db)

    if results_code == 1:
        err(f"Error executing log of {migration_file} on env.{env}.{env_db}")

    logger.debug(f"{migration_file} successfully logged")
