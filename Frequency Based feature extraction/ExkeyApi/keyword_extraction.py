import pickle
# Opening the established binary 

word_counter = pickle.load(open('ExKeyResources\wordCounter.pkl','rb'))

#Returning a python dict with top words and their respective counts
def getTopWords():
    word_dict = {x[0]:x[1] for x in word_counter.get_top_wordCount_list(10)}
    return word_dict
    

if __name__ == '__main__':
    #word_counter = pickle.load(open('ExKeyResources\wordCounter.pkl','rb'))
    print(getTopWords())
