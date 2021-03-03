import spacy
import string
import nltk
from nltk import word_tokenize
from nltk.stem import SnowballStemmer
import re


def stem(text):
    stemmer = SnowballStemmer('english')
    stemmed = []
    tokens = text.split()
    for token in tokens:
        word = stemmer.stem(token)
        stemmed.append(word)
    text = ' '.join(stemmed)
    return text


def lemmatize(text):
    nlp = spacy.load("en_core_web_md")
    doc = nlp(text)
    lemma = []
    for token in doc:
        word = str(token.lemma_)
        lemma.append(word)
    text = ' '.join(lemma)
    return text


def exclude_pos(text, tag_list):
    text = word_tokenize(text)
    pos_tags = nltk.pos_tag(text)
    filtered_words = []
    for token in pos_tags:
        if token[1] not in tag_list:
            word = str(token[0])
            filtered_words.append(word)
    text = ' '.join(filtered_words)
    return text


def include_pos(text, tag_list):
    text = word_tokenize(text)
    pos_tags = nltk.pos_tag(text)
    filtered_words = []
    for token in pos_tags:
        if token[1] in tag_list:
            word = str(token[0])
            filtered_words.append(word)
    text = ' '.join(filtered_words)
    return text


def de_emojify(text):
    return re.sub("(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])", "", text)


def remove_stop_words(text):
    text = text.lower()
    stop_words = ['let', 'have', 'has', 'had',
                  'a', 'the', 'it', 'its', 'and', 'is', 'be']
    tokens = text.split()
    filtered_words = []
    for token in tokens:
        if token not in stop_words:
            filtered_words.append(token)
    text = ' '.join(filtered_words)
    return text


def clean_text(text):
    text = str(text)
    text = text.lower()
    text = re.sub('\s\w{1,1}\s', ' ', text)
    html_filter = re.sub('<[^>]*>', ' ', text)
    reduntant_space_filter = re.sub('\s{2,}', ' ', html_filter)
    non_alphabet_filter = re.sub('(?!\s)[\W|\d]', '', html_filter)
    emoji_filter = de_emojify(non_alphabet_filter)
    non_ascii_filter = emoji_filter.encode("ascii", errors='ignore').decode()
    punctuation_filter = ' '.join(word.strip(string.punctuation)
                                  for word in non_ascii_filter.split())
    return punctuation_filter
