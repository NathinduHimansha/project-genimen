import pytest
from api import create_app
from api.database.db import db


@pytest.fixture
def client():
    app = create_app('test')
    app.config["TESTING"] = True
    with app.test_client() as client:
        with app.app_context() as ctx:
            ctx.push()
        yield client


@pytest.fixture
def db_client():
    app = create_app('test')
    app.config["TESTING"] = True
    with app.test_client() as client:
        with app.app_context() as ctx:
            ctx.push()
        _db = db.get_db()
        for collection in _db.list_collection_names():
            _db.drop_collection(collection)
        yield client
