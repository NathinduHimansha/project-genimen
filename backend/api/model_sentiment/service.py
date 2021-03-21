import nltk
import pandas as pd


from analytics.model_specific.data_processing.model_clean_reviews import get_models_from_regex
from analytics.model_specific.smartphone_model.phone_model import Model
from api.model_sentiment.aspect_analysis import get_features_with_sentiment, get_sentiment_percentage


def get_model_sentiment(model_name):
    df = pd.read_json("analytics/main-dataset/amazon_mobile_user_reviews.jl", lines=True)  # Main dataset
    df['product_name'] = df['product_name'].apply(
        lambda x: x[0])  # setting the product name by only model name (excluding specs)

    df = get_models_from_regex(model_name,df)
    smart_phone = Model
    all_reviews_arr = []
    for row in df.review:
        review_arr = nltk.tokenize.sent_tokenize(str(row))
        for review in range(len(review_arr)):
            all_reviews_arr.append(review_arr[review])

    smart_phone = get_features_with_sentiment(all_reviews_arr)  # Finding features and getting sentiment value
    smart_phone = get_sentiment_percentage(smart_phone)  # Getting sentiment score by percentage
    return smart_phone
