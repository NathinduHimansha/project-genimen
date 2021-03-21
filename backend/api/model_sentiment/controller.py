from flask import Flask, request, Blueprint
from api.common.utils import createSuccessResponse, createErrResponse
from api.model_sentiment.service import get_model_sentiment


model_sentiment = Blueprint('ModelSentiment', __name__, url_prefix='/api')


@model_sentiment.route('/ModelSentiment/<string:model_name>', methods=['GET'])
def handle_model_sentiment(model_name):
    model_name = str(model_name)
    if request.method == 'GET':
        return createSuccessResponse(get_model_sentiment(model_name).__dict__)
    else:
        return createErrResponse()


