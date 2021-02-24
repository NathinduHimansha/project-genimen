import re
import pandas as pd
from textblob import TextBlob

def get_subjectivity(text):
    score = TextBlob(text.lower()).sentiment.subjectivity
    if score < 0:
        return -1
    if score > 0:
        return 1
    return score
def get_polarity(text):
    score = TextBlob(text.lower()).sentiment.polarity
    if score < 0:
        return -1
    if score > 0:
        return 1
    return score


def add_sentiment_label(df, col):
    df_mod = df.dropna()
    df_mod['sent_subjectivity'] = df_mod[col].apply(get_subjectivity)
    df_mod['sent_polarity'] = df_mod[col].apply(get_polarity)
    return df_mod
