import sys
import pandas as pd
import numpy as np
#  from model.train_classifiers import train
from model.train_classifiers import train
from data_preprocessing.clean_data import clean_text, remove_stop_words, lemmatize, stem
from model.classifiers import SGDClassifier_pipe, LinearSVC_pipe, LogisticRegression_pipe, RandomForestClassifier_pipe, MultinomialNB_pipe, VotingClassifierModel


#  labeler = "textblob"
labeler = "vader"
data_path = f"data/splitted/{labeler}"
num_rows = 42000


pos = pd.read_csv(
    f'{data_path}/pos.csv').dropna().drop_duplicates()[:num_rows]
neg = pd.read_csv(
    f'{data_path}/neg.csv').dropna().drop_duplicates()[:num_rows]
neu = pd.read_csv(
    f'{data_path}/neu.csv').dropna().drop_duplicates()[:num_rows]

df = pos.append(neg).append(neu)
#  df = pos.append(neg)
df = df.sample(frac=1)
#  df = df.drop_duplicates()

# train, test split
reviews = df['review_sent'].values
labels = df['sent_polarity'].values


classifiers = {
    "SGDClassifier": ('sgd_model', SGDClassifier_pipe),
    "LinearSVC": ('linear_svc_model', LinearSVC_pipe),
    "LogisticRegression": ('logistic_regression_model', LogisticRegression_pipe),
    "MultinomialNB": ('multinomial_nb_model', MultinomialNB_pipe),
    "RandomForestClassifier": ('random_forest_model', RandomForestClassifier_pipe),
    "VotingClassifier": ('voting_model', VotingClassifierModel)
}
if "--retrain" in sys.argv:
    retrain = True
    message = "training all:"
else:
    retrain = False
    message = "training only the untrained:"

print(message)
train(classifiers, reviews, labels, retrain_all=retrain)
