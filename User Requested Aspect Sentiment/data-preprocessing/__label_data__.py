import pandas as pd
from label_sentiment import split_sent, add_sentiment_label

df = pd.read_csv('../data/20191226-reviews.csv', error_bad_lines=False, usecols=['body'])
#  df = df.dropna()
#  df.info()
df = split_sent(df, text_col='body', sent_colname='review_sent')
df = add_sentiment_label(df, 'review_sent')



df['review_sent_len'] = df['review_sent'].apply(lambda x: len(x.split()))
df = df[df['review_sent_len'] > 2]
df = df.drop(columns='review_sent_len')

df.to_csv('../data/labeled_data_copy.csv', sep=",", index=False)
