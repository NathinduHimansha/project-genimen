import numpy as np
from uras.data_preprocessing.clean_data import clean_text, remove_stop_words, lemmatize, stem
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, f1_score, confusion_matrix, precision_recall_fscore_support
from sklearn.metrics import ConfusionMatrixDisplay
from sklearn.metrics import plot_confusion_matrix
import pandas as pd
import pickle
from pathlib import Path
import time


def print_performance_summary(preformance_summary):
    print('{0:20} {1}'.format("accuracy:", performance_summary['accuracy']))
    print('{0:20} {1}'.format("precision_recall:",
                              performance_summary['precision_recall']))
    print('{0:20} {1}'.format("f1:", performance_summary['f1']))
    print("confusion_matrix:\n", performance_summary['cmtx'])
    print()
    print('{0:20} {1}'.format("training_time:",
                              performance_summary['training_time'])+"s")


def print_clf_summary(clf_summary):
    for clf, summary in clf_summary.items():
        print()
        print("-----------------------------------------")
        print(" " + clf)
        print("-----------------------------------------")
        print_performance_summary(summary)


def save_clf_summary(clf_summary, file_name):
    pickle.dump(clf_summary, open(file_name, 'wb'))


def train(classifiers, reviews, labels, retrain_all=False, pikcle_path="uras/model/trained_models"):
    review_train, review_test, lbl_train, lbl_test = train_test_split(
        reviews, labels, test_size=0.3, random_state=42)

    classifier_summary_file_path = f"{pikcle_path}/classifier_summary.pickle"
    classifier_summary = {}

    for clf_name, clf in classifiers.items():
        model_name = clf[0]
        model = clf[1]

        print(f"Training {clf_name}")
        print("")

        model_path = Path(f"{pikcle_path}/{model_name}")

        training_time = None
        if(model_path.is_file() and not retrain_all):
            classifier = pickle.load(open(str(model_path), 'rb'))
        else:
            start_time = time.time()
            classifier = model.fit(review_train, lbl_train)
            training_time = round(time.time() - start_time, 2)
            print(f"training time: {training_time} seconds")
            print()
            print("pickling model")
            pickle.dump(classifier, open(str(model_path)+".pickle", 'wb'))

        predicted = classifier.predict(review_test)

        confusion_matrix_score = confusion_matrix(
            lbl_test, predicted, labels=classifier.classes_),
        performance_summary = dict(
            accuracy=accuracy_score(lbl_test, predicted),
            precision_recall=precision_recall_fscore_support(
                lbl_test, predicted, average='binary'),
            f1=f1_score(lbl_test, predicted, average=None),
            cmtx=pd.DataFrame(confusion_matrix_score, index=['true:neu', 'true:pos', 'true:neg'],
                              columns=['pred:neu', 'pred:pos', 'pred:neg']),
            training_time=training_time
        )

        classifier_summary[clf_name] = (performance_summary)

    print_clf_summary(classifier_summary)
    save_clf_summary(classifier_summary, classifier_summary_file_path)


#  labeler = "textblob"
labeler = "vader"
data_path = f"data/splitted/{labeler}"
num_rows = 40000


pos = pd.read_csv(
    f'{data_path}/pos.csv').dropna().drop_duplicates()[:num_rows]
neg = pd.read_csv(
    f'{data_path}/neg.csv').dropna().drop_duplicates()[:num_rows]
neu = pd.read_csv(
    f'{data_path}/neu.csv').dropna().drop_duplicates()[:num_rows]

df = pos.append(neg).append(neu)
#  df = pos.append(neg)
df = df.sample(frac=1)
df = df.drop_duplicates()

df['clean_review'] = df['review_sent'].apply(clean_text)
df['clean_review'] = df['clean_review'].apply(remove_stop_words)
#  df['clean_review'] = df['clean_review'].apply(lambda x: clean_data.exclude_pos(x, ["PRP", "IN"]))
#  df['clean_review'] = df['clean_review'].apply(clean_data.lemmatize)

# train, test split
reviews = df['clean_review'].values
labels = df['sent_polarity'].values
