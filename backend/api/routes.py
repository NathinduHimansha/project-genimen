from api.resources.model_sentiment.controller import model_sentiment
from api.resources.exkey.controller import exKey
from api.resources.uras.controller import uras
from api.resources.auth.controller import auth


def initialize_routes(app):
    app.register_blueprint(uras)
    app.register_blueprint(auth)
    app.register_blueprint(model_sentiment)
    app.register_blueprint(exKey)

