from analytics.sentiment_analysis.model.review_analysis import get_sentiment


def predict_sentiment_score(sentence_list):
    return get_sentiment(sentence_list)
