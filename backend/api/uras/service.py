import pandas as pd
from flask import current_app
from analytics.sentiment_analysis.model.review_analysis import get_sentiment
from analytics.aspect_analysis.aspect_lexicons import phones
from analytics.aspect_analysis.aspect_extraction import get_aspect, get_aspect_parent
from analytics.sentiment_analysis.utils.text_util import sent_tokenize
from pathlib import Path


def get_data_by_phone(phone_model):
    return pd.read_csv(f'analytics/data/phone_reviews/{phone_model}.csv', error_bad_lines=False, nrows=100)
    #  return pd.read_csv(f'analytics/data/phone_reviews/{phone_model}.csv', error_bad_lines=False)


def get_sent_sentiment(sent):
    sentiment = get_sentiment([sent])[0]
    return sentiment


def get_col_val_perc(df, col, val):
    if(len(df) == 0):
        return 0.0
    return len(df[df[col] == val])/len(df) * 100


def get_feature(review_sent):
    return get_aspect(review_sent)


def review_list_split_sent(reviews, col_name="review"):
    all_reviews = '.'.join(list(reviews))
    review_sent_list = sent_tokenize(all_reviews)
    return review_sent_list


def list_to_df(lst, colname):
    return pd.DataFrame({colname: lst})


def df_remove_short_reviews(review_df, min_words=2, review_col="review"):
    review_df['review_sent_len'] = review_df['review'].apply(
        lambda x: len(x.split()))
    return review_df[review_df['review_sent_len'] > min_words]


def get_reviews_sentiment_summary(feature_type_dic):
    feature_sentiment_polarity = []
    phone_feature_polarity = []
    for feature, feature_type in feature_type_dic.items():
        feature, feature_type = feature.lower(), feature_type.lower()
        phone_list = phones[feature_type]
        i, total_pos, total_neg, total_polarity, total_review_count = 0, 0, 0, 0, 0
        for phone in phone_list:
            reviews = get_data_by_phone(phone)
            review_sent_list = review_list_split_sent(list(reviews['review']))
            review_df = list_to_df(review_sent_list, "review")
            review_df = df_remove_short_reviews(review_df)
            review_df['feature'] = review_df['review'].apply(get_feature)
            review_df['is_correct_feature'] = review_df['feature'].apply(
                lambda x: feature in x)
            review_df = review_df[review_df['is_correct_feature'] == True]
            review_df["sentiment"] = review_df['review'].apply(
                get_sent_sentiment)

            phone_feature_sentiments = {}
            pos = get_col_val_perc(review_df, "sentiment", 1)
            neg = get_col_val_perc(review_df, "sentiment", -1)
            polarity = pos - neg
            review_count = len(review_df)
            total_review_count += review_count
            if(review_count > 0):
                total_pos += pos
                total_neg += neg
                total_polarity += polarity
                i += 1
            if (review_count < 5):
                pos, neg, polarity = 'None', 'None', 'None'

            phone_feature_sentiments['pos'] = pos
            phone_feature_sentiments['neg'] = neg
            phone_feature_sentiments['polarity'] = polarity
            phone_feature_sentiments['feature-type'] = feature_type
            phone_feature_sentiments['feature'] = feature
            phone_feature_sentiments['phone'] = phone
            phone_feature_sentiments['review-count'] = review_count
            phone_feature_polarity.append(phone_feature_sentiments)
        total_pos_perc = None
        total_neg_perc = None
        total_polarity_perc = None
        if(i > 0):
            total_pos_perc = total_pos / i
            total_neg_perc = total_neg / i
            total_polarity_perc = total_polarity / i
        feature_type_summary = {
            'pos': total_pos_perc,
            'neg': total_neg_perc,
            'polarity': total_polarity_perc,
            'feature-type': feature_type,
            'feature': feature,
            'total-review-count': total_review_count
        }
        feature_sentiment_polarity.append(feature_type_summary)
    return {
        'feature-sentiment-polarity': feature_sentiment_polarity,
        'phone-feature-polarity': phone_feature_polarity,
    }
