import os
from api.routes import initialize_routes
from api.database.db import initialize_db
from flask import Flask
from flask_cors import CORS
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager
from os.path import join, dirname
from dotenv import load_dotenv
from mongoengine import connect, disconnect


def create_app(config=None, db=None):

    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)

    if (config == 'prod' or config == 'dev'):
        dotenv_path = join(dirname(__file__), '.env')
        load_dotenv(dotenv_path)

    elif (config == 'test'):
        dotenv_path = join(dirname(__file__), '.test.env')
        load_dotenv(dotenv_path)
    else:
        dotenv_path = join(dirname(__file__), '.dev.env')
        load_dotenv(dotenv_path)

    SECRET_KEY = os.environ.get('JWT_SECRET_KEY')
    MONGO_URI = db or os.environ.get('MONGO_URI')
    app.config['JWT_SECRET_KEY'] = SECRET_KEY
    app.config['MONGODB_SETTINGS'] = {
        'host': MONGO_URI
    }
    config == initialize_db(app)

    bcrypt = Bcrypt(app)
    jwt = JWTManager(app)

    # ensure the instance folder exists
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    initialize_routes(app)
    # a simple page that says hello

    #  app.config['CORS_HEADERS'] = 'Content-Type'
    #  cors = CORS(app, resources={r"/api/*": {"origins": "*"}})
    CORS(app, resources={r"/api/*": {"origins": "*"}})

    @app.route('/api/hello', methods=["GET"])
    def hello():
        return 'Hello!'

    return app
