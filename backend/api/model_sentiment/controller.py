from flask import Flask, request, Blueprint
from analytics.model_specific.model_lexicon.model_lexicon import available_models, MODELS
from analytics.model_specific.smartphone_model.phone_model import Model
from api.common.utils import createSuccessResponse, createErrResponse
from api.model_sentiment.service import get_model_sentiment, get_final_results

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
        model = get_model_sentiment(model_name)
        return createSuccessResponse(get_final_results(model))

@model_sentiment.route('/ModelSentiment/getmodels', methods=['GET'])
def get_model_list():
    if request.method == 'GET':
        return createSuccessResponse(available_models)
    else:
        return createErrResponse()

@model_sentiment.route('/ModelSentiment/analyze', methods=['POST'])
def handle_model_sentiment_post():
    response = request.json
    model_name = response
    phone = str(model_name.get("model_name"))
    if not is_model_valid(phone):
        return createErrResponse("smartphone model not available !")
    if request.method == 'POST':
        model = Model
        model = get_model_sentiment(phone)
        return createSuccessResponse(get_final_results(model))