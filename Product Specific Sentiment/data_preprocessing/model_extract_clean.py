import pandas as pd
import re
from itertools import chain
import nltk
from nltk import word_tokenize

df = pd.read_json("amazon_mobile_user_reviews.jl", lines=True) # Main dataset
file_path = "model-reviews/" # initial file path for saving csv files

def pad_list(pad, arr, char=None):
    return (arr + [char] * pad)[:pad]

# Finding the model is available in the dataset
def model_filter_regex(model_pattern, row):
    if len(re.findall(model_pattern.lower(), row.lower())) > 0: # if larger than 0 the model is found in the dataset
        return True
    return False

# Replace empty fileds with review stars as '0.0 out of 5 stars'
def pad_remove_no_review_star(star, review):
    if len(star) > len(review):
            return star[:len(review)]
    elif len(star) < len(review):
        return pad_list(len(review), star, '0.0 out of 5 stars')
    return star

# Replace emtpy fileds with review title as 0
def pad_no_review_title(title, review):
    if len(title) > len(review):
        return title[:len(review)]
    elif len(title) < len(review):
        return pad_list(len(review), title, 0)
    return title

# Return the star rating as a number
def get_star_rating(rating_str):
    return [star[:3] for star in rating_str]

# remove the special characters from the model name (from model_patterns)
def get_model_name_from_regex_pattern(pattern):
    rename = re.sub("(?=\W)(?=\S)(?=[^\\\])(?=[^\.]).+", "", pattern)
    if rename[-1] == " ":
        return rename[:-1]
    return rename

# remove emoji
def remove_emoji(text):
    text = str(text); # setting input as a string
    text = text.lower(); # setting input to lowercase
    regex_pattern = re.compile(pattern = "["
        u"\U0001F600-\U0001F64F"  # emoticons
        u"\U0001F300-\U0001F5FF"  
        u"\U0001F680-\U0001F6FF"  
        u"\U0001F1E0-\U0001F1FF"  
                           "]+", flags = re.UNICODE)
    return regex_pattern.sub(' ', str(text))

# remove stop words
def remove_stopwords(text):
    stopwordsVariable = ['i', "br", "n", 'me', 'my', 'myself', 'we', 'our', 'ours',
                         'ourselves', 'you', "you're", "you've", "you'll", "you'd",
                         'your', 'yours', 'yourself', 'yourselves', 'he', 'him', 'his',
                         'himself', 'she', "she's", 'her', 'hers', 'herself', 'it',
                         "it's", 'its', 'itself', 'they', 'them', 'their', 'theirs',
                         'themselves', 'what', 'which', 'who', 'whom', 'this', 'that',
                         "that'll", 'these', 'those', 'am', 'is', 'are', 'was', 'were',
                         'be', 'been', 'being', 'have', 'has', 'had', 'having', 'do',
                         'does', 'did', 'doing', 'a', 'an', 'the', 'and', 'but', 'if',
                         'or', 'because', 'as', 'until', 'while', 'of', 'at', 'by',
                         'for', 'with', 'about', 'against', 'between', 'into', 'through',
                         'during', 'before', 'after', 'above', 'below', 'to', 'from',
                         'up', 'down', 'in', 'out', 'on', 'off', 'over', 'under',
                         'again', 'further', 'then', 'once', 'here', 'there', 'when',
                         'where', 'why', 'how', 'all', 'any', 'both', 'each', 'few',
                         'more', 'most', 'other', 'some', 'such', 'no', 'nor', 'not',
                         'only', 'own', 'same', 'so', 'than', 'too', 'very', 's', 't',
                         'can', 'will', 'just', 'don', "don't", 'should', "should've",
                         'now', 'd', 'll', 'm', 'o', 're', 've', 'y', 'ain', 'aren',
                         "aren't", 'couldn', "couldn't", 'didn', "didn't", 'doesn',
                         "doesn't", 'hadn', "hadn't", 'hasn', "hasn't", 'haven',
                         "haven't", 'isn', "isn't", 'ma', 'mightn', "mightn't",
                         'mustn', "mustn't", 'needn', "needn't", 'shan', "shan't",
                         'shouldn', "shouldn't", 'wasn', "wasn't", 'weren', "weren't",
                         'won', "won't", "div", 'wouldn', "T", "wouldn't", "%", "S", "span",
                         "br", "class=cr", "en", "al", "un", "el", "usar", "malo", "lo"]

    stop_words = stopwordsVariable
    word_tokens = word_tokenize(text)
    filtered_sentence = [w for w in word_tokens if not w in stop_words]
    cleared_text = " ".join(filtered_sentence)
    return cleared_text

