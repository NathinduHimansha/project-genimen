import json
import re
import string
import demoji
import nltk
import pandas as pd
import csv
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
from gensim.summarization import keywords
import collections
import itertools
import collections
from nltk.probability import FreqDist
import matplotlib.pyplot as plt

arrayOfKeywords=[]
nouns=[]

# nltk.download('words') #(Needs Running on first attempt)
# demoji.download_codes()# During the very first launch (Needs Running on First attempt)
# #demoji.last_downloaded_timestamp() Last time the emoji data was updated (Not Required to Run )
# nltk.download('stopwords') #(Needs Running on first attempt)

# Noise Reduction method to Remove element that doesn't contribute to context
english_words=set(nltk.corpus.words.words())


def noiseReduction(text):
    global tokenize_text
    text=text.replace('\n',' ')  # Abrupt line endings
    text=re.sub(r'^https?:\/\/.*[\r\n]*',' ',text,flags=re.MULTILINE)  # Remove Urls
    cleaner=re.compile('<.*?>')  # regular expersion compiler to remove HTML components
    if ((re.search('<.*?>',text)!=None) or (re.search('<.*?>',text)!='')):
        text=re.sub(cleaner,'',text).strip()
        text=demoji.replace(text,"")  # Removing Emoji's
        text=''.join([char for char in text if char not in string.punctuation])
        text=''.join(c for c in text if not c.isdigit())  # remove numbers from the text
        text=text.split(' ',1)[1]  # remove the first word of the text as it contains a letter "n"
        tokenize_text=text
    if text!='':
        return text


# tokenize function
def tokennizer(text):
    global tokens
    text=text.lower()
    tokens=re.split('\W+',text)
    tokens=' '.join(tokens)
    #print(tokens)
    return tokens


def removeNonEnglishWords(tokenized_text):
    '''Remove non english words'''

    global textRemoveNonEnglish
    removingNonEnglishText=tokenized_text
    textRemoveNonEnglish=" ".join(w for w in nltk.wordpunct_tokenize(removingNonEnglishText) if w.lower() in english_words or not w.isalpha())

def removeStopWords(tokenized_text):
    '''Remove stop words'''
    # custom stopwords list
    global stopwordRemoval
    stop_words=set(stopwords.words('english'))
    word_tokens=word_tokenize(tokenized_text)
    filtered_sentence=[w for w in word_tokens if not w in stop_words]
    filtered_sentence=[]
    for w in word_tokens:
        if w not in stop_words:
            filtered_sentence.append(w)
            stopwordRemoval=" ".join(filtered_sentence)  # print(filtered_sentence)


def text_preprocessor(tokenized_text):
    text=[word for word in tokenized_text if word in english_words and word.isalpha()]
    text=[word for word in text if word not in stopwords]
    print(text)
    return text


def gensimKeywordExtraction(keyWordsText):
    global keyWords
    global arrayOfKeywords
    keyWords=keywords(keyWordsText,words=30,lemmatize=True)
    #print(keyWords)
    arrayOfKeywords.append(keyWords)
    return keyWords

def posTagging(text):
    global nouns
    '''pos tagging feature extraction'''
    '''https://stackoverflow.com/questions/40167612/how-to-keep-only-the-noun-words-in-a-wordlist-python-nltk'''

    tokens = nltk.word_tokenize(text)
    tags = nltk.pos_tag(tokens)
    nouns = [word for word, pos in tags if (pos == 'NN' or pos == 'NNP' or pos == 'NNS' or pos == 'NNPS')]
    print(*nouns,sep="\n")


# read from the csv file
with open('amazonJsonTOCSV.csv','r',encoding="utf-8") as csv_file:  # open the .csv file after converting
    csv_reader=csv.reader(csv_file)  # read it from the csv reader which is in python
    line_count=0  # break line by line in the datset including the headings

    with open('onlyReviews.csv',"a",
            encoding='utf-8') as csv_file_2:  # open the .csv file and append the data when loaded
        fieldNames=["review"]  # headings of the .csv file
        writer=csv.DictWriter(csv_file_2,fieldnames=fieldNames)  # write to the file as a Dictionary(Dictionary Writer)
        writer.writeheader()  # write the heading to the .csv file

        for row in csv_reader:  # loop through the .csv file

            if line_count==0:  # if the line is in the 0 index position which the headings of the dataset skip to the next line
                line_count+=1  # break the line when the line count is zero which is the headings

            else:
                comment=row[5]  # take only the column 5 which contain only the summary pf the review of the product
                line_count+=1

                noiseReduction(comment)

                removeNonEnglishWords(tokenize_text)

                removeStopWords(textRemoveNonEnglish)

                tokennizer(stopwordRemoval)

                gensimKeywordExtraction(tokens)#gensim keyword extract

                posTagging(keyWords) #extracting nouns out of the keywords to reduce the noise further

                # write the data to the .csv file only the adjectives in a review
                writer.writerow({"review": stopwordRemoval})

                # text_preprocessor(comment)
