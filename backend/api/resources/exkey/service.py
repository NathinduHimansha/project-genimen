import json
from gensim.models import Word2Vec

keyword_resource =open('analytics/keyword_extract/word_count_ref.json','r')
lexicon_resource= open('analytics/keyword_extract/identified_noun_ref.json','r')
#Opening Resources required
similarity_resource = Word2Vec.load('analytics/wordEmbedding.sav')
trend_data = json.load(keyword_resource)
noun_data = json.load(lexicon_resource)
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

def get_similar_word_instances(numberOfCandidates):
    '''
        Get the similar Word list
        @numberOfCandidates frontend requirement 
    '''
    similar_ins_list =[]
    cadidate_list = trend_data[0:numberOfCandidates]
    for candidate in cadidate_list:
        cadidate_key = candidate[0]
        similar_candidate_list = similarity_resource.wv.most_similar(cadidate_key)
        for similar_entity in similar_candidate_list:
            similar_ins_list.append(similar_entity)
    similar_ins_list = sorted(similar_ins_list,key=lambda x:x[1],reverse=True)
    
    for similarity_tuple in similar_ins_list:
        if len(similar_ins_list) >9:
            if similarity_tuple[0] not in noun_data:
                similar_ins_list.pop(similar_ins_list.index(similarity_tuple))
    return similar_ins_list[0:numberOfCandidates]
    
        

