import pandas as pd

import numpy as np
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.model_selection import ShuffleSplit
from sklearn.naive_bayes import MultinomialNB
from sklearn.metrics import accuracy_score, f1_score, confusion_matrix
from sklearn.linear_model import LogisticRegression, SGDClassifier

from imblearn.over_sampling import SMOTE


def naive_bayes_prediction(review_text, polarity_score):
    accuracy_scores = []
    f1_scores = []
    conf_matrix = []

    reviews = review_text
    polarity = polarity_score

    shuffle_shift = ShuffleSplit(n_splits=10, test_size=0.2)

    for train_index, test_index in shuffle_shift.split(reviews):
        reviews_train, reviews_test = reviews.iloc[train_index], reviews.iloc[test_index]
        polarity_train, polarity_test = polarity.iloc[train_index], polarity.iloc[test_index]

        vectorizer = CountVectorizer(max_features=5000, binary=True)
        reviews_train_vector = vectorizer.fit_transform(reviews_train)
        reviews_test_vector = vectorizer.transform(reviews_test)

        # data balancing
        reviews_train_balanced, polarity_train_balanced = SMOTE().fit_resample(reviews_train_vector, polarity_train)

        unique, counts = np.unique(polarity_train_balanced, return_counts=True)
        print(list(zip(unique, counts)))

        # model implementation
        naive_bayes_model = MultinomialNB()

        # training - model fitting
        naive_bayes_model.fit(reviews_train_balanced, polarity_train_balanced)

        # testing
        polarity_prediction = naive_bayes_model.predict(reviews_test_vector)

        accuracy_scores.append(accuracy_score(polarity_test, polarity_prediction))
        f1_scores.append(f1_score(polarity_test, polarity_prediction, average="micro"))
        conf_matrix.append(confusion_matrix(polarity_test, polarity_prediction))

    print("\nPREDICTED ACCURACY: {:.2f}%".format(sum(accuracy_scores) / len(accuracy_scores) * 100))
    print("\nF1 SCORE: {:.2f}".format(sum(f1_scores) / len(f1_scores) * 100))
    print("\nCONFUSION MATRIX: \n", format(sum(conf_matrix) / len(conf_matrix)))


data_file = pd.read_csv('labeled_data_modd.csv', encoding='utf-8')
print(data_file.sent_polarity.value_counts())
# data_file = data_file[data_file.sent_polarity != 0]

naive_bayes_prediction(data_file.review_sent, data_file.sent_polarity)
