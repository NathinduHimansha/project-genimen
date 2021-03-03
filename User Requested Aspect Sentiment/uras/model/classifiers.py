import numpy as np
import pandas as pd
import re
from uras.data_preprocessing import clean_data
from sklearn.naive_bayes import MultinomialNB, BernoulliNB
from sklearn.linear_model import SGDClassifier, LogisticRegression
from sklearn.ensemble import RandomForestClassifier, VotingClassifier
from sklearn.svm import SVC, LinearSVC, NuSVC
from sklearn.feature_extraction.text import TfidfVectorizer, CountVectorizer
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.metrics import accuracy_score, f1_score, confusion_matrix, precision_recall_fscore_support, ConfusionMatrixDisplay
from sklearn.pipeline import Pipeline, make_pipeline


LinearSVC_pipe = make_pipeline(
    TfidfVectorizer(min_df=1, max_df=0.9, ngram_range=(1, 1)),
    LinearSVC()
)
MultinomialNB_pipe = make_pipeline(
    CountVectorizer(max_df=0.9, ngram_range=(1, 1), binary=True),
    MultinomialNB()
)
LogisticRegression_pipe = make_pipeline(
    CountVectorizer(max_df=0.9, ngram_range=(1, 1), binary=True),
    LogisticRegression(max_iter=500)
)
SGDClassifier_pipe = make_pipeline(
    CountVectorizer(max_df=0.9, ngram_range=(1, 2), binary=True),
    SGDClassifier()
)
RandomForestClassifier_pipe = make_pipeline(
    CountVectorizer(max_df=0.9, ngram_range=(1, 1), binary=True),
    RandomForestClassifier()
)
VotingClassifierModel = VotingClassifier(
    [('sgdc', SGDClassifier_pipe), ('lgr', LogisticRegression_pipe),
     ('linearSVC', LinearSVC_pipe), ('mnb', MultinomialNB_pipe), ('rdmf', RandomForestClassifier_pipe)]
)
