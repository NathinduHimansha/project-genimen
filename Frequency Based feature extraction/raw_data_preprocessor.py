# @Manthila : Considering the use case association with a enity has not yet proven validity 
# Extracting raw human generated text data for NLP processes
# Targeted Processing FILE amazon_mobile_user_reviews.jl


import json
import re

data =[]
cleaner = re.compile('<.*?>') # regular expersion compiler to remove HTML components 

with open ('amazon_mobile_user_reviews.jl') as f:
    '''Load the data from the Json line file '''
    for record in f:
        data.append(json.loads(record))

with open('customer_review_titles.txt','w',encoding='utf-8') as titlesR:
    with open('customer_reviews.txt','w',encoding='utf-8') as reviewsR:
        '''Iterate through the loaded data-struc writing to txt files'''
        for record in data:
            for i in record['customer_review_title']:
                titlesR.write(i+'\n')
            for i in record['customer_review']:
                txt = i.replace('\n',' ')
                if ((re.search('<.*?>',txt) != None) or (re.search('<.*?>',txt) != '')):
                    line = re.sub(cleaner,'',txt).strip()
                    if line != '':
                        reviewsR.write(line+'\n')
                    