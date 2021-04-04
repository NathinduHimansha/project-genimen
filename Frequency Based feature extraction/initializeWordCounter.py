# Saving Instance with Pickle
from wordCounter import WordCount,CountVectorizer,stopWords
import pickle

skCountVect = CountVectorizer(stop_words=stopWords,min_df=10)

wordCount = WordCount(skCountVect,'customer_reviews.txt')
wordCount.transformDoc()
pickle.dump(wordCount,open('wordCounter.pkl','wb'))
# Testing statement below
#print(wordCount.get_word_list())