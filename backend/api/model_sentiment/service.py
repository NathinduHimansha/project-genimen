import pandas as pd

from analytics.model_specific.smartphone_model.phone_model import Model
from api.model_sentiment.aspect_analysis import get_features_with_sentiment, get_sentiment_percentage

from analytics.model_specific.model_lexicon.model_lexicon import feature_types, MODELS


def get_model_sentiment(model_name):
    find_model = MODELS[model_name]
    df = pd.read_csv(f'analytics/data/phone_reviews/{find_model}.csv', error_bad_lines=False)
    review_list = df['review'].values.tolist()
    smart_phone = Model
    smart_phone = get_features_with_sentiment(review_list)  # Finding features and getting sentiment value
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
