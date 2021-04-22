import re
import nltk
from nltk import word_tokenize


# remove the special characters from the model name (from model_patterns)
def get_model_name_from_regex_pattern(pattern):
    rename = re.sub("(?=\W)(?=\S)(?=[^\\\])(?=[^\.]).+", "", pattern)
    if rename[-1] == " ":
        return rename[:-1]
    return rename


# remove emoji
def remove_emoji(text):
    text = str(text);  # setting input as a string
    text = text.lower();  # setting input to lowercase
    regex_pattern = re.compile(pattern="["
                                       u"\U0001F600-\U0001F64F"  # emoticons
                                       u"\U0001F300-\U0001F5FF"
                                       u"\U0001F680-\U0001F6FF"
                                       u"\U0001F1E0-\U0001F1FF"
                                       "]+", flags=re.UNICODE)
    return regex_pattern.sub(' ', str(text))


# remove stop words
def remove_stopwords(text):
    stopwordsVariable = ['i', "br", "n", 'me', 'my', 'myself', 'we', 'our', 'ours',
                         'ourselves', 'you', "you're", "you've", "you'll", "you'd",
                         'your', 'yours', 'yourself', 'yourselves', 'he', 'him', 'his',
                         'himself', 'she', "she's", 'her', 'hers', 'herself', 'it',
                         "it's", 'its', 'itself', 'they', 'them', 'their', 'theirs',
                         'themselves', 'what', 'which', 'who', 'whom', 'this', 'that',
                         "that'll", 'these', 'those', 'am', 'is', 'are', 'was', 'were',
                         'be', 'been', 'being', 'have', 'has', 'had', 'having', 'do',
                         'does', 'did', 'doing', 'a', 'an', 'the', 'and', 'if',
                         'or', 'as', 'until', 'while', 'of', 'at', 'by', 'over', 'under',
                         'again', 'further', 'then', 'once', 'here', 'there', 'when',
                         'where', 'why', 'how', 'all', 'any', 'both', 'each', 'few',
                         'more', 'most', 'other', 'some', 'such', 'no', 'nor', 'not',
                         'only', 'own', 'same', 'so', 'than', 's', 't',
                         'can', 'will', 'just', 'should', "should've",
                         'now', 'd', 'll', 'm', 'o', 're', 've', 'y', 'ain', 'aren', "%", "S", "span",
                         "br", "class=cr", "en", "al", "un", "el", "usar", "malo", "lo"]

    stop_words = stopwordsVariable
    word_tokens = word_tokenize(text)
    filtered_sentence = [w for w in word_tokens if not w in stop_words]
    cleared_text = " ".join(filtered_sentence)
    return cleared_text


# Clean data
def clean_text(review_array):
    words = set(nltk.corpus.words.words())
    for review in range(len(review_array)):
        review_array[review] = remove_emoji(review_array[review])  # removing the emoji
        review_array[review] = re.compile('<.*?>|&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-f]{1,6});').sub(' ', str(
            review_array[review]))  # removing the html tags
        # add further clean process here
        # remove punc
        review_array[review] = re.sub(r"[=<>()''/,+;@#?!&$:*_-]", " ",
                                      str(review_array[review]))  # remove the punctuation
        # remove non english words
        review_array[review] = " ".join(
            w for w in nltk.wordpunct_tokenize(review_array[review]) if w.lower() in words or not w.isalpha())
        # remove stop words
        review_array[review] = remove_stopwords(review_array[review])

    return review_array
