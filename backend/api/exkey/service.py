import json
from gensim.models import Word2Vec

keyword_resource =open('analytics/keyword_extract/word_count_ref.json','r')
#Opening Resources required
similarity_resource = Word2Vec.load('analytics/wordEmbedding.sav')
trend_data = json.load(keyword_resource)
#Calculating total Number of Word Appearance
totalInstances = sum([x[1] for x in trend_data])



def calculate_trend_percentage(elementInstances):
    '''
        Calculate the percentage of instance given
    '''
    return elementInstances / totalInstances * 100

def wordEmbedSimilarFunction(candidateKey,numberOfIns):
    '''
        Get the similar Words 
        @candidateKey target word
        @numberOfIns number of similar word
    '''
    return similarity_resource.wv.most_similar(candidateKey.lower(),topn=numberOfIns)

def get_trend_word_count(numberOfTrendValues):
    '''
        Get the similar Words 
        @numberOfTrendValues front end requirements     
    '''
    trend_list =[]
    sample_trend_data = trend_data[0:numberOfTrendValues]
    for element in sample_trend_data:
        trend_list.append({'keyword':element[0],'value':calculate_trend_percentage(element[1])})
    return trend_list

def get_similar_word_instances(topCountWords,numberOfCandidates):
    '''
        Get the similar Word list
        @topCountWords front end requirements (top most instance words)
        @numberOfCandidates frontend requirement 
    '''
    similar_ins_list =[]
    cadidate_list = trend_data[0:numberOfCandidates]
    for i in range(0,len(cadidate_list)):
        if i < topCountWords:
            top_similar_words = wordEmbedSimilarFunction(cadidate_list[i][0],2)
            similar_ins_list.append(top_similar_words[0][0])
            similar_ins_list.append(top_similar_words[1][0])
        else:
            similar_ins_list.append(wordEmbedSimilarFunction(cadidate_list[i][0],1)[0])
    return similar_ins_list
        

