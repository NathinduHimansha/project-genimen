import pickle


def get_sentiment(sentence):
    model = pickle.load(
        open("flaskr/data_analytics/sentiment_analysis/uras/model/_trained_models/sgd_model.pickle", 'rb'))
    #  return pickle.predict(sentence)
    return "h"


get_sentiment("gtdghghghgdhgd")
