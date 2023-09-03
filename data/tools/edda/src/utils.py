import datetime
import json
import os
import tomllib
import subprocess

from dataclasses import dataclass

from src.log import logger


@dataclass
class Migration:
    id: str
    name: str
    path: str
    is_transition: bool = False
    in_transition_state: bool = False

    def __repr__(self):
        return self.name


@dataclass
class Migrations:
    path: str
    migrations: list[Migration]

    def names(self):
        return [m.__repr__() for m in self.migrations]


@dataclass
class DBMigrations:
    migration: Migrations
    transition: Migrations
    finalization: Migrations
    manual: Migrations


def to_table(columnar_data):
    num_rows = len(max(columnar_data, key=lambda k: len(k)))

    table = []
    for row_index in range(num_rows):
        row = []
        for column in columnar_data:
            if row_index < len(column):
                row.append(column[row_index])
            else:
                row.append("")
        table.append(row)

    return table


def err(message: str) -> None:
    logger.error(message)
    exit(1)


def build_context(ctx):
    config_path = ctx.obj["CONFIG_PATH"]
    db = ctx.obj["DB"]
    env = ctx.obj["ENV"]
    env_db = None

    # Setup Wrangler config (symlinked to current directory)
    try:
        with open(config_path, mode="rb") as fp:
            wrangler_config = tomllib.load(fp)
    except Exception as e:
        err(f"{config_path} does not exist\ncwd: {os.getcwd()}\nError: {e}")

    # Setup local database migration directory heirarchy
    if ctx.obj["TESTING"]:
        db = "test"

    dbs = [filename for filename in os.listdir("./") if os.path.isdir(filename)]
    if db and db in dbs:
        migrations_dir = f"{db}/migrations"
        transitions_dir = f"{db}/transition_migrations"
        finalizations_dir = f"{db}/finalization_migrations"
        manual_dir = f"{db}/manual_migrations"

        db_migrations = load_migrations(
            migrations_dir, transitions_dir, finalizations_dir, manual_dir
        )

    else:
        err(f"{db} migrations not found\nDBs found: {dbs}")

    # Setup Wrangler Environment from config
    if env:
        if env not in wrangler_config["env"]:
            err(f"{env} is not configured in {config_path}")
        else:
            # Setup Wrangler database name and connection depending on the environment
            env_db = db if env.lower() in ["production", "prod"] else f"{db}-dev"
            env_dbs = [
                env_db["database_name"]
                for env_db in wrangler_config["env"][env]["d1_databases"]
            ]

            if env_db not in env_dbs:
                err(f"{db} D1 is not bound to env.{env}")

    ctx.obj["WRANGLER_CONFIG"] = wrangler_config
    ctx.obj["DB_MIGRATIONS"] = db_migrations
    ctx.obj["D1_DB"] = env_db
    ctx.obj["TIMESTAMP"] = (
        datetime.datetime.utcnow().isoformat(timespec="milliseconds") + "Z"
    )

    ctx.obj["MIGRATIONS"] = migrations_dir
    ctx.obj["TRANSITIONS"] = migrations_dir
    ctx.obj["FINALIZATIONS"] = migrations_dir

    return ctx


def get_local_migrations(migration_dir: str) -> list:
    try:
        return Migrations(
            migration_dir,
            [
                Migration(filename[0:4], filename, f"{migration_dir}/{filename}")
                for filename in sorted(os.listdir(migration_dir))
            ],
        )
    except:
        return Migrations(migration_dir, [])


def load_migrations(migrations_dir, transitions_dir, finalizations_dir, manual_dir):
    return DBMigrations(
        get_local_migrations(migrations_dir),
        get_local_migrations(transitions_dir),
        get_local_migrations(finalizations_dir),
        get_local_migrations(manual_dir),
    )


def get_latest_id(ctx):
    migrations = ctx.obj["DB_MIGRATIONS"].migration.migrations
    transitions = ctx.obj["DB_MIGRATIONS"].transition.migrations

    logger.debug(f"migrations: {migrations}")
    logger.debug(f"transitions: {transitions}")

    all_migrations = [*migrations, *transitions]

    curr = sorted(all_migrations, key=lambda k: k.id)[-1].id
    logger.debug(f"Current ID: {curr}")

    return curr


def get_next_id(ctx):
    latest_id = get_latest_id(ctx)
    return increment_id(latest_id)


def increment_id(migration_id):
    inc = str(int(migration_id) + 1).rjust(4, "0")
    logger.debug(f"Next ID: {inc}")

    return inc


def write_migration_file(
    migration_dir,
    migration_file,
    migration_number,
    timestamp,
    migration_table="edda_migrations",
    migration_type="",
    finalization_body=None,
):
    migration_contents = f"-- Migration number: {migration_number} \t {timestamp}\n"

    if migration_type == "init":
        migration_contents += (
            f"\nCREATE TABLE IF NOT EXISTS {migration_table}(\n"
            "    id INTEGER PRIMARY KEY AUTOINCREMENT,\n"
            "    name TEXT UNIQUE,\n"
            "    is_transition BOOLEAN DEFAULT FALSE NOT NULL,\n"
            "    in_transition_state BOOLEAN DEFAULT FALSE NOT NULL,\n"
            "    applied_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL\n"
            ");"
        )
    elif migration_type == "" and finalization_body:
        migration_contents += f"\n{finalization_body}\n\n"

    try:
        with open(f"{migration_dir}/{migration_file}", "w") as new_migration:
            new_migration.write(migration_contents)
    except Exception as e:
        err(f"Error writing to {migration_file}\n\n{e}")


def execute_sql_file(migration_file, migration_dir, env, env_db, verbose=False) -> str:
    command = [
        "wrangler",
        "--env",
        env,
        "d1",
        "execute",
        env_db,
        "--file",
        f"{migration_dir}/{migration_file}",
    ]
    if not verbose:
        command.append("--json")
    return execute_command(command)


def execute_sql(sql, env, env_db, verbose=False) -> (str, int):
    command = [
        "wrangler",
        "--env",
        env,
        "d1",
        "execute",
        env_db,
        f"--command",
        f"{sql}",
    ]
    if not verbose:
        command.append("--json")
    return execute_command(command)


def execute_command(command):
    logger.debug(f'Shell Execution: {" ".join(command)}')
    client = subprocess.run(command, text=True, capture_output=True)

    return (client.stdout, client.returncode)


def get_status(env, env_db, migration_table) -> Migrations:
    sql = f"SELECT * FROM {migration_table};"
    results, results_code = execute_sql(sql, env, env_db)

    if results_code == 1:
        return []

    return Migrations(
        "remote",
        [
            Migration(
                migration["id"],
                migration["name"],
                migration["is_transition"],
                migration["in_transition_state"],
            )
            for migration in json.loads(results)[0]["results"]
        ],
    )


def log_migration(
    migration_file, env, env_db, is_transition=False, is_transitioning=False
):
    sql = (
        f"INSERT INTO edda_migrations (name,is_transition,in_transition_state) "
        f"VALUES ('{migration_file}',{int(is_transition)},{int(is_transitioning)}) "
        f"ON CONFLICT(name) DO UPDATE SET "
        f"in_transition_state={int(is_transitioning)}"
    )
    if is_transition:
        sql += f", is_transition={int(is_transition)} "

    results, results_code = execute_sql(sql, env, env_db, verbose=True)

    if results_code == 1:
        err(f"Error executing log of {migration_file} on env.{env}.{env_db}")

    logger.debug(f"{migration_file} successfully logged")
