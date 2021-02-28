import pandas as pd;
import nltk
import re

#  def print_sent_list(sent_list):
    #  for sent in sent_list:
        #  print(sent)
def df_split_by_sentiment(*data_sets, sent_col='sent_polarity'):
    df = pd.read_csv(data_sets[0], error_bad_lines=False)
    for data_set in data_sets[1:]:
        #  df.info()
        df = pd.read_csv(data_set, error_bad_lines=False).append(df)



    df_pos = df[df[sent_col] == 1.0]
    df_neg = df[df[sent_col] == -1.0]
    df_neu = df[df[sent_col] == 0.0]

    return [df_pos, df_neg, df_neu]

    #  df_pos = df_pos.sample(frac=1)
    #  df_neg = df_neg.sample(frac=1)
    #  df_neu = df_neu.sample(frac=1)
    #  df.info()
    #  df = df.sample(frac=1).reset_index(drop=True)
    #  df_pos.to_csv('data/pos.csv', sep=",", index=False)
    #  df_neg.to_csv('data/neg.csv', sep=",", index=False)
    #  df_neu.to_csv('data/neu.csv', sep=",", index=False)

    #  df = pd.read_csv('./data/data_set3/labeled_data_mod.csv', error_bad_lines=False)
    #  df[df['sent_polarity'] == 0.0].info()