# Clean data
def clean_text(review_array):
    words = set(nltk.corpus.words.words())
    for review in range (len(review_array)):
        review_array[review] = remove_emoji(review_array[review]) # removing the emoji
        review_array[review] = re.compile('<.*?>|&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-f]{1,6});').sub(' ', str(review_array[review])) # removing the html tags
        #add further clean process here
        #remove punc
        review_array[review]= re.sub(r"[=<>()''/,+.;@#?!&$:*_-]", " ", str(review_array[review]))  # remove the punctuation
        #remove non english words
        review_array[review] = " ".join(w for w in nltk.wordpunct_tokenize(review_array[review]) if w.lower() in words or not w.isalpha())
        #remove stop words
        review_array[review] = remove_stopwords(review_array[review])


    return review_array

# initial smartphone model list
def get_models_from_regex():
    model_patterns = ['Samsung Galaxy S7']

    model_review = {} # dictionary to store the model
    for i in range(len(model_patterns)): # iterate through the model_patterns (Given model list)
        model_name = get_model_name_from_regex_pattern(model_patterns[i]) # Getting the model name from the model_patern list
        model = model_patterns[i] # assigning model name to a string variable
        df[model] = df['product_name'].apply(lambda x: model_filter_regex(model, x)) # Finding matching model name from the product_name list in the jl data set
        review = list(chain.from_iterable(df[df[model]]['customer_review'])) # this will get the reviews from the dataset by the matching model name and add it to the review list
        review_title = list(chain.from_iterable(df[df[model]]['customer_review_title'])) # this will get the review title from the dataset by the matching model name and add it to the review title list
        review_star = list(chain.from_iterable(df[df[model]]['customer_review_star'])) # this will get the ratings from the dataset by the matching model name and add it to the rating list
        # Cleaning process
        review_title = clean_text(review_title) # Cleaning review titles
        review = clean_text(review) # cleaning reviews
        model_review[model_name] = [review, review_title, review_star] # format follows
        # model_review = {"iphone7": [review,review_title,review_star]}

    for key, value in model_review.items(): # iterate through the model_review dictionary to write to a csv file
        # Add text Cleaning here
        mrf = pd.DataFrame() # creating a new data frame
        mrf['review'] = value[0] # adding the review to a column
        mrf['review_title'] = value[1] # adding the review title to a column
        mrf['review_star'] = value[2] # adding the review star rating to a column
        file_name = re.sub(" ", "-", key) + ".csv" # creating a file name with replacing the spaces with '-'
        file_name = file_name.lower() # setting name to lower case
        mrf.to_csv(file_path+file_name, sep=",", index=False) # writing to the new model based csv file
    # print("Total retrieved: ", len(model_review))
    # print("Total Num Of Phones: ", len(model_patterns))

df['customer_review_star'] = df.apply(lambda x: pad_remove_no_review_star(x['customer_review_star'], x['customer_review']), axis=1) # replacing empty star ratings in the dataset
df['customer_review_star'] = df['customer_review_star'].apply(lambda x: get_star_rating(x)) # setting the star rating as a number to the dataset
df['customer_review_title'] = df.apply(lambda x: pad_no_review_title(x['customer_review_title'], x['customer_review']), axis=1) # replacing empty customer review titles in the dataset
df['product_name'] = df['product_name'].apply(lambda x: x[0]) # setting the product name by only model name (excluding specs)

# Extract by models
get_models_from_regex()
