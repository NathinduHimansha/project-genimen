import re
import pandas as pd
from textblob import TextBlob
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
from utils.text_util import sent_tokenize


def _df_split_sent(df, text_col, sent_colname="text_sent"):
    df_mod = df.dropna()
    text = '.'.join(list(df_mod[text_col]))
    #  text_sentences = tu.sent_tokenize(text)
    text_sentences = sent_tokenize(text)

    return pd.DataFrame({sent_colname: text_sentences})


def vader_sentiment(sentence):
    sid_obj = SentimentIntensityAnalyzer()
    sentiment_dict = sid_obj.polarity_scores(sentence)
    if sentiment_dict['compound'] >= 0.05:
        return 1
    elif sentiment_dict['compound'] <= - 0.05:
        return -1
    else:
        return 0


def textblob_sentiment(text):
    score = TextBlob(text.lower()).sentiment.polarity
    if score < 0:
        return -1
    if score > 0:
        return 1
    return score


def get_polarity(text, labeler="vader"):
    if(labeler == "vader"):
        return vader_sentiment(text)
    return textblob_sentiment(text)


def add_label(df, col):
    df_mod = df.dropna()
    df_mod['sent_polarity'] = df_mod[col].apply(get_polarity)
    return df_mod


def add_label_by_sentence(*data_sets, review_col="reviews"):
    #  df = df.dropna()
    #  df.info()
    df = pd.read_csv(data_sets[0], error_bad_lines=False)
    for data_set in data_sets[1:]:
        #  df.info()
        df = pd.read_csv(data_set, error_bad_lines=False).append(df)
    df = _df_split_sent(df, text_col=review_col, sent_colname='review_sent')
    df = add_label(df, 'review_sent')

    df['review_sent_len'] = df['review_sent'].apply(lambda x: len(x.split()))
    df = df[df['review_sent_len'] > 2]

    df['questions'] = df['review_sent'].apply(lambda x: '?' in x)
    df = df[df['questions'] == False]

    df = df.drop(columns='questions')
    df = df.drop(columns='review_sent_len')
    return df
    #  df.to_csv('data/labeled_data.csv', sep=",", index=False)
