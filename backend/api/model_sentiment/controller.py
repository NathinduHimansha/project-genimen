from flask import Flask, request, Blueprint

from analytics.model_specific.model_lexicon.model_lexicon import available_models, MODELS
from api.common.utils import createSuccessResponse, createErrResponse
from api.model_sentiment.service import get_model_sentiment


model_sentiment = Blueprint('ModelSentiment', __name__, url_prefix='/api')

# Checking the model is available
def is_model_valid(model_name):
    if model_name in MODELS:
        return True

@model_sentiment.route('/ModelSentiment/<string:model_name>', methods=['GET'])
def handle_model_sentiment(model_name):
    model_name = str(model_name)
    if not is_model_valid(model_name):
        return createErrResponse("smartphone model not available !")
    if request.method == 'GET':
        return createSuccessResponse(get_model_sentiment(model_name).__dict__)

@model_sentiment.route('/ModelSentiment/getmodels', methods=['GET'])
def get_model_list():
    if request.method == 'GET':
        return createSuccessResponse(available_models)
    else:
        return createErrResponse()



