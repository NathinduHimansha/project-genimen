import numpy as np
import pandas as pd
import re
from uras.data_preprocessing.clean_data import clean_text
from sklearn.naive_bayes import MultinomialNB, BernoulliNB
from sklearn.linear_model import SGDClassifier, LogisticRegression
from sklearn.ensemble import RandomForestClassifier, VotingClassifier
from sklearn.svm import SVC, LinearSVC, NuSVC
from sklearn.feature_extraction.text import TfidfVectorizer, CountVectorizer
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.metrics import accuracy_score, f1_score, confusion_matrix, precision_recall_fscore_support, ConfusionMatrixDisplay
from sklearn.pipeline import Pipeline, make_pipeline


def pre_preprocess(text):
    return clean_text(text)


stop_words = ['let', 'have', 'has', 'had', 'a', 'the', 'it', 'its', 'and', 'is',
              'be', 'she', 'i', 'he', 'him', 'his', 'my', 'mine']

LinearSVC_pipe = make_pipeline(
    TfidfVectorizer(min_df=1, max_df=0.9, ngram_range=(
        1, 1), stop_words=stop_words, preprocessor=pre_preprocess),
    LinearSVC()
)
MultinomialNB_pipe = make_pipeline(
    CountVectorizer(max_df=0.9, ngram_range=(1, 1),
                    binary=True, stop_words=stop_words, preprocessor=pre_preprocess),
    MultinomialNB()
)
LogisticRegression_pipe = make_pipeline(
    CountVectorizer(max_df=0.9, ngram_range=(1, 1),
                    binary=True, stop_words=stop_words, preprocessor=pre_preprocess),
    LogisticRegression(max_iter=500)
)
SGDClassifier_pipe = make_pipeline(
    CountVectorizer(max_df=0.9, ngram_range=(1, 2),
                    binary=True, stop_words=stop_words, preprocessor=pre_preprocess),
    SGDClassifier()
)
RandomForestClassifier_pipe = make_pipeline(
    CountVectorizer(max_df=0.9, ngram_range=(1, 1),
                    binary=True, stop_words=stop_words, preprocessor=pre_preprocess),
    RandomForestClassifier()
)

VotingClassifierModel = VotingClassifier(
    [('sgdc', SGDClassifier_pipe), ('lgr', LogisticRegression_pipe),
     ('linearSVC', LinearSVC_pipe), ('mnb', MultinomialNB_pipe), ('rdmf', RandomForestClassifier_pipe)]
)
