import pandas as pd
import re
from itertools import chain

df = pd.read_json("amazon_mobile_user_reviews.jl", lines=True) # Main dataset

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

# initial file path for saving csv files
file_path = "model-reviews/"

# initial smartphone model list
def get_models_from_regex():
    model_patterns = ['Samsung Galaxy A51','Samsung Galaxy A70','Samsung Galaxy A71','Samsung Galaxy J3 Prime',
                      'Samsung Galaxy Note 10\+','Samsung Galaxy Note 10 Lite','Samsung Galaxy Note 5',
                      'Galaxy Note 9','Samsung Galaxy S10\+','Samsung Galaxy S10E',
                      'Samsung Galaxy S20\+','Samsung Galaxy S6', 'Samsung Galaxy S7','Samsung Galaxy S8\+',
                      'Samsung Galaxy S9\+','Samsung Galaxy XCover Pro', 'Samsung Galaxy Z Flip',
                      'Samsung Galaxy A50','Samsung Galaxy A20S','Samsung Galaxy A21S', 'Samsung Galaxy A30S',
                      'Samsung Galaxy A31', 'Samsung Galaxy A11', 'Samsung Galaxy A10S',
                      'Samsung Galaxy A10E','Samsung Galaxy A01 Core', 'Samsung Electronics Galaxy Note 20',
                      'Samsung Galaxy S9[^+]+', 'Samsung Galaxy Note 10[^+]+', 'Samsung Galaxy S10[^(+|e)]+',
                      'Samsung Galaxy S20 ', 'Samsung Galaxy A01 [^(Core)]+', 'Galaxy S8 ', 'Galaxy Note 8|Galaxy Note8',
                      'OnePlus 7 Pro', 'OnePlus 7T', 'OnePlus 6[^T]+', 'OnePlus 8 Pro','OnePlus 8T',
                      'OnePlus Nord N100', 'OnePlus 6T',  'Pixel 4 XL', 'Pixel 3 XL', 'Pixel 3a', 'Pixel 4a', 'Pixel 5',
                      'Pixel 2 XL', 'Pixel 4 [^XL]+','Pixel 3 [^XL]+', 'Pixel 2 [^XL]+', 'Honor 8S', 'Honor 9X',
                      'Huawei P30PRO', 'Huawei E837', 'Honor 10 Lite', 'Huawei Honor 9', 'Huawei Nova 5T',
                      'Huawei P30 Lite', 'Huawei Y5', 'Huawei Mate 10 Pro', 'Realme 6 [^Pro]+', 'Realme 6 Pro',
                      'Sony Xperia 10', 'Sony Xperia 1', 'Sony Xperia L1', 'Sony Xperia XZ2', 'Sony Xperia XZ Premium',
                      'ASUS ZenFone Max', 'HTC Desire 530', 'HTC One \(?M7\)?', 'HTC One M8', 'HTC One M9',
                      'LG G6', 'LG\s?-? G7 ThinQ', 'LG G8S ThinQ', 'LG G8 ThinQ', 'LG G8X ThinQ',
                      'LG K22\+', 'LG K40', 'LG K50', 'LG Q7\+', 'LG Stylo 4', 'LG V30', 'LG V35 ThinQ', 'LG V50 ThinQ',
                      'LG V60 ThinQ', 'Nokia 4.2', 'Nokia 7.1', 'Nokia 7.2', 'Nokia 8.3', 'Moto G 5G Plus', 'Moto G7 Play',
                      'Moto G8 Power', 'Moto G9\+', 'Moto One Hyper', 'Motorola Edge', 'Motorola Moto E6 Play',
                      'Motorola Moto E7 Plus', 'Motorola Moto G4 Play', 'Motorola Moto G5\+', 'Motorola Moto G5S',
                      'Motorola Moto G5 ', 'Motorola Moto G6 Play', 'Motorola Moto G7 [^Play|ThinQ|Power]',
                      'Motorola Moto G7\+', 'Motorola Moto G7 Power', 'Motorola Moto G9 [^Play]',
                      'Motorola Moto G9 Play', 'Motorola Moto X4', 'Motorola Moto Z Play', 'Motorola One Action',
                      'Motorola One Fusion', 'Motorola One Vision', 'Motorola One Zoom', 'Motorola X4', 'Xiaomi Redmi 9 ',
                      'Xiaomi Redmi 9A', 'Xiaomi Redmi 9C', 'Xiaomi Redmi Note 8 [^Pro]', 'Xiaomi Redmi Note 8 Pro',
                      'Xiaomi Redmi Note 9 [^Pro]', 'Xiaomi Redmi Note 9 Pro', 'Xiaomi Redmi Note 9S',
                      'ZTE Blade V20 Smart', 'Apple iPhone 11', 'Apple iPhone 7 Plus', 'Apple iPhone 7,? [^Plus]+',
                      'Apple iPhone 8 Plus', 'Apple iPhone 8,? [^Plus]', 'Apple iPhone SE', 'Apple iPhone X,',
                      'Apple iPhone XR', 'Apple iPhone XS Max', 'Apple iPhone XS,'
                      ]
    model_review = {} # dictionary to store the model
    for i in range(len(model_patterns)): # iterate through the model_patterns (Given model list)
        model_name = get_model_name_from_regex_pattern(model_patterns[i]) # Getting the model name from the model_patern list
        model = model_patterns[i] # assigning model name to a string variable
        df[model] = df['product_name'].apply(lambda x: model_filter_regex(model, x)) # Finding matching model name from the product_name list in the jl data set
        review = list(chain.from_iterable(df[df[model]]['customer_review'])) # this will get the reviews from the dataset by the matching model name and add it to the review list
        review_title = list(chain.from_iterable(df[df[model]]['customer_review_title'])) # this will get the review title from the dataset by the matching model name and add it to the review title list
        review_star = list(chain.from_iterable(df[df[model]]['customer_review_star'])) # this will get the ratings from the dataset by the matching model name and add it to the rating list
        model_review[model_name] = [review, review_title, review_star] #format follows
        # model_review = {"iphone7": [review,review_title,review_star]} model-reviews/Samsung Galaxy Note 10+/

    for key, value in model_review.items(): # iterate through the model_review dictionary to write to a csv file
        mrf = pd.DataFrame() # creating a new data frame
        mrf['review'] = value[0] # adding the review to a column
        mrf['review_title'] = value[1] # adding the review title to a column
        mrf['review_star'] = value[2] # adding the review star rating to a column
        file_name = re.sub(" ", "-", key) + ".csv" # creating a file name with replacing the spaces with '-'
        file_name = file_name.lower() # setting name to lower case
        mrf.to_csv(file_path+file_name, sep=",", index=False) # writing to the new model based csv file
    print("Total retrieved: ", len(model_review))
    print("Total Num Of Phones: ", len(model_patterns))

df['customer_review_star'] = df.apply(lambda x: pad_remove_no_review_star(x['customer_review_star'], x['customer_review']), axis=1) # replacing empty star ratings in the dataset
df['customer_review_star'] = df['customer_review_star'].apply(lambda x: get_star_rating(x)) # setting the star rating as a number to the dataset
df['customer_review_title'] = df.apply(lambda x: pad_no_review_title(x['customer_review_title'], x['customer_review']), axis=1) # replacing empty customer review titles in the dataset
df['product_name'] = df['product_name'].apply(lambda x: x[0]) # setting the product name by only model name (excluding specs)

# Extract by models
get_models_from_regex()
