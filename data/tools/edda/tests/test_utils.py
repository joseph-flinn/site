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

    assert db_migrations.migration.names() == ["0000_init_migrator.sql", "0001_create_drip.sql"]
    assert db_migrations.transition.names() == ["0002_test_transition.sql"]
    assert db_migrations.finalization.names() == ["0001+finalize_create_drip.sql"]
    assert db_migrations.manual.names() == []


def test_get_latest_id(ctx):
    assert get_latest_id(ctx) == "0002"


def test_increment_id():
    assert increment_id("0000") == "0001"
    assert increment_id("0003") == "0004"
    assert increment_id("0009") == "0010"



