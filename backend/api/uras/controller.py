from flask import Flask, Blueprint, request
from flask.json import jsonify
from api.common.utils import createSuccessResponse, createErrResponse
from analytics.aspect_analysis.aspect_lexicons import FEATURE_TYPES
#  from .service import get_reviews_sentiment_summary, mock
from api.uras.service import get_reviews_sentiment_summary
from flask_jwt_extended import jwt_required


uras = Blueprint('uras', __name__, url_prefix='/api')


def is_features_valid(feature_type_dic):
    feedback = {}
    if feature_type_dic == None:
        return False
    for feature, feature_type in feature_type_dic.items():
        if not isinstance(feature_type, str) or not isinstance(feature, str):
            return False
        f = feature.lower()
        if f not in FEATURE_TYPES:
            return False
        if feature_type not in FEATURE_TYPES[f]:
            return False

    return True


@uras.route('/uras', methods=['GET', 'POST'])
@jwt_required()
def handle_uras():
    if (request.method == 'POST'):
        feature_dict = request.json
        if (not is_features_valid(feature_dict)):
            return createErrResponse("req contains invalid features")
        review_summary = get_reviews_sentiment_summary(feature_dict)
        return createSuccessResponse(review_summary)
    else:
        return createSuccessResponse(get_features_types())


def get_features_types():
    return FEATURE_TYPES
