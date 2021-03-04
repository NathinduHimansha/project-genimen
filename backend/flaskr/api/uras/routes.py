from flask import Flask, Blueprint

uras = Blueprint('uras', __name__, url_prefix="/uras")


@uras.route('/', methods=['GET'])
def feature_sentiment_analysis():
    return "Hello world!"
