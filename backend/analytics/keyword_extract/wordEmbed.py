from gensim.models import Word2Vec
from KeywordExtractUtil import docPreProcess

#Tokenize words per each sentence withing the provided Document
user_reviews_tokenized = docPreProcess.docTokenization('customer_reviews.txt')

#Building the word2vec model
word2VecModel=Word2Vec(user_reviews_tokenized,min_count=10,workers=6,sorted_vocab=1)

#Saving the Embeddings
word2VecModel.save('../wordEmbedding.sav')

