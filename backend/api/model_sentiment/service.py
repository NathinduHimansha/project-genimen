import nltk
import pandas as pd

from analytics.model_specific.data_processing.model_clean_reviews import get_models_from_regex
from analytics.model_specific.smartphone_model.phone_model import Model
from api.model_sentiment.aspect_analysis import get_features_with_sentiment, get_sentiment_percentage

from analytics.model_specific.model_lexicon.model_lexicon import feature_types


def get_model_sentiment(model_name):
    df = pd.read_json("analytics/data/amazon_mobile_user_reviews.jl", lines=True)  # Main dataset
    df['product_name'] = df['product_name'].apply(
        lambda x: x[0])  # setting the product name by only model name (excluding specs)

    df = get_models_from_regex(model_name, df)
    smart_phone = Model
    all_reviews_arr = []
    for row in df.review:
        review_arr = nltk.tokenize.sent_tokenize(str(row))
        for review in range(len(review_arr)):
            all_reviews_arr.append(review_arr[review])

    smart_phone = get_features_with_sentiment(all_reviews_arr)  # Finding features and getting sentiment value
    smart_phone = get_sentiment_percentage(smart_phone)  # Getting sentiment score by percentage
    smart_phone.set_model_name(str(model_name))
    return smart_phone


def get_final_results(smart_phone):
    final_results = []
    for features in feature_types:
        if features == "battery":
            feature_results = {'model': smart_phone.get_model_name(),
                               'feature': features, 'feature_count': smart_phone.get_battery_count(),
                               'feature_neg': smart_phone.get_battery_neg(),
                               'feature_pol': smart_phone.get_battery_pol(),
                               'feature_pos': smart_phone.get_battery_pos()}
            final_results.append(feature_results)
        if features == "camera":
            feature_results = {'model': smart_phone.get_model_name(),
                               'feature': features, 'feature_count': smart_phone.get_camera_count(),
                               'feature_neg': smart_phone.get_camera_neg(), 'feature_pol': smart_phone.get_camera_pol(),
                               'feature_pos': smart_phone.get_camera_pos()}
            final_results.append(feature_results)
        if features == "display":
            feature_results = {'model': smart_phone.get_model_name(),
                               'feature': features, 'feature_count': smart_phone.get_display_count(),
                               'feature_neg': smart_phone.get_display_neg(),
                               'feature_pol': smart_phone.get_display_pol(),
                               'feature_pos': smart_phone.get_display_pos()}
            final_results.append(feature_results)
        if features == "face recognition":
            feature_results = {'model': smart_phone.get_model_name(),
                               'feature': features, 'feature_count': smart_phone.get_face_recognition_count(),
                               'feature_neg': smart_phone.get_face_recognition_neg(),
                               'feature_pol': smart_phone.get_face_recognition_pol(),
                               'feature_pos': smart_phone.get_face_recognition_pos()}
            final_results.append(feature_results)
        if features == "finger print":
            feature_results = {'model': smart_phone.get_model_name(),
                               'feature': features, 'feature_count': smart_phone.get_finger_print_count(),
                               'feature_neg': smart_phone.get_finger_print_neg(),
                               'feature_pol': smart_phone.get_finger_print_pol(),
                               'feature_pos': smart_phone.get_finger_print_pos()}
            final_results.append(feature_results)
        if features == "speaker":
            feature_results = {'model': smart_phone.get_model_name(),
                               'feature': features, 'feature_count': smart_phone.get_speaker_count(),
                               'feature_neg': smart_phone.get_speakers_neg(),
                               'feature_pol': smart_phone.get_speakers_pol(),
                               'feature_pos': smart_phone.get_speakers_pos()}
            final_results.append(feature_results)
    return final_results
