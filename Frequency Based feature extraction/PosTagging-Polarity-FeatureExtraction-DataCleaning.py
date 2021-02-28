# Due to certain issues with numpy and issues with latest windows update stick to 1.19.3
'''(https://stackoverflow.com/questions/64778222/how-to-fix-runtimeerror-the-current-numpy-installation-fails-to-pass-a-sanity)'''
import csv
import re
import pandas as pd
import gensim
import inline as inline
from gensim import corpora
from textblob import TextBlob
import nltk
from nltk.tokenize import word_tokenize
from collections import defaultdict
from sklearn.feature_extraction.text import CountVectorizer
import itertools
import collections
from nltk.probability import FreqDist
import matplotlib.pyplot as plt
import matplotlib.pyplot as plt
from sklearn.datasets import fetch_20newsgroups
from gensim import corpora
import spacy
import emoji


reviewsArray = []  # array which contains the reviews
reviewAfterPosTagging = []  # array after post tagging the reviews
onlyNouns = []  # array which contains only the nouns which came after the pos tagging
newPolarity = 0  # variable which is assigned for the polarity value
text=None
filtered_sentence=[]
returnString=''

def topicModelling():
    dictionary = gensim.corpora.Dictionary([comments.noun_phrases])
    bow_corpus = [dictionary.doc2bow(doc) for doc in [comments.noun_phrases]]

    lda_model = gensim.models.LdaModel(bow_corpus,
                                       num_topics=5,
                                       id2word=dictionary,
                                       passes=60)

    for idx, topic in lda_model.print_topics(-1):
        print("Topic: {} \nWords: {}".format(idx, topic))
        print("\n")
    print("-------------------------------------------------------------------------------")
    print("\n")


# TEXTBLOB
# find the polarity of the adjectives which remained in a sentence
def polarityAndWriteToFile(text):
    reviews = TextBlob(text)

    # change the polarity values which comes as decimal values to 1, -1 or 0
    if (reviews.polarity>0):
        newPolarity = 1
    elif (reviews.polarity<0):
        newPolarity = -1
    else:
        newPolarity = 0

    # write the data to the .csv file only the adjectives in a review
    writer.writerow({"review": text, "polarity": newPolarity})


def frequencyPlot(comments):
    # print(pd.DataFrame.from_dict(word_freq, orient='index') \
    #     .sort_values(0, ascending=False) \
    #     .rename(columns={0: 'abs_freq'}))

    '''get the frequency of the words'''
    # fdist = FreqDist(comments.noun_phrases)
    # #print(fdist)
    #
    # fdist.most_common(2)
    # fdist.plot(30, cumulative=False)
    # plt.show()
    # twenty_train = fetch_20newsgroups(subset='train',shuffle=True)
    # print(twenty_train.target_names) # prints all the categories


def posTagging(text):
    '''pos tagging feature extraction'''
    '''https://stackoverflow.com/questions/40167612/how-to-keep-only-the-noun-words-in-a-wordlist-python-nltk'''

    # #pos tagging
    tokens = nltk.word_tokenize(text)
    tags = nltk.pos_tag(tokens)
    # categorizing only the adjectives
    # adjectives = [word for word, pos in tags if (pos == 'JJ' or pos == 'JJR' or pos == 'JJS' or pos == 'NN' or pos == 'NNP' or pos == 'NNS' or pos == 'NNPS')]
    nouns = [word for word, pos in tags if (pos == 'NN')]

    # print(adjectives,"\n")
    nouns_joined = " ".join(nouns)
    #print(nouns_joined,"\n")

def stopWords(removePunctuations):
    global filtered_sentence
    global final_sentence
    # custom stopwords list
    stopwordsVariable = ['i', "br", "n", 'me', 'my', 'myself', 'we', 'our', 'ours',
                         'ourselves', 'you', "you're", "you've", "you'll", "you'd",
                         'your', 'yours', 'yourself', 'yourselves', 'he', 'him', 'his',
                         'himself', 'she', "she's", 'her', 'hers', 'herself', 'it',
                         "it's", 'its', 'itself', 'they', 'them', 'their', 'theirs',
                         'themselves', 'what', 'which', 'who', 'whom', 'this', 'that',
                         "that'll", 'these', 'those', 'am', 'is', 'are', 'was', 'were',
                         'be', 'been', 'being', 'have', 'has', 'had', 'having', 'do',
                         'does', 'did', 'doing', 'a', 'an', 'the', 'and', 'but', 'if',
                         'or', 'because', 'as', 'until', 'while', 'of', 'at', 'by',
                         'for', 'with', 'about', 'against', 'between', 'into', 'through',
                         'during', 'before', 'after', 'above', 'below', 'to', 'from',
                         'up', 'down', 'in', 'out', 'on', 'off', 'over', 'under',
                         'again', 'further', 'then', 'once', 'here', 'there', 'when',
                         'where', 'why', 'how', 'all', 'any', 'both', 'each', 'few',
                         'more', 'most', 'other', 'some', 'such', 'no', 'nor', 'not',
                         'only', 'own', 'same', 'so', 'than', 'too', 'very', 's', 't',
                         'can', 'will', 'just', 'don', "don't", 'should', "should've",
                         'now', 'd', 'll', 'm', 'o', 're', 've', 'y', 'ain', 'aren',
                         "aren't", 'couldn', "couldn't", 'didn', "didn't", 'doesn',
                         "doesn't", 'hadn', "hadn't", 'hasn', "hasn't", 'haven',
                         "haven't", 'isn', "isn't", 'ma', 'mightn', "mightn't",
                         'mustn', "mustn't", 'needn', "needn't", 'shan', "shan't",
                         'shouldn', "shouldn't", 'wasn', "wasn't", 'weren', "weren't",
                         'won', "won't", "div", 'wouldn', "T", "wouldn't", "%", "S", "span",
                         "br", "class=cr", "en", "al", "un", "el", "usar", "malo", "lo","at"]

    # STOPWORDS

    stop_words = stopwordsVariable

    word_tokens = word_tokenize(removePunctuations)
    filtered_sentence = [w for w in word_tokens if not w in stop_words]
    final_sentence = " ".join(filtered_sentence)
    #print(final_sentence)



