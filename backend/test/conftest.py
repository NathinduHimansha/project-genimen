import pytest
from api import create_app


@pytest.fixture
def client():
    app = create_app('test')
    app.config["TESTING"] = True
    with app.test_client() as client:
        client.get()
        yield client
