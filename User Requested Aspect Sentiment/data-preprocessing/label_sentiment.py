import re
import pandas as pd
from textblob import TextBlob

def get_subjectivity(text):
    score = TextBlob(text).sentiment.subjectivity
    if score < 0:
        return -1
    if score > 0:
        return 1
    return score
def get_polarity(text):
    score = TextBlob(text).sentiment.polarity
    if score < 0:
        return -1
    if score > 0:
        return 1
    return score
def sent_tokenize(text):
    return re.split("\.+?\s|but", text)

def split_sent(df, text_col, sent_colname="text_sent"):
    df_mod = df.dropna()
    text = '.'.join(list(df_mod[text_col]))
    text_sentences = sent_tokenize(text)

    return  pd.DataFrame({sent_colname: text_sentences})

def add_sentiment_label(df, col):
    df_mod = df.dropna()
    df_mod['sent_subjectivity'] = df_mod[col].apply(get_subjectivity)
    df_mod['sent_polarity'] = df_mod[col].apply(get_polarity)
    return df_mod
