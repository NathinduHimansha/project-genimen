import pytest
import json

import requests

from api import create_app
from api.resources.auth.controller import create_token
from flask_jwt_extended import create_access_token
from api.database.db import db


@pytest.mark.db
def test_signup(db_client):
    # add new user
    payload = json.dumps({
        "email": "uniq@email.com",
        "password": "hakunamatatha",
        "username": "uniq"
    })
    res = db_client.post('/api/auth/signup',
                         headers={"Content-Type": "application/json"}, data=payload)

    assert dict(res.json)['status'] == 1

    # add existing user
    payload = json.dumps({
        "email": "uniq@email.com",
        "password": "hakunamatatha",
        "username": "uniq"
    })
    res = db_client.post('/api/auth/signup',
                         headers={"Content-Type": "application/json"}, data=payload)

    assert dict(res.json)['status'] == 0

    # invalid credentials
    payload = json.dumps({
        "email": "uniqemail.com",
        "password": "hatatha",
        "username": "udniq"
    })

    res = db_client.post('/api/auth/signup',
                         headers={"Content-Type": "application/json"})
    assert res.status_code == 400


@pytest.mark.db
def test_login(db_client):
    # add new user
    payload = json.dumps({
        "email": "uniq@email.com",
        "password": "hakunamatatha",
        "username": "uniq"
    })
    res = db_client.post('/api/auth/signup',
                         headers={"Content-Type": "application/json"}, data=payload)

    # sign in to as new user
    payload = json.dumps({
        "email": "uniq@email.com",
        "password": "hakunamatatha",
    })
    res = db_client.post('/api/auth/login',
                         headers={"Content-Type": "application/json"}, data=payload)

    assert dict(res.json)['status'] == 1

    # sign in with username
    payload = json.dumps({
        "username": "uniq",
        "password": "hakunamatatha",
    })
    res = db_client.post('/api/auth/login',
                         headers={"Content-Type": "application/json"}, data=payload)

    assert dict(res.json)['status'] == 1

    # sign in with wrong password
    payload = json.dumps({
        "username": "uniq",
        "password": "hakunamatathad",
    })
    res = db_client.post('/api/auth/login',
                         headers={"Content-Type": "application/json"}, data=payload)

    assert dict(res.json)['status'] == 0

    # sign in with wrong username
    payload = json.dumps({
        "username": "uniqj",
        "password": "hakunamatatha",
    })
    res = db_client.post('/api/auth/login',
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
        "api.resources.uras.controller.get_reviews_sentiment_summary", return_value=mockedResults)
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


def test_model_sentiment(client):
    access_token = create_access_token("testUser")
    headers = {
        'Authorization': 'Bearer {}'.format(access_token)
    }
    res = client.get('/api/ModelSentiment/models', headers=headers)
    assert dict(res.json)['status'] == 1
    assert res.status_code == 200


def test_model_sentiment_analytics(client, mocker):
    mockedResults = {}
    mocker.patch(
        "api.resources.model_sentiment.controller.get_final_results", return_value=mockedResults)

    access_token = create_access_token("testUser")
    headers = {
        'Authorization': 'Bearer {}'.format(access_token)
    }
    mimetype = 'application/json'
    # sending a invalid smartphone model
    invalid_model = "iPhone 90"
    res = client.get('/api/ModelSentiment/' + invalid_model, headers=headers)
    assert dict(res.json)['status'] == 0
    assert res.status_code == 200

    access_token = create_access_token("testUser")
    headers = {
        'Authorization': 'Bearer {}'.format(access_token)
    }
    mimetype = 'application/json'
    headers['Content-Type'] = mimetype
    headers['Accept'] = mimetype

    # sending a invalid smartphone model
    invalid_model = {"model_name": "iPhone 1"}
    res = client.post('/api/ModelSentiment/analyze',
                      data=json.dumps(invalid_model), headers=headers)
    assert dict(res.json)['status'] == 0
    assert res.status_code == 200
