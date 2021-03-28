from sklearn.feature_extraction.text import CountVectorizer
#from sklearn.feature_extraction.text import HashingVectorizer
from nltk.corpus import stopwords
import nltk
#import pandas as pd

stopWords = set(stopwords.words('english'))

review_documents = open('customer_reviews.txt','r',encoding='UTF-8') 
review_text = review_documents.readlines()


countVectorizer = CountVectorizer(stop_words=stopWords)

countVectModel = countVectorizer.fit_transform(review_text)

sum_words = countVectModel.sum(axis=0)
words_freq = [(word,sum_words[0,idx])for word,idx in countVectorizer.vocabulary_.items()]
words_freq =sorted(words_freq, key = lambda x: x[1], reverse=True)
#for x in words_freq:
#    print(nltk.pos_tag(str(x[0])))
listOfWord = countVectorizer.get_feature_names()
print(words_freq[:100])
