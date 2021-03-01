import numpy as np
import pandas as pd
import re
from uras.data_preprocessing import clean_data
from nltk.classify.scikitlearn import SklearnClassifier
from sklearn.naive_bayes import MultinomialNB, BernoulliNB
from sklearn.linear_model import SGDClassifier
from sklearn.svm import SVC, LinearSVC, NuSVC
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.metrics import accuracy_score, f1_score, confusion_matrix, precision_recall_fscore_support
from sklearn.metrics import ConfusionMatrixDisplay

def train_classifier(reviews, labels):
    #  vc = TfidfVectorizer(max_features=1000,min_df=0, max_df=0.5, ngram_range=(1,1))
    vc = TfidfVectorizer(min_df=1, max_df=0.9, ngram_range=(1,1))
    #  vc = CountVectorizer(max_df=0.9, ngram_range=(1,1), binary=True)
    #  vc = CountVectorizer(ngram_range=(1,1), binary=False)

    X_train = vc.fit_transform(reviews)

    clf = LinearSVC()
    clf.fit(X_train, labels)

    return [clf, vc]
