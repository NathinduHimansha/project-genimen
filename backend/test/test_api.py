import pytest
import json
from api import create_app


def test_hello(client):
    rv = client.get('/api/hello')
    print("RV")
    print(rv)
    assert rv.status_code == 200


def test_uras(client):
    rv = client.get('/api/uras')
    assert dict(rv.json)['status'] == 1
    assert rv.status_code == 200


def test_uras_analytics(client):
    # request without requierd data
    rv = client.post('/api/uras')
    assert dict(rv.json)['status'] == 0
    assert rv.status_code == 200

    mimetype = 'application/json'
    headers = {
        'Content-Type': mimetype,
        'Accept': mimetype
    }
    data = {
        'fingerprint': 'onscreen'
    }

    # request with valid data
    rv = client.post('/api/uras', data=json.dumps(data), headers=headers)
    assert dict(rv.json)['status'] == 1
    assert rv.status_code == 200

    data = {
        'nosuchfeature': 'nofeaturetype'
    }

    # request with invalid data
    rv = client.post('/api/uras', data=json.dumps(data), headers=headers)
    assert dict(rv.json)['status'] == 0
    assert rv.status_code == 200
