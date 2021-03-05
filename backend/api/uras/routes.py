from flask import Flask, Blueprint
from flask.json import jsonify
from api.common.utils import createSuccessResponse, createErrResponse
from analytics.aspect_analysis.aspect_lexicons import FEATURE_TYPES
from .controller import predict_sentiment_score

uras = Blueprint('uras', __name__, url_prefix="/api/uras")


@uras.route('/', methods=['GET'])
def feature_sentiment_analysis():
    return createSuccessResponse(FEATURE_TYPES)
