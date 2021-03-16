from flask import Flask, request
from backend.api.common.utils import createSuccessResponse,createErrResponse
from backend.api.modle_sentiment.service import get_model_sentiment

model_sentiment = Flask(__name__)


@model_sentiment.route('/ModelSentiment/<string:model_name>', methods=['GET'])
def handle_model_sentiment(model_name):
    model_name = str(model_name)
    if request.method == 'GET':
        return createSuccessResponse(get_model_sentiment(model_name).__dict__)
    else:
        return createErrResponse()


if __name__ == '__main__':
    model_sentiment.run()
