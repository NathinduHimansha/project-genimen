import nltk
import pandas
import string
import re
import csv


def clean_review(review):
    lowered_text = review.lower()
    html_filtered = re.sub('<[^>]*>', ' ', lowered_text)
    redundant_space_filtered = re.sub('\s{2,}', ' ', html_filtered)
    non_alphabet_filtered = re.sub('(?!\s)[\W|\d]', '', redundant_space_filtered)
    emoji_filtered = re.sub("(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e["
                            "\ud000-\udfff])", "", non_alphabet_filtered)
    non_ascii_filtered = emoji_filtered.encode("ascii", errors='ignore').decode()
    punctuation_filtered = ' '.join(word.strip(string.punctuation) for word in non_ascii_filtered.split())
    return punctuation_filtered


def optimize_text(text):
    optimized_text = []
    english_words = set(nltk.corpus.words.words())

    for word in text.split():
        if word in english_words and len(word) >= 3:  # english words filter and character size filter
            optimized_text.append(word)

    review = ' '.join(optimized_text)
    return review


data_file = open('labeled_data.csv', mode="r")
csv_reader = csv.DictReader(data_file)

cleaned_dict = {"reviews": [], "polarity": []}
for row in csv_reader:
    cleaned_review = clean_review(row["review"])
    optimized_review = optimize_text(cleaned_review)

    cleaned_dict["reviews"].append(optimized_review)
    cleaned_dict["polarity"].append(row["review_polarity"])

df = pandas.DataFrame(cleaned_dict)
df.to_csv("cleaned_labeled_reviews.csv")  # writes to CSV
