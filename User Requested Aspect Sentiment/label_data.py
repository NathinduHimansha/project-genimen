import re
import pandas as pd
from env import *
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

df = pd.read_csv(unlabeled_data, error_bad_lines=False, usecols=['body'])
df = df.dropna()
#  df.info()


review_text = '.'.join(list(df['body']))
review_sentences = sent_tokenize(review_text)

df = pd.DataFrame({'review_sent': review_sentences})
df['review_sent_len'] = df['review_sent'].apply(lambda x: len(x.split()))
df = df[df['review_sent_len'] > 2]
df['review_sent_subjectivity'] = df['review_sent'].apply(get_subjectivity)
df['review_sent_polarity'] = df['review_sent'].apply(get_polarity)
df = df.drop(columns='review_sent_len')

df.to_csv(labeled_data_path, sep=",", index=False)
