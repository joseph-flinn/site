import json
import os

import click
import click_log

from tabulate import tabulate

from src.about import _version
from src.log import logger
from src.utils import *


click_log.basic_config(logger)


MIGRATION_TABLE="edda_migrations"


@click.group()
@click_log.simple_verbosity_option(logger)
@click.option("--testing", is_flag=True, help="Use the local /test migrations")
@click.option(
    "--config",
    "-c",
    default="./wrangler.toml",
    help="Path to wrangler config (default: ./wrangler.toml)"
)
@click.option(
    "--env",
    "-e",
    help="Cloudflare environment; configured in wrangler.toml"
)
@click.option("--db", "-d", help="Directory containing all migrations; matches DB in wrangler.toml; <db>-dev used for non-production")
@click.pass_context
def cli(ctx, testing, config, env, db):
    # ensure that ctx.obj exists and is a dict (in case `cli()` is called
    # by means other than the `if` block below)
    ctx.ensure_object(dict)
    ctx.obj['TESTING'] = testing
    ctx.obj['CONFIG_PATH'] = config
    ctx.obj['ENV'] = env
    ctx.obj['DB'] = db
    ctx.obj['MIGRATION_TABLE'] = MIGRATION_TABLE


@cli.command()
@click.pass_context
@click.argument("name")
@click.option("--finalization-migration", "-fm", "requires_finalization", is_flag=True)
def create(ctx, name, requires_finalization):
    """
    Create a migration file and optional finalization migration file
    """
    ctx = build_context(ctx)
    ctx.ensure_object(dict)

    logger.debug(f"Running create...")

    try:
        inc = get_inc(ctx.obj["MIGRATIONS"], ctx.obj["TRANSITIONS"])
    except:
        err(
            "Cannot compute the next migration. No migrations exist."
            "Run init to initalize the migrator:\n\n"
            "  python eddm.py init"
        )

    migration_filename = f"{inc}_{name.replace(' ', '_')}.sql"
    write_migration_file(
        ctx.obj["MIGRATIONS"],
        migration_filename,
        inc,
        ctx.obj["TIMESTAMP"],
        ctx.obj["MIGRATION_TABLE"]
    )
    click.echo(f"Created new migration: {ctx.obj['MIGRATIONS']}/{migration_filename}")

    if requires_finalization:
        finalization_migration_filename = f"{inc}+finalize_{name.replace(' ', '_')}.sql"
        write_migration_file(
            ctx.obj["FINALIZATIONS"],
            finalization_migration_filename,
            inc,
            ctx.obj["TIMESTAMP"],
            ctx.obj["MIGRATION_TABLE"],
            migration_type="finalization"
        )
        click.echo(f"Created new finaliztaion migration: {ctx.obj['FINALIZATIONS']}/{finalization_migration_filename}")


@cli.command('list')
@click.pass_context
def list_migrations(ctx):
    """
    List all local migrations across the three migration directories
    """
    ctx = build_context(ctx)
    ctx.ensure_object(dict)

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
    """
    Finalize a migration that is in a Transition Phase
    """
    ctx = build_context(ctx)
    ctx.ensure_object(dict)

    logger.debug(f"Running finalize...")

    finalization_migration_filename = None

    logger.debug("Finalization migrations")
    for filename in os.listdir(ctx.obj['FINALIZATIONS']):
        logger.debug(f"  {filename}")
        if f"{migration_id}+finalize" in filename:
            finalization_migration_filename = filename

    if not finalization_migration_filename:
        err(f"Did not find a finalization migration for migration {migration_id}")


    inc = get_inc(ctx.obj["MIGRATIONS"], ctx.obj["TRANSITIONS"])
    finalization_migration_path = f"{ctx.obj['FINALIZATIONS']}/{finalization_migration_filename}"
    migration_path = f"{ctx.obj['FINALIZATIONS']}/{inc}_{finalization_migration_filename.split('+')[1]}"


    with open(finalization_migration_path, 'r') as f_migration_file:
        f_migration_sql = "\n".join(f_migration_file.read().split("\n")[1:])

    write_migration_file(
        ctx.obj['MIGRATIONS'],
        f"{inc}_{finalization_migration_filename.split('+')[1]}",
        inc,
        ctx.obj["TIMESTAMP"],
        ctx.obj["MIGRATION_TABLE"],
        finalization_body=f_migration_sql
    )

    click.echo(f"Created new migration: {migration_path}")

    os.remove(finalization_migration_path)
    click.echo(f"Removed finaliztaion migration: {finalization_migration_path}")


@cli.command()
@click.pass_context
def status(ctx):
    """
    Check the migrations status between local files and DB state
    """
    ctx = build_context(ctx)
    ctx.ensure_object(dict)

    logger.debug(f"Running status...")

    if ctx.obj['ENV'] is None or ctx.obj['D1_DB'] is None:
        err("--env and --db are required for status")

    current_status = sorted(get_status(ctx.obj['ENV'], ctx.obj['D1_DB'], ctx.obj['MIGRATION_TABLE']).names())

    logger.debug(f"Current status: {current_status}")

    db_migrations = ctx.obj["DB_MIGRATIONS"]

    migrations = [
        [m for m in db_migrations.migration.names() if m not in current_status],
        db_migrations.transition.names(),
        db_migrations.finalization.names(),
        db_migrations.manual.names()
    ]

    num_rows = len(max(migrations, key=lambda k: len(k)))
    num_columns = 4

    table = []
    for row_index in range(num_rows):
        row = []
        for column in migrations:
            if row_index < len(column):
                row.append(column[row_index])
            else:
                row.append("")
        table.append(row)

    click.echo(tabulate(table, headers=["migration", "transition", "finalization", "manual"]))



