import numpy as np
import os
from uras.data_preprocessing.clean_data import clean_text, remove_stop_words, lemmatize, stem
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, f1_score, confusion_matrix, precision_recall_fscore_support
from sklearn.metrics import ConfusionMatrixDisplay
from sklearn.metrics import plot_confusion_matrix
import pandas as pd
import pickle
from pathlib import Path
import time

_pickle_path = "uras/model/_trained_models"


def get_performance_report(performance_summary):
    accuracy = '{0:20} {1}'.format(
        "accuracy:", performance_summary['accuracy'])
    precision_recall = '{0:20} {1}'.format("precision_recall:",
                                           performance_summary['precision_recall'])
    f1_score = '{0:20} {1}'.format("f1:", performance_summary['f1'])
    confusion_matrix = "confusion_matrix:\n" + str(performance_summary['cmtx'])
    training_time = '{0:20} {1}'.format("training_time:",
                                        performance_summary['training_time'])+"s"
    summary = \
        f"""
{accuracy}
{precision_recall}
{f1_score}
{confusion_matrix}

{training_time}
    """
    return summary


def print_clf_summary(clf_summary, file_path=_pickle_path):
    file_name = f'{_pickle_path}/classifier_summary.txt'
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
    with open(file_name, 'w') as f:
        print(final_output, file_name, file=f)

    pickle.dump(clf_summary, open(file_name, 'wb'))
    print(final_output)


def train(classifiers, reviews, labels, retrain_all=False, pickle_path=_pickle_path):
    if(not Path(pickle_path).exists()):
        os.mkdir(pickle_path)
    review_train, review_test, lbl_train, lbl_test = train_test_split(
        reviews, labels, test_size=0.3, random_state=42)

    classifier_summary_file_path = f"{pickle_path}/classifier_summary.pickle"
    classifier_summary = {}

    for clf_name, clf in classifiers.items():
        model_name = clf[0]
        model = clf[1]

        print("")
        print(f"training {clf_name}")

        model_path = Path(f"{pickle_path}/{model_name}.pickle")

        training_time = None
        if(model_path.is_file() and not retrain_all):
            classifier = pickle.load(open(str(model_path), 'rb'))
        else:
            start_time = time.time()
            classifier = model.fit(review_train, lbl_train)
            training_time = round(time.time() - start_time, 2)
            print(f"training time: {training_time} seconds")
            print()
            pickle.dump(classifier, open(str(model_path)+".pickle", 'wb'))
            print("model pickled successfully!")

        predicted = classifier.predict(review_test)

        confusion_matrix_score = confusion_matrix(
            lbl_test, predicted, labels=classifier.classes_)
        performance_summary = dict(
            accuracy=accuracy_score(lbl_test, predicted),
            precision_recall=precision_recall_fscore_support(
                lbl_test, predicted, average=None),
            f1=f1_score(lbl_test, predicted, average=None),
            cmtx=pd.DataFrame(confusion_matrix_score, index=['true:neu', 'true:pos', 'true:neg'],
                              columns=['pred:neu', 'pred:pos', 'pred:neg']),
            training_time=training_time
        )

        classifier_summary[clf_name] = (performance_summary)

    print_clf_summary(classifier_summary)
