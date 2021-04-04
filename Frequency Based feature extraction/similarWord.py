#Word2Vec Implementation by Gensim
from gensim.models import Word2Vec

class SimilarWord:
    def __init__(self,review_documents=None,word2Vec=Word2Vec):
        ''' 
        Creates a Instance of a word2vec
        If Documents are not provied pre saved model needs loading
        Documents are Raw file with each segment ending with new Lines
        '''
        self.vec = word2Vec
        self.word2VecModel = None
        self.review = review_documents
    
    def buildVec(self,min_count=10,workers=6):
        '''
        Specific to Genimen Project Requirements
        min_count discard words with frequency stated. 
        workers are thread utilized during traning 
        '''
        review_documents_tokenized = self.__tokenize_the_documents()
        self.word2VecModel = self.vec(review_documents_tokenized,min_count=min_count,workers=workers,sorted_vocab=1)
    
    def loadModel(self,model):
        '''
        utilizing built in gensim word2vec load method
        models created using only the save_model can be loaded
        @param model is a string representing the file name
        '''
        self.word2VecModel = self.vec.load(model)

    def save_model(self,saveName='wordEmbed.model'):
        '''
        utilizing built in model save in gensim
        default file name (wordEmbed.model)
        '''
        self.word2VecModel.save(saveName)
    
    def get_most_similar(self,targetWord,numberOfWords=5):
        '''
        Returns a list of tuples words and similarity score
        default number of entries returned is set to 5 
        '''
        return self.word2VecModel.wv.most_similar(targetWord.lower(), topn=numberOfWords)

    def __tokenize_the_documents(self):
        '''
        Sentence Tokenization method 
        Override if needed 
        '''

        review_documents_tokenized = []
        with open(self.review,'r',encoding='UTF-8') as document:
            for review in document:
                tokenized_line = review.lower().split()
                review_documents_tokenized.append(tokenized_line)
        return review_documents_tokenized




