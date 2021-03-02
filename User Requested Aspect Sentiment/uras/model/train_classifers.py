import numpy as np
import matplotlib.pyplot as plt

from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
from uras.model.classifier_pipes import sgdClassifier_pipe, linearSVC_pipe, logisticRegression_pipe, randomForestClassifier_pipe, multinomialNB_pipe
from uras.data_preprocessing.clean_data import clean_text, remove_stop_words, lemmatize, stem
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, f1_score, confusion_matrix, precision_recall_fscore_support
from sklearn.metrics import ConfusionMatrixDisplay
from sklearn.metrics import plot_confusion_matrix
from sklearn.pipeline import Pipeline
from sklearn.ensemble import VotingClassifier
import pandas as pd


def sentiment_scores(sentence):

    # Create a SentimentIntensityAnalyzer object.
    sid_obj = SentimentIntensityAnalyzer()

    # polarity_scores method of SentimentIntensityAnalyzer
    # oject gives a sentiment dictionary.
    # which contains pos, neg, neu, and compound scores.
    sentiment_dict = sid_obj.polarity_scores(sentence)

    #  print("Overall sentiment dictionary is : ", sentiment_dict)
    #  print("sentence was rated as ", sentiment_dict['neg']*100, "% Negative")
    #  print("sentence was rated as ", sentiment_dict['neu']*100, "% Neutral")
    #  print("sentence was rated as ", sentiment_dict['pos']*100, "% Positive")

    #  print("Sentence Overall Rated As", end = " ")

    # decide sentiment as positive, negative and neutral
    if sentiment_dict['compound'] >= 0.05:
        #  print("Positive")
        return 1

    elif sentiment_dict['compound'] <= - 0.05:
        #  print("Negative")
        return -1

    else:
        #  print("Neutral")
        return 0


labeler = "textblob"
#  labeler = "vader"
data_path = f"data/splitted/{labeler}"
num_rows = 40000
#  num_rows = 10000
pos = pd.read_csv(
    f'{data_path}/pos.csv').dropna().drop_duplicates()[:num_rows]
neg = pd.read_csv(
    f'{data_path}/neg.csv').dropna().drop_duplicates()[:num_rows]
neu = pd.read_csv(
    f'{data_path}/neu.csv').dropna().drop_duplicates()[:num_rows]

df = pos.append(neg).append(neu)
#  df = pos.append(neg)
df = df.sample(frac=1)
df = df.drop_duplicates()

df['clean_review'] = df['review_sent'].apply(clean_text)
df['clean_review'] = df['clean_review'].apply(remove_stop_words)
#  df['clean_review'] = df['clean_review'].apply(lambda x: clean_data.exclude_pos(x, ["PRP", "IN"]))
#  df['clean_review'] = df['clean_review'].apply(clean_data.lemmatize)

# train, test split
reviews = df['clean_review'].values
labels = df['sent_polarity'].values
review_train, review_test, lbl_train, lbl_test = train_test_split(
    reviews, labels, test_size=0.3, random_state=42)

SGDClassifierModel = linearSVC_pipe.fit(review_train, lbl_train)

predicted = SGDClassifierModel.predict(review_test)

accuracy = accuracy_score(lbl_test, predicted)
f1 = f1_score(lbl_test, predicted, average=None)
confusion_matrix_score = confusion_matrix(
    lbl_test, predicted, labels=SGDClassifierModel.classes_)
cmtx = pd.DataFrame(confusion_matrix_score, index=['true:neu', 'true:pos', 'true:neg'],
                    columns=['pred:neu', 'pred:pos', 'pred:neg'])
#  cmtx = pd.DataFrame(confusion_matrix_score, index=['true:pos', 'true:neg'],
#  columns=['pred:pos', 'pred:neg'])

print("ACCURACY:\t", accuracy)
print("CONFUSION_MATRIX:\t", cmtx)
print("F1 SCORES:\t", f1)

new_data = ["I don't like that camera",
            "it is not a good camera", "I like the phone"]
clean_new_data = []
for data in new_data:
    print(lemmatize(remove_stop_words(clean_text(data))))
    print(stem(remove_stop_words(clean_text(data))))
    print(sentiment_scores(data))
    clean_new_data.append(remove_stop_words(clean_text(data)))

print(SGDClassifierModel.predict(clean_new_data))
