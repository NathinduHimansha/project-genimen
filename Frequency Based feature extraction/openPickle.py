import pickle
import time
if __name__ == '__main__':
    #Concept Implementation 
    wordCloud = pickle.load(open('wordCounter.pkl','rb'))
    wordCountList = wordCloud.get_top_wordCount_list(10)
    print(wordCountList)
    wordVec = pickle.load(open('similarWord.pkl','rb'))
    print(wordVec.get_most_similar('computer',10)) #key error !
    # Simple Representation of the implementation
    for word in wordCountList:
        print(wordVec.get_most_similar(word[0],1))