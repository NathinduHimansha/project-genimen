# @Manthila : Considering the use case association with a enity has not yet proven validity 
# Extracting raw human generated text data for NLP processes
# Targeted Processing FILE amazon_mobile_user_reviews.jl
import json
import re
import string
import demoji
import nltk
import pandas as pd
#nltk.download('words') (Needs Running on first attempt)
#demoji.download_codes() During the very first launch (Needs Running on First attempt)
#demoji.last_downloaded_timestamp() Last time the emoji data was updated (Not Required to Run )
#nltk.download('stopwords') (Needs Running on first attempt)


# Loading Json Line file in to the data structure 
data =[]
with open ('amazon_mobile_user_reviews.jl') as f:
    '''Load the data from the Json line file '''
    for record in f:
        data.append(json.loads(record))


# ### Irrelevant for the meaning of overall sentence
# * Punctuation
# * Stop Words
# * Emojis

# Noise Reduction method to Remove element that doesn't contribute to context
english_words = set(nltk.corpus.words.words())
def noiseReduction(text):
    text = text.replace('\n',' ') # Abrupt line endings
    text = re.sub(r'^https?:\/\/.*[\r\n]*', ' ', text, flags=re.MULTILINE) #Remove Urls 
    cleaner = re.compile('<.*?>') # regular expersion compiler to remove HTML components
    if ((re.search('<.*?>',text) != None) or (re.search('<.*?>',text) != '')):
                    text = re.sub(cleaner,'',text).strip()
                    text= demoji.replace(text,"") # Removing Emoji's
                    text = ''.join([char for char in text if char not in string.punctuation])
    if text!= '':
        return text
# tokenize function 
def tokennizer(text):
    text = text.lower()
    tokens = re.split('\W+',text)
    return tokens

def removeNonEnglishWords(tokenized_text):
    '''Remove non english words'''
    text = [word for word in tokenized_text if word not in english_words]
    return text

def removeStopWords(tokenized_text):
    '''Remove stop words'''
    text = [word for word in tokenized_text if word not in stopwords]
    return text

def text_preprocessor(tokenized_text):
    text = [word for word in tokenized_text if word in english_words and word.isalpha()]
    text = [word for word in text if word not in stopwords]
    return text

# This will create new Text files seprately with titles and reviews (Cleaned)
with open('customer_review_titles.txt','w',encoding='utf-8') as titlesR:
    with open('customer_reviews.txt','w',encoding='utf-8') as reviewsR:
        '''Iterate through the loaded data-struc writing to txt files'''
        
        for record in data:
            for i in record['customer_review_title']:
                line = noiseReduction(i)
                if line != None:
                    titlesR.write(line+'\n')
            for i in record['customer_review']:
                line = noiseReduction(i)
                if line != None:
                    reviewsR.write(line+'\n')
                    

# Using panda to Create Data frames 
titleData = pd.read_csv('customer_review_titles.txt',sep='\t',header=None)
reviewData = pd.read_csv('customer_reviews.txt',sep='\t',header=None)
titleData.columns= ['Title'] #Adding a title for the datafram
reviewData.columns =['Review'] #Adding a title for the datafram

titleData['tokenized_text'] = titleData['Title'].apply(lambda x: tokennizer(str(x)))
reviewData['tokenized_text'] = reviewData['Review'].apply(lambda x:tokennizer(str(x)))
# Establishing common english words and stop words
english_words = set(nltk.corpus.words.words())
stopwords = nltk.corpus.stopwords.words('english')



titleData['non_stop'] = titleData['tokenized_text'].apply(lambda x: text_preprocessor(x))
reviewData['non_stop'] = reviewData['tokenized_text'].apply(lambda x:text_preprocessor(x))


# This is a feeder function used to feed string from the data frame to a SciLearn Method 
def feeder(tokenized_text):
    text = [word for word in tokenized_text]
    return text
    



