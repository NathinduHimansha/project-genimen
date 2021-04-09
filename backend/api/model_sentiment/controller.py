from flask import Flask, request, Blueprint

from analytics.model_specific.model_lexicon.model_lexicon import available_models
from api.common.utils import createSuccessResponse, createErrResponse
from api.model_sentiment.service import get_model_sentiment


model_sentiment = Blueprint('ModelSentiment', __name__, url_prefix='/api')

def createSuccessResponse(data):
    return {
        'data': data,
        'status': 1,
    }


@model_sentiment.route('/ModelSentiment/<string:model_name>', methods=['GET'])
def handle_model_sentiment(model_name):
    model_name = str(model_name)
    if request.method == 'GET':
        return createSuccessResponse(get_model_sentiment(model_name).__dict__)
    else:
        return createErrResponse("selected smartphone model is currently not available!")

@model_sentiment.route('/ModelSentiment/getmodels', methods=['GET'])
def get_model_list():
    if request.method == 'GET':
        return createSuccessResponse(available_models)
    else:
        return createErrResponse()



