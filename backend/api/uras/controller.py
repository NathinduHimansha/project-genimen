from flask import Flask, Blueprint, request
from flask.json import jsonify
from api.common.utils import createSuccessResponse, createErrResponse
from analytics.aspect_analysis.aspect_lexicons import FEATURE_TYPES
#  from .service import get_reviews_sentiment_summary, mock
from .service import get_reviews_sentiment_summary

uras = Blueprint('uras', __name__, url_prefix="/api/uras")


@uras.route('/', methods=['GET'])
def get_features_types():
    return createSuccessResponse(FEATURE_TYPES)


@uras.route('/', methods=['POST'])
def get_feature_sentiment_analysis():
    return get_reviews_sentiment_summary(request.json)
