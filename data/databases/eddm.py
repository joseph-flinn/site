import datetime
import logging
import os
import tomllib

import click
import click_log


logger = logging.getLogger(__name__)
click_log.basic_config(logger)


def err(message: str) -> None:
    logger.error(message)
    exit(1)


def get_inc(directory):
    logger.debug(f"Directory: {directory}")
    files = [
        filename.split("_")[0]
        for filename in os.listdir(directory)
        if os.path.isfile(os.path.join(directory, filename))
    ]

    curr = sorted(files)[-1]
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
            "\nCREATE TABLE IF NOT EXISTS eddm_migrations (\n"
            "    migration VARCHAR(50),\n"
            "    timestamp DATE\n"
            ");\n\n"
            f"INSERT INTO eddm_migrations (migration, timestamp) values ({migration_file}, datetime('now'));"
        )

    elif migration_type == "":
        if finalization_body:
            migration_contents += f"\n{finalization_body}\n\n"
        migration_contents += "\n\n\n-- DO NOT REMOVE --\n"
        migration_contents += f"INSERT INTO eddm_migrations (migration, timestamp) values ('{migration_file}', datetime('now'));\n"

    try:
        with open(f"{migration_dir}/{migration_file}", "w") as new_migration:
            new_migration.write(migration_contents)
    except e:
        err(f"Error writing to {migration_file}\n\n{e}")


@click.group()
@click_log.simple_verbosity_option(logger)
@click.option("--testing", is_flag=True)
@click.option(
    "--config",
    "-c",
    default="./wrangler.toml",
)
@click.option(
    "--env",
    "-e",
)
@click.option("--db", "-d")
@click.pass_context
def cli(ctx, testing, config, env, db):
    # ensure that ctx.obj exists and is a dict (in case `cli()` is called
    # by means other than the `if` block below)
    ctx.ensure_object(dict)

    ctx.obj["TESTING"] = testing
    ctx.obj["TIMESTAMP"] = (
        datetime.datetime.utcnow().isoformat(timespec="milliseconds") + "Z"
    )

    # Setup Wrangler config (symlinked to current directory)
    try:
        with open(config, mode="rb") as fp:
            ctx.obj["WRANGLER_CONFIG"] = tomllib.load(fp)
    except:
        err(f"{config} does not exist")

    # Setup local database migration directory heirarchy
    if testing:
        db = "test"

    dbs = [filename for filename in os.listdir("./") if os.path.isdir(filename)]
    if db and db in dbs:
        ctx.obj["DB"] = db
        ctx.obj["MIGRATIONS"] = f"{db}/migrations"
        ctx.obj["TRANSITIONS"] = f"{db}/transition_migrations"
        ctx.obj["FINALIZATIONS"] = f"{db}/finalization_migrations"
    else:
        err(f"{db} migrations not found\nDBs found: {dbs}")

    # Setup Wrangler Environment from config
    if env:
        if env not in ctx.obj["WRANGLER_CONFIG"]["env"]:
            err(f"{env} is not configured in {config}")
        else:
            ctx.obj["ENV"] = env

            # Setup Wrangler database name and connection depending on the environment
            env_db = db if env.lower() in ["production", "prod"] else f"{db}-dev"
            env_dbs = [
                env_db["database_name"]
                for env_db in ctx.obj["WRANGLER_CONFIG"]["env"][env]["d1_databases"]
            ]

            if env_db not in env_dbs:
                err(f"{db} D1 is not bound to env.{env}")

            ctx.obj["D1_DB"] = env_db


