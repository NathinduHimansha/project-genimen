from sklearn.feature_extraction.text import CountVectorizer
from nltk.corpus import stopwords

# using Stop word list provided with nltk package
stopWords = set(stopwords.words('english')) 

class WordCount:
    def __init__(self,CountVectorizer,reviews):
        self.countVectorizer = CountVectorizer
        self.documents = reviews
        self.document_term_matrix = None
    
    def transformDoc(self):
        with open(self.documents,'r',encoding='UTF-8') as review_documents:
            review_text = review_documents.readlines()
            self.document_term_matrix = self.countVectorizer.fit_transform(review_text)
    
    def get_word_list(self):
        ''' Returns the list of words vectorizer picked up'''
        return self.countVectorizer.get_feature_names()
    
    def get_word_count_list(self):
        '''Returns a list [word , word count] '''
        wordSum  =  self.document_term_matrix.sum(axis=0).tolist()[0]
        wordList =self.countVectorizer.get_feature_names()
        result = map(lambda x, y: [x,y], wordList, wordSum)
        return list(result)
    
    def get_top_wordCount_list(self,numOfWords=10):
        '''
        Returns word count list sorted (frequency)
        Default will return 10 words
        '''
        word_count_list = self.get_word_count_list()
        word_count_list.sort(key = lambda x:x[1])
        return word_count_list[-numOfWords:]





