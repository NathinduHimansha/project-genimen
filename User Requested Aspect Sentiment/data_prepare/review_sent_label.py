import re
import pandas as pd
from uras.data_preprocessing.label_sentiment import add_sentiment_label
from uras.utils.text_util import sent_tokenize

def label_review_by_sent(*data_sets, review_col="reviews"):
    def df_split_sent(df, text_col, sent_colname="text_sent"):
        df_mod = df.dropna()
        text = '.'.join(list(df_mod[text_col]))
        #  text_sentences = tu.sent_tokenize(text)
        text_sentences = sent_tokenize(text)

        return  pd.DataFrame({sent_colname: text_sentences})
    #  df = df.dropna()
    #  df.info()
    df = pd.read_csv(data_sets[0], error_bad_lines=False)
    for data_set in data_sets[1:]:
        #  df.info()
        df = pd.read_csv(data_set, error_bad_lines=False).append(df)
    df = df_split_sent(df, text_col=review_col, sent_colname='review_sent')
    df = add_sentiment_label(df, 'review_sent')



    df['review_sent_len'] = df['review_sent'].apply(lambda x: len(x.split()))
    df = df[df['review_sent_len'] > 2]

    df['questions'] = df['review_sent'].apply(lambda x: '?' in x)
    df = df[df['questions'] == False]

    df =df.drop(columns='questions')
    df = df.drop(columns='review_sent_len')
    return df
    #  df.to_csv('data/labeled_data.csv', sep=",", index=False)
