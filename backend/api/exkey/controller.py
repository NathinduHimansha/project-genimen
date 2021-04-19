from flask import Flask, Blueprint, request
from api.exkey import service
from api.common.utils import createSuccessResponse, createErrResponse
#from api.exkey import keyword_service
#from api.exkey.wordCounter import WordCounter

# Design Specific values
numberOfTrendValues = 9
numberOfTopSimilarityWords = 3

exKey = Blueprint('exKey', __name__, url_prefix='/api')

@exKey.route('/Exkey/GetTrends',methods=['GET'])
def get_bar_graph_values():
    bargraph ={}
    valueList = service.get_trend_word_count(numberOfTrendValues)
    return createSuccessResponse(valueList)

@exKey.route('/Exkey/GetCandidates',methods=['GET'])
def get_treeMap_values():
    treeMap =[]
    #treeMap ={'series':[{'data':[]}]}

    similar_word_list = service.get_similar_word_instances(numberOfTopSimilarityWords,numberOfTrendValues)
    for element in similar_word_list:
        treeMap.append({'x':element[0],'y':200})
    
    return createSuccessResponse(treeMap)


