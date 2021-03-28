from gensim.models import Word2Vec
from gensim.utils import simple_preprocess



#Opening the Data
review_documents = open('customer_reviews.txt','r',encoding='UTF-8') 
review_text = review_documents.readlines()

#Creating data structure to hold the tokenized reviews
tokenized_review_text = []
#for document in review_text:
#    tokenized_review_text.append(simple_preprocess(document))

#print(tokenized_review_text[10]) #Testing the populated list

# Building the word2vec model 
#word_vec_model = Word2Vec(tokenized_review_text,vector_size=100, window=5, min_count=1, workers=4)
#word_vec_model.save("word2vec.model")

# loading in the saved model
model = Word2Vec.load("word2vec.model")
#vector = model.wv['computer'] 

#geting the most similar words
sims = model.wv.most_similar('storage', topn=10)
print(sims)

#print(word_vec_model.similarity('screen', 'glass'))
