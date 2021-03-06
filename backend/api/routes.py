from api.uras.controller import uras


def initialize_routes(app):
    app.register_blueprint(uras)
