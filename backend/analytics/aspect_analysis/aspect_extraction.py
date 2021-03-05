import nltk
import pandas as pd
from analytics.aspect_analysis.aspect_lexicons import FEATURE_TYPES, FEATURE_CATEGORY, category_synonyms

# return list of identified features


def get_feature_parent(feature):
    for i in range(len(category_synonyms)):
        if feature in category_synonyms[i]:
            return FEATURE_CATEGORY[i]
    return ""


def get_features(review):
    features = []
    for synonym in category_synonyms:
        for feature in synonym:
            if feature in review:
                features.append(get_feature_parent(feature))
    return features


print(get_features("wireless-charge"))

#  model_name = "apple-iphone-7"
#  df = pd.read_csv('../model-reviews/' + model_name + '.csv')

#  for row in df.review:
#  feature_arr = nltk.tokenize.sent_tokenize(str(row))
#  print(get_features(feature_arr))
#  # review_list.append(feature_arr)
