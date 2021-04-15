# Saving the instance with pickle
from similarWord import SimilarWord,Word2Vec
import pickle
similarWordVec = SimilarWord ('customer_reviews.txt')
similarWordVec.buildVec()

pickle.dump(similarWordVec,open('similarWord.pkl','wb'))
# testing statement
# print(similarWordVec.get_most_similar('SCREEN',10))