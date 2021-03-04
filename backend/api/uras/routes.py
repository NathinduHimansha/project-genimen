from flask import Flask, Blueprint

uras = Blueprint('uras', __name__)


@uras.route('/uras', methods=['PUT'])
def feature_sentiment_analysis():
    return "Hello world"
