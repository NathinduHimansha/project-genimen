from flask import Flask, Blueprint, request
from flask_jwt_extended import jwt_required

from api.resources.exkey import service
from api.common.utils import createSuccessResponse, createErrResponse
#from api.resources.exkey import keyword_service
#from api.resources.exkey.wordCounter import WordCounter

# Design Specific values
numberOfTrendValues = 9
numberSimilarityWords = 12

exKey = Blueprint('exKey', __name__, url_prefix='/api')

@exKey.route('/Exkey/GetTrends',methods=['GET'])
@jwt_required()
def get_bar_graph_values():
    bargraph ={}
    valueList = service.get_trend_word_count(numberOfTrendValues)
    return createSuccessResponse(valueList)

@exKey.route('/Exkey/GetCandidates',methods=['GET'])
@jwt_required()
def get_treeMap_values():
    #treeMap =[]
    treeMap ={'series':[{'data':[]}]}

    similar_word_list = service.get_similar_word_instances(numberSimilarityWords)
    for element in similar_word_list:
        treeMap['series'][0]['data'].append({'x':element[0],'y':200})
    
    return treeMap


