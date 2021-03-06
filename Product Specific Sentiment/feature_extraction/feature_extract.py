import nltk
import pandas as pd
from backend.flaskr.api.uras.controller import get_sentiment
from product_sentiment.feature_extraction.smartphone_model import Model


# return smartphone object with sentiment score for identified features
def get_features(review_arr):
    phone_with_sentiment = Model()  # This object will store the all sentiment score for features
    for i in range(len(review_arr)):
        single_review_arr = review_arr[i].split()  # split sentence in to words by review
        synonyms = [["camera"],
                    ["display", "screen"],
                    ["battery"],
                    ["face recognition", "face", "id"],
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
        phone_obj.set_camera_pos("{:.2f}".format((phone_obj.get_camera_pos() / phone_obj.get_camera_count()) * 100))
        phone_obj.set_camera_neg("{:.2f}".format((-(phone_obj.get_camera_neg()) / phone_obj.get_camera_count()) * 100))
    if phone_obj.get_display_count() != 0:
        phone_obj.set_display_pos("{:.2f}".format((phone_obj.get_display_pos() / phone_obj.get_display_count()) * 100))
        phone_obj.set_display_neg("{:.2f}".format((-(phone_obj.get_display_neg()) / phone_obj.get_display_count()) * 100))
    if phone_obj.get_battery_count() != 0:
        phone_obj.set_battery_pos("{:.2f}".format((phone_obj.get_battery_pos() / phone_obj.get_battery_count()) * 100))
        phone_obj.set_battery_neg("{:.2f}".format(-((phone_obj.get_battery_neg()) / phone_obj.get_battery_count()) * 100))
    if phone_obj.get_face_recognition_count() != 0:
        phone_obj.set_face_recognition_pos(
            "{:.2f}".format((phone_obj.get_face_recognition_pos() / phone_obj.get_face_recognition_count()) * 100))
        phone_obj.set_face_recognition_neg(
            "{:.2f}".format(-((phone_obj.get_face_recognition_neg()) / phone_obj.get_face_recognition_count()) * 100))
    if phone_obj.get_finger_print_count() != 0:
        phone_obj.set_finger_print_pos(
            "{:.2f}".format((phone_obj.get_finger_print_pos() / phone_obj.get_finger_print_count()) * 100))
        phone_obj.set_finger_print_neg(
            "{:.2f}".format(-((phone_obj.get_finger_print_neg()) / phone_obj.get_finger_print_count()) * 100))
    if phone_obj.get_speaker_count() != 0:
        phone_obj.set_speakers_pos("{:.2f}".format((phone_obj.get_speakers_pos() / phone_obj.get_speaker_count()) * 100))
        phone_obj.set_speakers_neg("{:.2f}".format(-((phone_obj.get_speakers_neg()) / phone_obj.get_speaker_count()) * 100))
    return phone_obj


# Testing csv
model_name = "apple-iphone-11"
df = pd.read_csv('../model-reviews/' + model_name + '.csv')
new = Model
all_reviews_arr = []
for row in df.review:
    review_arr = nltk.tokenize.sent_tokenize(str(row))
    for review in range(len(review_arr)):
        all_reviews_arr.append(review_arr[review])

new = get_features(all_reviews_arr)
print("Model name ", model_name)
print("Display sentiment pos : ", new.get_display_pos())
print("Display sentiment neg : ", new.get_display_neg())
print("================Percentage wise================================")
new = get_sentiment_percentage(new)
print("Display sentiment pos : ", new.get_display_pos())
print("Display sentiment neg : ", new.get_display_neg())
