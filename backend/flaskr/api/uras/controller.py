import pickle
from analytics.test import hello


def get_sentiment(sentence_list):
    model = pickle.load(
        open("analytics/sentiment_analysis/uras/model/trained_model/sgd_model/sgd_model.pickle", 'rb'))
    vc = pickle.load(
        open("analytics/sentiment_analysis/uras/model/trained_model/sgd_model/vectorizer.pickle", 'rb'))
    bow = vc.transform(sentence_list)
    return model.predict(bow)
    #  return "h"


print(get_sentiment(["such a good phone"]))
print(hello())
