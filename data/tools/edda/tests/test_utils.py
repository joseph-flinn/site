import pytest

import src.utils


class Context:
    def __init__(self, ctx):
        self.obj = ctx

@pytest.fixture
def db():
    return "tests/fixtures/test-db"


@pytest.fixture
def migrations(db):
    return f"{db}/migrations"


@pytest.fixture
def transitions(db):
    return f"{db}/transition_migrations"


@pytest.fixture
def finalizations(db):
    return f"{db}/finalization_migrations"


def test_get_inc(migrations, transitions):
    next_id = src.utils.get_inc(migrations, transitions)

    assert next_id == "0003"


