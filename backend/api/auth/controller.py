from flask import Flask, Blueprint, request
from flask.json import jsonify
from api.database.models import User
from api.common.utils import createSuccessResponse, createErrResponse
import datetime
from flask import Response, request
from flask_jwt_extended import create_access_token


auth = Blueprint('auth', __name__, url_prefix="/api/auth")


def create_token(user):
    EXPIRES = datetime.timedelta(days=7)
    access_token = create_access_token(
        identity=str(user.id), expires_delta=EXPIRES)
    return access_token


@auth.route('/signup', methods=['POST'])
def signup():
    body = request.get_json()
    user = User(**body)
    user.hash_password()
    user.save()
    id = user.id
    access_token = create_token(user)
    return {'id': str(id), 'token': access_token}, 200


@auth.route('/login', methods=['POST'])
def login():
    body = request.get_json()
    user = User.objects.get(email=body.get('email'))
    authorized = user.check_password(body.get('password'))
    if not authorized:
        return createErrResponse({'error': 'Email or password invalid'})

    access_token = create_token(user)
    return {'token': access_token}, 200