def textBlobFeatureExtraction(filtered_sentence):
    global text
    global arrayOfTextFeatures
    global comments
    # we can use pos tagging or textblob for feature extraction(noun phrases)

    '''textblob feature extraction'''
    # Convert array of comments into a single string
    comments = TextBlob(final_sentence)
    # Check out noun phrases, will be useful for frequent feature extraction
    #
    word_freq = defaultdict(int)
    count = 0;
    arrayOfTextFeatures = []
    for text in comments.noun_phrases:
        word_freq[text] += 1
        count += comments.words.count(text)
        polarityAndWriteToFile(text)  # method calling and showing the polarity
        arrayOfTextFeatures = [text]
    text.lower()

    '''removing non-english words'''
    text = " ".join(w for w in nltk.wordpunct_tokenize(text) if w.lower() in words or not w.isalpha())
    print(text)
    #
    # text_blob_object=TextBlob(final_sentence)
    # for noun_phrase in text_blob_object.noun_phrases:
    #     # '''removing non-english words'''
    #     text = " ".join(w for w in nltk.wordpunct_tokenize(noun_phrase) if w.lower() in words or not w.isalpha())
    #
    #     print(text)

def deEmojify(comment):
    global returnString
    for character in comment:
        try:
            character.encode("ascii")
            returnString += character
        except UnicodeEncodeError:
            returnString += ''
    return returnString

def dataCleaning(comment):
    global removePunctuations
    global words

    deEmojisedComment = comment.replace("\\", "")  # remove the back slash
    deEmojisedComment = str(deEmojisedComment)[1:-1]  # remove the square brackets
    deEmojisedComment = deEmojisedComment.replace('"', "")  # remove the apostrophe
    deEmojisedComment = deEmojisedComment.replace("'", "")  # remove the apostrophe
    deEmojisedComment = deEmojisedComment.replace("“", "")
    deEmojisedComment = deEmojisedComment.replace("’", "")
    deEmojisedComment = deEmojisedComment.replace("*", "")

    words = set(nltk.corpus.words.words())
    deEmojisedComment = " ".join(
        w for w in nltk.wordpunct_tokenize(deEmojisedComment) if w.lower() in words or not w.isalpha())
    removePunctuations = re.sub(r"[=<>()''/,+.;@#?!&$:*_-]", " ", deEmojisedComment)  # remove the punctuation



# read from the csv file
with open('amazonJsonTOCSV.csv', 'r', encoding="utf-8") as csv_file:  # open the .csv file after converting
    csv_reader = csv.reader(csv_file)  # read it from the csv reader which is in python
    line_count = 0  # break line by line in the datset including the headings

    with open('onlyReviews.csv', "a",
              encoding='utf-8') as csv_file_2:  # open the .csv file and append the data when loaded
        fieldNames = ["review", "polarity"]  # headings of the .csv file
        writer = csv.DictWriter(csv_file_2,
                                fieldnames=fieldNames)  # write to the file as a Dictionary(Dictionary Writer)
        writer.writeheader()  # write the heading to the .csv file

        for row in csv_reader:  # loop through the .csv file

            if line_count == 0:  # if the line is in the 0 index position which the headings of the dataset skip to the next line
                line_count += 1  # break the line when the line count is zero which is the headings

            else:
                comment = row[5]  # take only the column 5 which contain only the summary pf the review of the product
                line_count += 1

                deEmojify(comment)

                dataCleaning(returnString)

                stopWords(removePunctuations)

                textBlobFeatureExtraction(filtered_sentence)


                #posTagging(text)

                # print(text)
                #frequencyPlot(comments.noun_phrases)

                #topicModelling()


