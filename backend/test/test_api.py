import pytest
import json
from api import create_app
from api.auth.controller import create_token
from flask_jwt_extended import create_access_token
from api.database.db import db


def test_signup(client):
    # add new user
    payload = json.dumps({
        "email": "uniq@email.com",
        "password": "hakunamatatha",
        "username": "uniq"
    })
    res = client.post('/api/auth/signup',
                      headers={"Content-Type": "application/json"}, data=payload)

    assert dict(res.json)['status'] == 1

    # add existing user
    payload = json.dumps({
        "email": "uniq@email.com",
        "password": "hakunamatatha",
        "username": "uniq"
    })
    res = client.post('/api/auth/signup',
                      headers={"Content-Type": "application/json"}, data=payload)

    assert dict(res.json)['status'] == 0

    # invalid credentials
    payload = json.dumps({
        "email": "uniqemail.com",
        "password": "hatatha",
        "username": "udniq"
    })

    res = client.post('/api/auth/signup',
                      headers={"Content-Type": "application/json"})
    assert res.status_code == 400


def test_login(client):
    # add new user
    payload = json.dumps({
        "email": "uniq@email.com",
        "password": "hakunamatatha",
        "username": "uniq"
    })
    res = client.post('/api/auth/signup',
                      headers={"Content-Type": "application/json"}, data=payload)

    # sign in to as new user
    payload = json.dumps({
        "email": "uniq@email.com",
        "password": "hakunamatatha",
    })
    res = client.post('/api/auth/login',
                      headers={"Content-Type": "application/json"}, data=payload)

    assert dict(res.json)['status'] == 1

    # sign in with username
    payload = json.dumps({
        "username": "uniq",
        "password": "hakunamatatha",
    })
    res = client.post('/api/auth/login',
                      headers={"Content-Type": "application/json"}, data=payload)

    assert dict(res.json)['status'] == 1

    # sign in with wrong password
    payload = json.dumps({
        "username": "uniq",
        "password": "hakunamatathad",
    })
    res = client.post('/api/auth/login',
                      headers={"Content-Type": "application/json"}, data=payload)

    assert dict(res.json)['status'] == 0

    # sign in with wrong username
    payload = json.dumps({
        "username": "uniqj",
        "password": "hakunamatatha",
    })
    res = client.post('/api/auth/login',
                      headers={"Content-Type": "application/json"}, data=payload)
    assert dict(res.json)['status'] == 0


def test_uras(client):
    access_token = create_access_token("testUser")
    headers = {
        'Authorization': 'Bearer {}'.format(access_token)
    }
    res = client.get('/api/uras', headers=headers)
    assert dict(res.json)['status'] == 1
    assert res.status_code == 200


def test_uras_analytics(client, mocker):
    mockedResults = {
        'feature-sentiment-polarity': [],
        'phone-feature-polarity': [],
    }
    mocker.patch(
        "api.uras.controller.get_reviews_sentiment_summary", return_value=mockedResults)
    access_token = create_access_token("testUser")
    mimetype = 'application/json'
    headers = {
        'Authorization': 'Bearer {}'.format(access_token)
    }

    # request without requierd data
    res = client.post('/api/uras', headers=headers)
    assert dict(res.json)['status'] == 0
    assert res.status_code == 200

    data = {
        'fingerprint': 'onscreen'
    }

    headers['Content-Type'] = mimetype
    headers['Accept'] = mimetype

    # request with valid data
    res = client.post('/api/uras', data=json.dumps(data), headers=headers)
    assert dict(res.json)['status'] == 1
    assert res.status_code == 200

    data = {
        'nosuchfeature': 'nofeaturetype'
    }

    # request with invalid data
    res = client.post('/api/uras', data=json.dumps(data), headers=headers)
    assert dict(res.json)['status'] == 0
    assert res.status_code == 200
