from analytics.model_specific.smartphone_model.phone_model import Model
import pickle
from analytics.sentiment_analysis.preprocessing.clean_data import clean_text

def get_sentiment(sentence_list):
    model = pickle.load(
        open("analytics/sentiment_analysis/model/trained_model/sgd_model/sgd_model.pickle", 'rb'))
    vc = pickle.load(
        open("analytics/sentiment_analysis/model/trained_model/sgd_model/vectorizer.pickle", 'rb'))
    cleaned_sentences = list(map(clean_text, sentence_list))
    bow = vc.transform(cleaned_sentences)
    return model.predict(bow)


# return smartphone object with sentiment score for identified features
def get_features_with_sentiment(review_arr):
    phone_with_sentiment = Model()  # This object will store the all sentiment score for features
    for i in range(len(review_arr)):
        single_review_arr = review_arr[i].split()  # split sentence in to words by review
        synonyms = [["camera"],
                    ["display", "screen"],
                    ["battery"],
                    ["face recognition"],
                    ["fingerprint recognition", "fingerprint", "reader"],
                    ["speakers", "speaker", "sound"]]
        synonyms_parent = ["camera", "display", "battery", "face recognition", "fingerprint", "speakers"]

        for predefined_feature in range(len(synonyms)):
            for feature in single_review_arr:
                if feature in synonyms[predefined_feature]:
                    phone_with_sentiment = save_sentiment(synonyms_parent[predefined_feature],
                                                          int(get_sentiment([review_arr[i]])), phone_with_sentiment) # Saving the sentiment score in object

    return phone_with_sentiment

# Save the sentiment score for the relevant feature
def save_sentiment(feature, sentiment_score, phone_obj):
    if feature == "camera":
        phone_obj.set_camera(sentiment_score)
    if feature == "display":
        phone_obj.set_display(sentiment_score)
    if feature == "battery":
        phone_obj.set_battery(sentiment_score)
    if feature == "face recognition":
        phone_obj.set_face_recognition(sentiment_score)
    if feature == "fingerprint":
        phone_obj.set_finger_print(sentiment_score)
    if feature == "speakers":
        phone_obj.set_speakers(sentiment_score)
    return phone_obj

# Save the sentiment score by percentage
def get_sentiment_percentage(phone_obj):
    if phone_obj.get_camera_count() != 0:
        phone_obj.set_camera_pol(((phone_obj.get_camera_pos() + phone_obj.get_camera_neg()) / phone_obj.get_camera_count()) * 100)
        phone_obj.set_camera_pos((phone_obj.get_camera_pos() / phone_obj.get_camera_count()) * 100)
        phone_obj.set_camera_neg((-(phone_obj.get_camera_neg()) / phone_obj.get_camera_count()) * 100)
    if phone_obj.get_display_count() != 0:
        phone_obj.set_display_pol(((phone_obj.get_display_pos() + phone_obj.get_display_neg()) / phone_obj.get_display_count()) * 100)
        phone_obj.set_display_pos((phone_obj.get_display_pos() / phone_obj.get_display_count()) * 100)
        phone_obj.set_display_neg((-(phone_obj.get_display_neg()) / phone_obj.get_display_count()) * 100)
    if phone_obj.get_battery_count() != 0:
        phone_obj.set_battery_pol(((phone_obj.get_battery_pos() + phone_obj.get_battery_neg()) / phone_obj.get_battery_count()) * 100)
        phone_obj.set_battery_pos((phone_obj.get_battery_pos() / phone_obj.get_battery_count()) * 100)
        phone_obj.set_battery_neg(-((phone_obj.get_battery_neg()) / phone_obj.get_battery_count()) * 100)
    if phone_obj.get_face_recognition_count() != 0:
        phone_obj.set_face_recognition_pol(
            ((phone_obj.get_face_recognition_pos() + phone_obj.get_face_recognition_neg()) / phone_obj.get_face_recognition_count()) * 100)
        phone_obj.set_face_recognition_pos(
            (phone_obj.get_face_recognition_pos() / phone_obj.get_face_recognition_count()) * 100)
        phone_obj.set_face_recognition_neg(
            -((phone_obj.get_face_recognition_neg()) / phone_obj.get_face_recognition_count()) * 100)
    if phone_obj.get_finger_print_count() != 0:
        phone_obj.set_finger_print_pol(
            ((phone_obj.get_finger_print_pos() + phone_obj.get_finger_print_neg()) / phone_obj.get_finger_print_count()) * 100)
        phone_obj.set_finger_print_pos(
            (phone_obj.get_finger_print_pos() / phone_obj.get_finger_print_count()) * 100)
        phone_obj.set_finger_print_neg(
            -((phone_obj.get_finger_print_neg()) / phone_obj.get_finger_print_count()) * 100)
    if phone_obj.get_speaker_count() != 0:
        phone_obj.set_speakers_pol(
            ((phone_obj.get_speakers_pos() + phone_obj.get_speakers_neg()) / phone_obj.get_speaker_count()) * 100)
        phone_obj.set_speakers_pos((phone_obj.get_speakers_pos() / phone_obj.get_speaker_count()) * 100)
        phone_obj.set_speakers_neg(-((phone_obj.get_speakers_neg()) / phone_obj.get_speaker_count()) * 100)
    return phone_obj
