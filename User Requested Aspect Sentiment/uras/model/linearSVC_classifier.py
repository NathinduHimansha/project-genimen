import spacy
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
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, f1_score, confusion_matrix


def print_features_tfidfvectorizer(vc, X, top_n=15):
    vocab = list(vc.get_feature_names())
    print("Tfidf Vocabulary: ")
    print("")
    print(vocab)
    feature_array = np.array(vocab)
    tfidf_sorting = np.argsort(X.toarray()).flatten()[::-1]

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
#  train, test = train_test_split(df, test_size=0.2)

df['clean_review'] = df['review_sent'].apply(clean_data.clean_text)
#  training_set.info()

vc = TfidfVectorizer(max_features=1000,min_df=0, max_df=0.5, ngram_range=(1,2))
#  vc = CountVectorizer(max_features=1000, min_df=2, max_df=0.9, ngram_range=(2,2))

X = vc.fit_transform(df['clean_review'].values)
#  X = vc.fit_transform(list(df['clean_review']))
split_index = int(len(df) * 0.7)
X_train = X[:split_index]
X_test = X[split_index:]

y_train = df['sent_polarity'].values[:split_index]
y_test = df['sent_polarity'].values[split_index:]

LinearSVC_classifier = LinearSVC()
LinearSVC_classifier.fit(X_train, y_train)
predicted = LinearSVC_classifier.predict(X_test)
accuracy = accuracy_score(y_test, predicted)
f1= f1_score(y_test, predicted, average='micro')
labels = [0.0, 1.0, -1.0]
confusion_matrix = confusion_matrix(y_test, predicted, labels)
cmtx = pd.DataFrame(confusion_matrix, index=['true:neu', 'true:pos', 'true:neg'],
                    columns=['pred:neu', 'pred:pos', 'pred:neg'])

#  print('accuracy:\t' + str(LinearSVC_classifier.score(X_test, y_test)))
print('accuracy:\t' + str(accuracy))
print('f1:\t' + str(f1))
print('confusion matrix:\t' + "\n" + str(cmtx))


#  MultinomialNB_classifier = MultinomialNB()
#  MultinomialNB_classifier.fit(X_train, y_train)
#  predicted = MultinomialNB_classifier.predict(X_test)
#  accuracy = accuracy_score(predicted, y_test)
#  print('accuracy ' + str(MultinomialNB_classifier.score(X_test, y_test)))


#  LinearSVC_classifier.classfiy()