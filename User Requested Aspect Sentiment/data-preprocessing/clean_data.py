import pandas
import string
import nltk
import re


# function for data cleaning

def data_clean(text):
    list_punctuation = set(string.punctuation)  # list of punctuations
    list_numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]  # list of numbers
    words = set(nltk.corpus.words.words())  # list of english words(NLTK library)

    text = text.lower()  # input lowercase

    html_filtered = re.compile(r'<[^>]+>').sub('', text)  # html tag filtering

    tokernized_words = nltk.word_tokenize(html_filtered)  # tokernized string input to single words

    filtered_text = []  # list for filtered text
    for word in tokernized_words:  #loop for iterate tokernized list
        split_word = []
        split_word[:] = word  # splits the characters in word

        reassembled_word = ""
        for character in split_word:
            if character not in list_punctuation:  # punctuation filter
                if character not in list_numbers:  # integers filter
                    text = character.encode("ascii", errors="ignore").decode()  # ascii filter
                    reassembled_word = reassembled_word + text  # reassembling the characters as a word

        filtered_text.append(reassembled_word)  # append the filtered reassembled word into list

    optimized_text = []  # optimized text
    for word in filtered_text:
        if word in words and len(word) >= 3:  # english words filter and character size filter
            optimized_text.append(word)

    return optimized_text

def de_emojify(text):
    return re.sub("(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])", "", text)

def clean_text(text):
    text = text.lower()
    html_filter = re.sub('<[^>]*>', ' ', text)
    reduntant_space_filter = re.sub('\s{2,}', ' ', html_filter)
    non_alphabet_filter = re.sub('(?!\s)[\W|\d]', '', html_filter)
    emoji_filter = de_emojify(non_alphabet_filter)
    non_ascii_filter = emoji_filter.encode("ascii", errors='ignore').decode()
    punctuation_filter = ' '.join(word.strip(string.punctuation) for word in non_ascii_filter.split())
    return punctuation_filter
