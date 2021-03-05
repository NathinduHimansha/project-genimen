import sys
import time
import pandas as pd
import numpy as np
from sentiment_analysis.model.classifiers import SGDClassifierModel
from sentiment_analysis.model.get_classifiers_summary import get_performance_report
from sentiment_analysis.preprocessing.clean_data import clean_text, remove_stop_words, lemmatize, stem
from sentiment_analysis.model.classifiers import SGDClassifierModel
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.metrics import accuracy_score, f1_score, confusion_matrix, precision_score


#  labeler = "textblob"
labeler = "vader"
data_path = f"data/splitted/{labeler}"
num_rows = 42000


pos = pd.read_csv(
    f'{data_path}/pos.csv').dropna().drop_duplicates()[:num_rows]
neg = pd.read_csv(
    f'{data_path}/neg.csv').dropna().drop_duplicates()[:num_rows]
neu = pd.read_csv(
    f'{data_path}/neu.csv').dropna().drop_duplicates()[:num_rows]

df = pos.append(neg).append(neu)
#  df = pos.append(neg)
df = df.sample(frac=1)
#  df = df.drop_duplicates()

# train, test split
reviews = df['review_sent'].values
labels = df['sent_polarity'].values

review_train, review_test, lbl_train, lbl_test = train_test_split(
    reviews, labels, test_size=0.3, random_state=42)

start_time = time.time()
model, vc = SGDClassifierModel().fit(review_train, lbl_train)
training_time = round(time.time() - start_time, 2)
X_test = vc.transform(review_test)
predicted = model.predict(X_test)

confusion_matrix_score = confusion_matrix(
    lbl_test, predicted, labels=model.classes_)
performance_summary = dict(
    accuracy=accuracy_score(lbl_test, predicted),
    precision_recall_macro=precision_score(
        lbl_test, predicted, average='macro'),
    precision_recall_weighted=precision_score(
        lbl_test, predicted, average='weighted'),
    f1=f1_score(lbl_test, predicted, average=None),
    cmtx=pd.DataFrame(confusion_matrix_score, index=['true:neu', 'true:pos', 'true:neg'],
                      columns=['pred:neu', 'pred:pos', 'pred:neg']),
    training_time=training_time
)

print(get_performance_report(performance_summary))
