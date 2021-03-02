import numpy as np
import matplotlib.pyplot as plt

from uras.model.classifier_pipes import sgdClassifier_pipe, linearSVC_pipe, logisticRegression_pipe, randomForestClassifier_pipe, multinomialNB_pipe
from uras.data_preprocessing import clean_data
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, f1_score, confusion_matrix, precision_recall_fscore_support
from sklearn.metrics import ConfusionMatrixDisplay
from sklearn.metrics import plot_confusion_matrix
from sklearn.pipeline import Pipeline
from sklearn.ensemble import VotingClassifier
import pandas as pd


num_rows = 100000
#  num_rows = 10000
pos = pd.read_csv('data/splitted/pos.csv').dropna()[:num_rows]
neg = pd.read_csv('data/splitted/neg.csv').dropna()[:num_rows]
#  neu = pd.read_csv('data/splitted/neu.csv').dropna()[:num_rows]

#  df = pos.append(neg).append(neu)
df = pos.append(neg)
df = df.sample(frac=1)
df = df.drop_duplicates()

df['clean_review'] = df['review_sent'].apply(clean_data.clean_text)
df['clean_review'] = df['clean_review'].apply(clean_data.remove_stop_words)
#  df['clean_review'] = df['clean_review'].apply(lambda x: clean_data.exclude_pos(x, ["PRP", "IN"]))
#  df['clean_review'] = df['clean_review'].apply(clean_data.lemmatize)

# train, test split
reviews = df['clean_review'].values
labels = df['sent_polarity'].values
review_train, review_test, lbl_train, lbl_test = train_test_split(
    reviews, labels, test_size=0.3, random_state=42)


VotingClassifierModel = VotingClassifier(
    [('sgdc', sgdClassifier_pipe), ('lgr', logisticRegression_pipe),
     ('linearSVC', linearSVC_pipe)]
)
clf = VotingClassifierModel.fit(review_train, lbl_train)
predicted = clf.predict(review_test)
accuracy = accuracy_score(lbl_test, predicted)
f1 = f1_score(lbl_test, predicted, average=None)
confusion_matrix_score = confusion_matrix(
    lbl_test, predicted, labels=clf.classes_)
cmtx = pd.DataFrame(confusion_matrix_score, index=['true:pos', 'true:neg'],
                    columns=['pred:pos', 'pred:neg'])

print("ACCURACY:\t", accuracy)
print("CONFUSION_MATRIX:\t", cmtx)
print("F1 SCORES:\t", f1)

new_data = ["I don't like that camera", "it is not a good camera"]
print(clf.predict(new_data))


# # Testing
#  SGDClassifierModel = linearSVC_pipe.fit(review_train, lbl_train)

#  predicted = SGDClassifierModel.predict(review_test)

#  accuracy = accuracy_score(lbl_test, predicted)
#  f1 = f1_score(lbl_test, predicted, average=None)
#  confusion_matrix_score = confusion_matrix(
#  lbl_test, predicted, labels=SGDClassifierModel.classes_)
#  cmtx = pd.DataFrame(confusion_matrix_score, index=['true:neu', 'true:pos', 'true:neg'],
#  columns=['pred:neu', 'pred:pos', 'pred:neg'])
#  cmtx = pd.DataFrame(confusion_matrix_score, index=['true:pos', 'true:neg'],
#  columns=['pred:pos', 'pred:neg'])

#  print("ACCURACY:\t", accuracy)
#  print("CONFUSION_MATRIX:\t", cmtx)
#  print("F1 SCORES:\t", f1)

#  new_data = ["I don't like that camera", "it is not a good camera"]
#  print(SGDClassifierModel.predict(new_data))
