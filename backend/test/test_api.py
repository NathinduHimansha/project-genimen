import pytest
import json
from api import create_app
from api.auth.controller import create_token
from flask_jwt_extended import create_access_token
import datetime


def test_hello(client):
    rv = client.get('/api/hello')
    assert rv.status_code == 200


def test_uras(client):
    client.get()
    access_token = create_access_token("testUser")
    headers = {
        'Authorization': 'Bearer {}'.format(access_token)
    }
    rv = client.get('/api/uras', headers=headers)
    assert dict(rv.json)['status'] == 1
    assert rv.status_code == 200


def test_uras_analytics(client):
    client.get()
    access_token = create_access_token("testUser")
    mimetype = 'application/json'
    headers = {
        'Authorization': 'Bearer {}'.format(access_token)
    }

    # request without requierd data
    rv = client.post('/api/uras', headers=headers)
    assert dict(rv.json)['status'] == 0
    assert rv.status_code == 200

    data = {
        'fingerprint': 'onscreen'
    }

    headers['Content-Type'] = mimetype
    headers['Accept'] = mimetype

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
