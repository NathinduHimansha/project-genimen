import spacy
import numpy as np
import pandas as pd
import re
from nltk.classify.scikitlearn import SklearnClassifier
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.feature_extraction.text import CountVectorizer
from uras.data_preprocessing import clean_data
from sklearn.linear_model import LogisticRegression, SGDClassifier
from sklearn.svm import SVC, LinearSVC, NuSVC


def print_features_tfidfvectorizer(vc, top_n=15):
    vocab = list(vc.get_feature_names())
    print("Tfidf Vocabulary: ")
    print("")
    print(vocab)
    feature_array = np.array(vocab)
    tfidf_sorting = np.argsort(x.toarray()).flatten()[::-1]

    print("---------------------------------")
    print("")
    print("Top " + top_n)
    n = top_n
    top_n = feature_array[tfidf_sorting][:n]
    print(top_n)

pos = pd.read_csv('data/splitted/pos.csv').dropna()[:10000]
neg = pd.read_csv('data/splitted/neg.csv').dropna()[:10000]
neu = pd.read_csv('data/splitted/neu.csv').dropna()[:10000]


df = pos.append(neg).append(neu)
df = df.sample(frac=1)

# train, test split
training_set = df[:8000]
testing_set = df[8000:]

training_set['clean_review'] = training_set['review_sent'].apply(clean_data.clean_text)
#  training_set.info()

vc = TfidfVectorizer(max_features=1000,min_df=0, max_df=0.5, ngram_range=(1,2))
#  vc = CountVectorizer(max_features=1000, min_df=2, max_df=0.9, ngram_range=(2,2))
x = vc.fit_transform(list(training_set['clean_review']))

#  print(x)
#  print(type(x))
LogisticRegression_classifier = SklearnClassifier(LogisticRegression())
LogisticRegression_classifier.train(training_set)




#  lda.fit_transform(x)
