import numpy as np
import pandas as pd
import re
from uras.data_preprocessing import clean_data
from nltk.classify.scikitlearn import SklearnClassifier
from sklearn.naive_bayes import MultinomialNB, BernoulliNB
from sklearn.linear_model import SGDClassifier, LogisticRegression
from sklearn.ensemble import RandomForestClassifier
from sklearn.svm import SVC, LinearSVC, NuSVC
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.metrics import accuracy_score, f1_score, confusion_matrix, precision_recall_fscore_support
from sklearn.metrics import ConfusionMatrixDisplay
from abc import ABC, abstractmethod

class LinearSVCModel:
    def __init__(self, reviews, labels):
        self.reviews = reviews
        self.labels = labels
        self.classifier = LinearSVC()
        self.vectorizer = TfidfVectorizer(min_df=1, max_df=0.9, ngram_range=(1,1))
    def train(self):
        X_train = self.vectorizer.fit_transform(self.reviews)
        self.classifier.fit(X_train, self.labels)
        return [self.classifier, self.vectorizer]

class MultinomialNBModel:
    def __init__(self, reviews, labels):
        self.reviews = reviews
        self.labels = labels
        self.classifier = MultinomialNB()
        self.vectorizer = CountVectorizer(max_df=0.9, ngram_range=(1,1), binary=True)
    def train(self):
        X_train = self.vectorizer.fit_transform(self.reviews)
        self.classifier.fit(X_train, self.labels)
        return [self.classifier, self.vectorizer]

class LogisticRegressionModel:
    def __init__(self, reviews, labels):
        self.reviews = reviews
        self.labels = labels
        self.classifier = LogisticRegression(max_iter=500)
        self.vectorizer = CountVectorizer(max_df=0.9, ngram_range=(1,1), binary=True)
    def train(self):
        X_train = self.vectorizer.fit_transform(self.reviews)
        self.classifier.fit(X_train, self.labels)
        return [self.classifier, self.vectorizer]

class SGDModel:
    def __init__(self, reviews, labels):
        self.reviews = reviews
        self.labels = labels
        self.classifier = SGDClassifier()
        self.vectorizer = CountVectorizer(max_df=0.9, ngram_range=(1,2), binary=True)
    def train(self):
        X_train = self.vectorizer.fit_transform(self.reviews)
        self.classifier.fit(X_train, self.labels)
        return [self.classifier, self.vectorizer]

class RandomForestModel:
    def __init__(self, reviews, labels):
        self.reviews = reviews
        self.labels = labels
        self.classifier = RandomForestClassifier()
        self.vectorizer = TfidfVectorizer(max_features=1000,min_df=0, max_df=0.5, ngram_range=(1,1))
    def train(self):
        X_train = self.vectorizer.fit_transform(self.reviews)
        self.classifier.fit(X_train, self.labels)
        return [self.classifier, self.vectorizer]