@cli.command()
@click.pass_context
@click.argument("title")
@click.option("--finalization-migration", "-fm", is_flag=True)
def create(ctx, title, finalization_migration):
    logger.debug(f"Running create...")
    logger.debug(f"Timestamp: {ctx.obj['TIMESTAMP']}")

    logger.debug(f"DB: {ctx.obj['DB']}")
    logger.debug(f"ENV: {ctx.obj.get('ENV', None)}")
    logger.debug(f"D1_DB: {ctx.obj.get('D1_DB', None)}")

    try:
        inc = get_inc(f"./{ctx.obj['DB']}/migrations")
    except:
        err(
            "Cannot compute the next migration. No migrations exist."
            "Run init to initalize the migrator:\n\n"
            "  python eddm.py init"
        )

    migration_filename = f"{inc}_{title.replace(' ', '_')}.sql"
    write_migration_file(
        ctx.obj['MIGRATIONS'],
        migration_filename,
        inc,
        ctx.obj["TIMESTAMP"]
    )
    click.echo(f"Created new migration: {ctx.obj['MIGRATIONS']}/{migration_filename}")

    if finalization_migration:
        finalization_migration_filename = f"{inc}+finalize_{title.replace(' ', '_')}.sql"
        write_migration_file(
            ctx.obj['FINALIZATIONS'],
            finalization_migration_filename,
            inc,
            ctx.obj["TIMESTAMP"],
            migration_type="finalization"
        )
        click.echo(f"Created new finaliztaion migration: {ctx.obj['FINALIZATIONS']}/{finalization_migration_filename}")


@cli.command()
@click.pass_context
def list(ctx):
    logger.debug(f"Running list...")

    migration_dirs = ["migrations", "transition_migrations", "finalization_migrations"]

    for directory in migration_dirs:
        click.echo(f"[{directory}]")
        for migration in sorted(os.listdir(f"./{ctx.obj['DB']}/{directory}")):
            if migration[-4:] == ".sql":
                click.echo(f"{migration}")
        click.echo()


@cli.command()
@click.argument("migration_id")
@click.pass_context
def finalize(ctx, migration_id):
    logger.debug(f"Running finalize...")

    finalization_migration_filename = None

    logger.debug("Finalization migrations")
    for filename in os.listdir(ctx.obj['FINALIZATIONS']):
        logger.debug(f"  {filename}")
        if f"{migration_id}+finalize" in filename:
            finalization_migration_filename = filename

    if not finalization_migration_filename:
        err(f"Did not find a finalization migration for migration {migration_id}")


    inc = get_inc(f"./{ctx.obj['MIGRATIONS']}")
    finalization_migration_path = f"{ctx.obj['FINALIZATIONS']}/{finalization_migration_filename}"
    migration_path = f"{ctx.obj['FINALIZATIONS']}/{inc}_{finalization_migration_filename.split('+')[1]}"


    with open(finalization_migration_path, 'r') as f_migration_file:
        f_migration_sql = "\n".join(f_migration_file.read().split("\n")[1:])

    write_migration_file(
        ctx.obj['MIGRATIONS'],
        f"{inc}_{finalization_migration_filename.split('+')[1]}",
        inc,
        ctx.obj["TIMESTAMP"],
        finalization_body=f_migration_sql
    )

    click.echo(f"Created new migration: {migration_path}")

    os.remove(finalization_migration_path)
    click.echo(f"Removed finaliztaion migration: {finalization_migration_path}")


@cli.command()
@click.pass_context
def apply(ctx):
    logger.debug(f"Running apply...")


@cli.command()
@click.pass_context
def init(ctx):
    """
    Create the SQL for the eddm_migrations table. Loop through all migrations in the /migrations directory
    and ask the user if it has been run for the initial population of the table. Dump to the
    <id>_init_migrations.sql file
    """
    logger.debug(f"Running init...")
    try:
        inc = get_inc(f"./{ctx.obj['MIGRATIONS']}")
    except:
        inc = "0000"

    if inc != "0000":
        if any([
            "init_migrator" in filename
            for filename in os.listdir(f"./{ctx.obj['DB']}/migrations")
        ]):
               err("Migrator already initialized")
    migration_filename = f"{inc}_init_migrator.sql"
    write_migration_file(
        ctx.obj['MIGRATIONS'],
        migration_filename,
        inc,
        ctx.obj["TIMESTAMP"],
        migration_type="init"
    )

    click.echo("Migration tracking initalized")


if __name__ == "__main__":
    cli(obj={})
