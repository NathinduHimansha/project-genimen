from api.model_sentiment.controller import model_sentiment
from api.uras.controller import uras
from api.auth.controller import auth


def initialize_routes(app):
    app.register_blueprint(uras)
    app.register_blueprint(auth)
    app.register_blueprint(model_sentiment)