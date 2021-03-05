import numpy as np
import os
from sentiment_analysis.preprocessing.clean_data import clean_text, remove_stop_words, lemmatize, stem
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, f1_score, confusion_matrix, precision_score
from sklearn.metrics import ConfusionMatrixDisplay
from sklearn.metrics import plot_confusion_matrix
from sentiment_analysis.model.classifiers import SGDClassifier_pipe, LinearSVC_pipe, LogisticRegression_pipe, RandomForestClassifier_pipe, MultinomialNB_pipe, VotingClassifierModel
import pandas as pd
import pickle
from pathlib import Path
import time


def get_performance_report(performance_summary):
    accuracy = '{0:20} {1}'.format(
        "accuracy:", performance_summary['accuracy'])
    precision_recall_macro = '{0:20} {1}'.format("precision_recall_macro:",
                                                 performance_summary['precision_recall_macro'])
    precision_recall_weighted = '{0:20} {1}'.format("precision_recall_weighted:",
                                                    performance_summary['precision_recall_weighted'])
    f1_score = '{0:20} {1}'.format("f1:", performance_summary['f1'])
    confusion_matrix = "confusion_matrix:\n" + str(performance_summary['cmtx'])
    training_time = '{0:20} {1}'.format("training_time:",
                                        performance_summary['training_time'])+"s"
    summary = \
        f"""
{accuracy}
{precision_recall_macro}
{precision_recall_weighted}
{f1_score}
{confusion_matrix}

{training_time}
    """
    return summary


def print_clf_summary(clf_summary, file_name='classifier_summary', to_file=True):
    final_output = ""
    for clf, summary in clf_summary.items():
        #  print()
        header = \
            f"""
-----------------------------------------
 {clf}
-----------------------------------------
        """
        report = get_performance_report(summary)
        final_output += header + report

    # save summary to txt file
    if(to_file):
        txt_file = f"{file_name}.txt"
        with open(txt_file, 'w') as f:
            print(final_output, txt_file, file=f)

    pickle.dump(clf_summary, open(f"{file_name}.pickle", 'wb'))
    print(final_output)


def train(classifiers, reviews, labels):
    review_train, review_test, lbl_train, lbl_test = train_test_split(
        reviews, labels, test_size=0.3, random_state=42)

    classifier_summary = {}

    for clf_name, clf in classifiers.items():
        model_name = clf[0]
        model = clf[1]

        print("")
        print(f"training {clf_name}")

        training_time = None
        start_time = time.time()
        classifier = model.fit(review_train, lbl_train)
        training_time = round(time.time() - start_time, 2)
        print(f"training time: {training_time} seconds")
        print()
        print("model pickled successfully!")

        predicted = classifier.predict(review_test)

        confusion_matrix_score = confusion_matrix(
            lbl_test, predicted, labels=classifier.classes_)
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

        classifier_summary[clf_name] = (performance_summary)

    print_clf_summary(classifier_summary)


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


classifiers = {
    "SGDClassifier": ('sgd_model', SGDClassifier_pipe),
    "LinearSVC": ('linear_svc_model', LinearSVC_pipe),
    "LogisticRegression": ('logistic_regression_model', LogisticRegression_pipe),
    "MultinomialNB": ('multinomial_nb_model', MultinomialNB_pipe),
    "RandomForestClassifier": ('random_forest_model', RandomForestClassifier_pipe),
    "VotingClassifier": ('voting_model', VotingClassifierModel)
}

#  train(classifiers, reviews, labels)
