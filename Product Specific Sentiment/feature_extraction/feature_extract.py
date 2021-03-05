import nltk
import pandas as pd

# return list of identified features
def get_features(review_arr):
    features_arr = [] # array to store the features
    for i in range(len(review_arr)):
        single_review_arr = review_arr[i].split() # split sentence in to words by review
        synonyms = [["camera"],
                    ["display", "screen"],
                    ["battery"],
                    ["face recognition", "face id", "recognition"],
                    ["fingerprint recognition", "fingerprint", "reader"],
                    ["speakers", "speaker", "sound"]]
        synonyms_parent = ["camera", "display", "battery", "face recognition", "fingerprint", "speakers"]
        #print(single_review_arr)

        for predefined_feature in range(len(synonyms)):
            for feature in single_review_arr:
                if feature in synonyms[predefined_feature]:
                    features_arr.append(synonyms_parent[predefined_feature])
                    print(review_arr[i])
                    # use review_arr to get the sentiment score of the sentence
    return features_arr


model_name = "apple-iphone-7"
df = pd.read_csv('../model-reviews/' + model_name + '.csv')

for row in df.review:
    feature_arr = nltk.tokenize.sent_tokenize(str(row))
    print(get_features(feature_arr))
    # review_list.append(feature_arr)
