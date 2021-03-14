import os
from api.routes import initialize_routes
from flask import Flask
from flask_cors import CORS


def create_app(test_config=None):
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)

    #  app.config['CORS_HEADERS'] = 'Content-Type'
    #  cors = CORS(app, resources={r"/api/*": {"origins": "*"}})
    app.config.from_mapping(
        SECRET_KEY='dev',
        #  DATABASE=os.path.join(app.instance_path, 'sqlite'),
    )

    if test_config is None:
        # load the instance config, if it exists, when not testing
        app.config.from_pyfile('config.py', silent=True)
    else:
        # load the test config if passed in
        app.config.from_mapping(test_config)

    # ensure the instance folder exists
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    initialize_routes(app)
    # a simple page that says hello

    #  CORS(app)
    CORS(app, resources={r"/api/*": {"origins": "*"}})

    @app.route('/api/hello', methods=["POST"])
    def hello():
        return 'Hello, World!'

    return app
