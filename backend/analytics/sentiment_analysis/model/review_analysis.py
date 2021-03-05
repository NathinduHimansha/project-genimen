import pickle
from analytics.sentiment_analysis.preprocessing.clean_data import clean_text


def get_sentiment(sentence_list):
    model = pickle.load(
        open("analytics/sentiment_analysis/model/trained_model/sgd_model/sgd_model.pickle", 'rb'))
    vc = pickle.load(
        open("analytics/sentiment_analysis/model/trained_model/sgd_model/vectorizer.pickle", 'rb'))
    cleaned_sentences = list(map(clean_text, sentence_list))
    bow = vc.transform(cleaned_sentences)
    return model.predict(bow).tolist()
