import pytest


from src.utils import *


class Context:
    def __init__(self, ctx):
        self.obj = ctx


@pytest.fixture
def db():
    return "tests/fixtures/test-db"


@pytest.fixture
def migration_dir_names():
    return {
        "migrations": "migrations",
        "transitions": "transition_migrations",
        "finalizations": "finalization_migrations",
        "manual": "manual_migrations"
    }


@pytest.fixture
def migration_dirs(db, migration_dir_names):
    return {
        "migrations": f"{db}/{migration_dir_names['migrations']}",
        "transitions": f"{db}/{migration_dir_names['transitions']}",
        "finalizations": f"{db}/{migration_dir_names['finalizations']}",
        "manual": f"{db}/{migration_dir_names['manual']}"
    }


def test_get_local_migrations(migration_dirs):
    migrations = get_local_migrations(migration_dirs['migrations'])

    assert [migration.id for migration in migrations.migrations] == ["0000", "0001"]


@pytest.fixture
def ctx(migration_dirs):
    return Context({
        "DB_MIGRATIONS": load_migrations(
            migration_dirs['migrations'],
            migration_dirs['transitions'],
            migration_dirs['finalizations'],
            migration_dirs['manual'],
        )
    })


def test_load_migrations(migration_dirs):
    db_migrations = load_migrations(*migration_dirs.values())

    assert db_migrations.migration.to_simple_list() == ["0000_init_migrator.sql", "0001_create_drip.sql"]
    assert db_migrations.transition.to_simple_list() == ["0002_test_transition.sql"]
    assert db_migrations.finalization.to_simple_list() == ["0001+finalize_create_drip.sql"]
    assert db_migrations.manual.to_simple_list() == []


def test_get_inc(ctx):
    next_id = get_inc(ctx)

    assert next_id == "0003"