@cli.command()
@click.option("--mode", "-m", type=click.Choice(["migration", "transition", "manual"], case_sensitive=False), default="migration")
@click.pass_context
def apply(ctx, mode):
    """
    Apply new migrations

    Query the eddm_migration table and run any new migrations in order
    """
    ctx = build_context(ctx)
    ctx.ensure_object(dict)

    logger.debug(f"Running apply in {mode} mode...")

    if ctx.obj['ENV'] is None or ctx.obj['D1_DB'] is None:
        err("--env and --db are required for apply")

    env = ctx.obj['ENV']
    env_db = ctx.obj['D1_DB']
    migration_table = ctx.obj['MIGRATION_TABLE']
    db_migrations = ctx.obj['DB_MIGRATIONS']

    is_transition=False
    is_transitioning=False

    if mode == "transition":
        migration_dir = db_migrations.transition.path
        migrations_to_run = db_migrations.transition.names()
        is_transition=True
        is_transitioning=True
        logger.debug(f"Migration directory: {migration_dir}")
        logger.debug(f"Migrations to run: {migrations_to_run}")
    elif mode == "manual":
        err("`edda apply --mode manual` is not yet implemented")
    else:
        current_status = get_status(env, env_db, migration_table)
        logger.debug(f"Current status: {current_status}")

        current_status_without_transitions = set([
            migration.name
            for migration in current_status.migrations
            if not migration.is_transition
        ])

        migration_dir = db_migrations.migration.path
        migrations_to_run = sorted(set(db_migrations.migration.names()) - current_status_without_transitions)
        logger.debug(f"Migrations to run: {migrations_to_run}")

    if len(migrations_to_run) == 0:
        click.echo(f"No migrations to execute. Run `edda status` to confirm")
    else:
        logger.debug(f"Running {len(migrations_to_run)} migrations...")

        click.echo(f"[Executing Migrations]")
        for migration in migrations_to_run:
            print(migration)
            results, results_code = execute_sql_file(migration, migration_dir, env, env_db)

            if results_code == 1:
                err(f"Error executing {migration} on env.{env}.{env_db}")

            logger.debug(f"migration execution: {migration}\n\n{json.loads(results)}")
            log_migration(migration, env, env_db, is_transition=is_transition, is_transitioning=is_transitioning)


@cli.command()
@click.option("--file", "-f", "sql_file")
@click.option("--command", "-c")
@click.option("--migration", "-m", "is_migration", is_flag=True)
@click.pass_context
def execute(ctx, sql_file, command, is_migration):
    """
    Apply new migrations

    Query the eddm_migration table and run any new migrations in order
    """
    ctx = build_context(ctx)
    ctx.ensure_object(dict)

    logger.debug(f"Running execute ...")

    if ctx.obj['ENV'] is None or ctx.obj['D1_DB'] is None:
        err("--env and --db are required for apply")

    env = ctx.obj['ENV']
    env_db = ctx.obj['D1_DB']
    migration_table = ctx.obj['MIGRATION_TABLE']

    if command:
        click.echo(f"Executing SQL command...")
        results, results_code = execute_sql(command, env, env_db, verbose=True)
        logger.debug(f"command: {command} => {'success' if results_code == 0 else 'failure'}")
        click.echo(f"{results}")
    elif sql_file:
        if not os.path.exists(sql_file):
            err(f"{sql_file} not found")

        path_elements = sql_file.split("/")
        filename = path_elements[-1]
        directory = f'./{"/".join(path_elements[1:-1]) if path_elements[0] == "." else "/".join(path_elements[0:-1])}'

        if is_migration:
            current_status = set(get_status(env, env_db, migration_table))
            logger.debug(f"Current status: {current_status}")
            is_transition = False
            is_transitioning = False

            if "transition_migrations/" in directory:
                is_transition = True
                is_transitioning= True

        click.echo(f"Executing SQL file...")
        results, results_code = execute_sql_file(filename, directory, env, env_db, verbose=True)

        if results_code == 1:
            err(f"Error executing {directory}/{filename} on env.{env}.{env_db}\n\nstdout:\n{results}")

        logger.debug(f"sql file: {directory}/{filename} => {'success' if results_code == 0 else 'failure'}")
        click.echo(f"{results}")
        if is_migration:
            log_migration(file, env, env_db, is_transition=is_transition, is_transitioning=is_transitioning)
    else:
        err("Please supply either --file or --command")


@cli.command()
@click.pass_context
def init(ctx):
    """
    Create the migration to initalize the migrations tracking table

    Loop through all migrations in the /migrations directory
    and ask the user if it has been run for the initial population of the table. Dump to the
    <id>_init_migrations.sql file
    """
    ctx = build_context(ctx)
    ctx.ensure_object(dict)

    logger.debug(f"Running init...")
    try:
        inc = get_inc(ctx.obj["MIGRATIONS"], ctx.obj["TRANSITIONS"])
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
        ctx.obj["MIGRATION_TABLE"],
        migration_type="init"
    )

    click.echo("Migration tracking initalized")


@cli.command()
def version():
    click.echo(f"version: {_version}")

if __name__ == "__main__":
    cli(obj={})
