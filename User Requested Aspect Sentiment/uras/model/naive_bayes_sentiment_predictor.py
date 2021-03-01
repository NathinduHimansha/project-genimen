import pandas as pd

import pickle
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.model_selection import train_test_split
from sklearn.naive_bayes import MultinomialNB
from sklearn.metrics import accuracy_score, f1_score, confusion_matrix

from uras.data_preprocessing import clean_data

from imblearn.over_sampling import SMOTE


def naive_bayes_prediction(reviews_text, polarity_score):
    reviews_train, reviews_test, polarity_train, polarity_test = train_test_split(reviews_text, polarity_score,
                                                                                  test_size=0.2)
    vectorizer = CountVectorizer(max_df=0.9, ngram_range=(1,1), binary=True)
    #  vectorizer = CountVectorizer(binary=True)
    reviews_train_vector = vectorizer.fit_transform(reviews_train)

    # data balancing
    # reviews_train_balanced, polarity_train_balanced = SMOTE().fit_resample(reviews_train_vector, polarity_train)

    # model implementation
    naive_bayes_model = MultinomialNB()

    # training - model fitting
    naive_bayes_model.fit(reviews_train_vector, polarity_train)

    # testing
    reviews_test_vector = vectorizer.transform(reviews_test)
    polarity_prediction = naive_bayes_model.predict(reviews_test_vector)

    # save the model to disk
    #  filename = 'model/trained/naive_bayes_model.sav'
    #  pickle.dump(naive_bayes_model, open(filename, 'wb'))

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

naive_bayes_prediction(df.clean_review, df.sent_polarity)
