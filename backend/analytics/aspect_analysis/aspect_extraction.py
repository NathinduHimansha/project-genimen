import nltk
import pandas as pd
from analytics.aspect_analysis.aspect_lexicons import FEATURE_TYPES, FEATURE_CATEGORY, category_synonyms

# return list of identified features


def get_aspect_parent(feature):
    for i in range(len(category_synonyms)):
        if feature in category_synonyms[i]:
            return FEATURE_CATEGORY[i]
    return ""


def get_aspects(review):
    features = []
    for synonym in category_synonyms:
        for feature in synonym:
            if feature in review:
                features.append(get_aspect_parent(feature))
    return features


def get_aspect(review):
    for synonym in category_synonyms:
        for feature in synonym:
            if feature in review:
                return get_aspect_parent(feature)
    return ""
