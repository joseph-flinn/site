import json
import os

import click
import click_log


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
@click.option("--db", "-d", help="Directory containing migrations; matches DB in wrangler.toml; <db>-dev used for non-production")
@click.pass_context
def cli(ctx, testing, config, env, db):
    # ensure that ctx.obj exists and is a dict (in case `cli()` is called
    # by means other than the `if` block below)
    ctx.ensure_object(dict)
    ctx.obj['TESTING'] = testing
    ctx.obj['CONFIG_PATH'] = config
    ctx.obj['ENV'] = env
    ctx.obj['DB'] = db


@cli.command()
@click.pass_context
@click.argument("title")
@click.option("--finalization-migration", "-fm", is_flag=True)
def create(ctx, title, finalization_migration):
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
        finalization_body=f_migration_sql
    )

    click.echo(f"Created new migration: {migration_path}")

    os.remove(finalization_migration_path)
    click.echo(f"Removed finaliztaion migration: {finalization_migration_path}")


@cli.command()
@click.option("--which", "-w", type=click.Choice(["all", "new", "previous"], case_sensitive=False), default="all")
@click.pass_context
def status(ctx, which):
    """
    Check the migrations status between local files and DB state
    """
    ctx = build_context(ctx)
    ctx.ensure_object(dict)

    logger.debug(f"Running status...")

    if ctx.obj['ENV'] is None or ctx.obj['D1_DB'] is None:
        err("--env and --db are required for status")

    current_status = sorted(get_status(ctx.obj['ENV'], ctx.obj['D1_DB']))
    migrations = sorted(get_local_migrations(ctx.obj['MIGRATIONS']))

    logger.debug(f"Current status: {current_status}")


    if which in ["all", "new"]:
        click.echo(f"[New Migrations]")
        for migration in migrations:
            if migration not in current_status:
                print(migration)

    if which == "all":
        click.echo()

    if which in ["all", "previous"]:
        click.echo(f"[Previous Migrations]")
        for migration in migrations:
            if migration in current_status:
                print(migration)


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

    if mode == "transition":
        migration_dir = ctx.obj['TRANSITIONS']
        migration_to_run = sorted(get_local_migrations(migration_dir))
        logger.debug(f"Migrations to run: {migration_files}")
    if mode == "manual":
        err("`edda apply --mode manual` is not yet implemented")
    else:
        migration_dir = ctx.obj['MIGRATIONS']
        current_status = set(get_status(env, env_db))
        logger.debug(f"Current status: {current_status}")
        migrations_to_run = sorted(list(set(get_local_migrations(migration_dir)) - current_status))
        logger.debug(f"Migrations to run: {migrations_to_run}")

    if len(migrations_to_run) == 0:
        click.echo(f"No migrations to execute. Run `edda list` to confirm")
    else:
        logger.debug(f"Running {len(migrations_to_run)} migrations...")
        click.echo(f"[Executing Migrations]")
        for migration in migrations_to_run:
            print(migration)
            results, results_code = execute_sql_file(migration, migration_dir, env, env_db)

            if results_code == 1:
                err(f"Error executing {migration} on env.{env}.{env_db}")

            logger.debug(f"migration execution: {migration}\n\n{json.loads(results)}")
            log_migration(migration, env, env_db)


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
        migration_type="init"
    )

    click.echo("Migration tracking initalized")


@cli.command()
def version():
    click.echo(f"version: {_version}")

if __name__ == "__main__":
    cli(obj={})
