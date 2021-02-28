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
    vectorizer = CountVectorizer(max_features=1000, binary=True)
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
    filename = 'naive_bayes_model.sav'
    pickle.dump(naive_bayes_model, open(filename, 'wb'))

    print("\nPREDICTED ACCURACY: {:.2f}%".format(accuracy_score(polarity_test, polarity_prediction) * 100))
    print("\nF1 SCORE: {:.2f}".format(f1_score(polarity_test, polarity_prediction, average="micro")))
    print("\nCONFUSION MATRIX: \n", confusion_matrix(polarity_test, polarity_prediction))


pos = pd.read_csv('/Users/nathinduhimansha/User-Data/IIT/2nd_Year/2nd_Semester/SDGP/project-genimen/User Requested Aspect Sentiment/uras/data/pos.csv').dropna()[:10000]
neg = pd.read_csv('/Users/nathinduhimansha/User-Data/IIT/2nd_Year/2nd_Semester/SDGP/project-genimen/User Requested Aspect Sentiment/uras/data/neg.csv').dropna()[:10000]
neu = pd.read_csv('/Users/nathinduhimansha/User-Data/IIT/2nd_Year/2nd_Semester/SDGP/project-genimen/User Requested Aspect Sentiment/uras/data/neu.csv').dropna()[:10000]

df = pos.append(neg).append(neu)
df = df.sample(frac=1)

df['clean_review'] = df['review_sent'].apply(clean_data.clean_text)

naive_bayes_prediction(df.clean_review, df.sent_polarity)
