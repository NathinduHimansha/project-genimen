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
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.metrics import accuracy_score, f1_score, confusion_matrix, precision_recall_fscore_support


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

num_data = 100000
#  num_data = 10000
pos = pd.read_csv('data/splitted/pos.csv').dropna()[:num_data]
neg = pd.read_csv('data/splitted/neg.csv').dropna()[:num_data]
#  neu = pd.read_csv('data/splitted/neu.csv').dropna()[:num_data]

#  df = pos.append(neg).append(neu)
df = pos.append(neg)
df = df.sample(frac=1)

df['clean_review'] = df['review_sent'].apply(clean_data.clean_text)
df['clean_review'] = df['clean_review'].apply(clean_data.remove_stop_words)
#  df['clean_review'] = df['clean_review'].apply(lambda x: clean_data.exclude_pos(x, ["PRP", "IN"]))
#  df['clean_review'] = df['clean_review'].apply(clean_data.lemmatize)

# train, test split
reviews = df['clean_review'].values
labels = df['sent_polarity'].values
train, test, y_train, y_test = train_test_split(reviews, labels, test_size=0.3, random_state=42)
#  print(np.unique(y_train, return_counts=True))
#  print(np.unique(y_test, return_counts=True))


#  vc = TfidfVectorizer(max_features=1000,min_df=0, max_df=0.5, ngram_range=(1,1))
vc = TfidfVectorizer(min_df=1, max_df=0.9, ngram_range=(1,1))
#  vc = CountVectorizer(max_df=0.9, ngram_range=(1,1), binary=True)
#  vc = CountVectorizer(ngram_range=(1,1), binary=False)

X_train = vc.fit_transform(train)
X_test = vc.transform(test)

LinearSVC_classifier = LinearSVC()
LinearSVC_classifier.fit(X_train, y_train)
predicted = LinearSVC_classifier.predict(X_test)
accuracy = accuracy_score(y_test, predicted)
f1= f1_score(y_test, predicted, average=None)
#  precision_recall = precision_recall_fscore_support(y_test, predicted, average='macro')
labels = [0.0, 1.0, -1.0]
confusion_matrix = confusion_matrix(y_test, predicted, labels)
cmtx = pd.DataFrame(confusion_matrix, index=['true:neu', 'true:pos', 'true:neg'],
                    columns=['pred:neu', 'pred:pos', 'pred:neg'])

#  print('accuracy:\t' + str(LinearSVC_classifier.score(X_test, y_test)))
print('accuracy:\t' + str(accuracy))
print('f1:\t' + str(f1))
#  print('precision_recall:\t' + str(f1))
print('confusion matrix:\t' + "\n" + str(cmtx))

# Cross Validation
#  cvs = cross_val_score(LinearSVC_classifier, TfidfVectorizer(min_df=0, max_df=0.5, ngram_range=(1,1)).
                      #  fit_transform(df['clean_review'][:num_data]), df['sent_polarity'][:num_data], scoring='accuracy', cv = 40)
#  print('cross validation score:\t' + str(cvs))
#  print("Accuracy of Model with Cross Validation is:",accuracy.mean() * 100)

new_data = ['the fingerprint is good', 'I like the phone', 'I like the fingerprint', 'Its such an awesome phone and camera', 'good camera', 'wow its one of the best phones', 'prolly worst than expected, fingerprint is not good']
#  label = [1.0, 1.0, 1.0, 1.0, 1.0, -1.0]
X_new = vc.transform(new_data)
prediction = LinearSVC_classifier.predict(X_new)
print(str(prediction))
