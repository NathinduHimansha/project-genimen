import pandas as pd

import pickle
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, f1_score, confusion_matrix

from uras.data_preprocessing import clean_data

from imblearn.over_sampling import SMOTE


def logistic_regression_prediction(reviews_text, polarity_score):
    reviews_train, reviews_test, polarity_train, polarity_test = train_test_split(reviews_text, polarity_score,
                                                                                  test_size=0.2)
    vectorizer = CountVectorizer()
    reviews_train_vector = vectorizer.fit_transform(reviews_train)

    # data balancing
    # reviews_train_balanced, polarity_train_balanced = SMOTE().fit_resample(reviews_train_vector, polarity_train)

    # model implementation
    logistic_regression_model = LogisticRegression(max_iter=500)

    # training - model fitting
    logistic_regression_model.fit(reviews_train_vector, polarity_train)

    # testing
    reviews_test_vector = vectorizer.transform(reviews_test)
    polarity_prediction = logistic_regression_model.predict(reviews_test_vector)

    # save the model to disk
    #  filename = 'model/trained/logistic_regression_model.sav'
    #  pickle.dump(logistic_regression_model, open(filename, 'wb'))

    print("\nPREDICTED ACCURACY: {:.2f}%".format(accuracy_score(polarity_test, polarity_prediction) * 100))
    print("\nF1 SCORE: {:.2f}".format(f1_score(polarity_test, polarity_prediction, average="micro")))
    print("\nF1 SCORE: " + str(f1_score(polarity_test, polarity_prediction, average=None)))
    print("\nCONFUSION MATRIX: \n", confusion_matrix(polarity_test, polarity_prediction))

num_data = 100000
#  num_data = 10000
pos = pd.read_csv('data/splitted/pos.csv').dropna()[:num_data]
neg = pd.read_csv('data/splitted/neg.csv').dropna()[:num_data]
#  neu = pd.read_csv('data/splitted/neu.csv').dropna()[:num_data]

#  df = pos.append(neg).append(neu)
df = pos.append(neg)
df = df.sample(frac=1)

df['clean_review'] = df['review_sent'].apply(clean_data.clean_text)

logistic_regression_prediction(df.clean_review, df.sent_polarity)
