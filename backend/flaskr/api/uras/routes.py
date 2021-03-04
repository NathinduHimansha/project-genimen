from flask import Flask, Blueprint
from .controller import get_sentiment

uras = Blueprint('uras', __name__, url_prefix="/api/uras")


@uras.route('/', methods=['GET'])
def feature_sentiment_analysis():
    return get_sentiment("such a good phone")
