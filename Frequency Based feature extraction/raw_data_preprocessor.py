# @Manthila : Considering the use case association with a enity has not yet proven validity 
# Extracting raw human generated text data for NLP processes

import json
import re

data =[]
cleaner = re.compile('<.*?>') # regular expersion compiler to remove HTML components 

with open ('amazon_mobile_user_reviews.jl') as f:
    '''Load the data from the Json line file '''
    for record in f:
        data.append(json.loads(record))

#headerRowPlacement =0
with open('customer_review_titles.txt','w') as titlesR:
    with open('customer_reviews.txt','w') as reviewsR:
        '''Iterate through the loaded data-struc writing to txt files'''
        for record in data:
            for i in record['customer_review_title']:
                titlesR.write(i)
                titlesR.write('\n')
            for i in record['customer_review']:
                txt = i.replace('\n',' ')
                if ((re.search('<.*?>',txt) != None) or (re.search('<.*?>',txt) != '')):
                    line = re.sub(cleaner,'',txt).strip()
                    if line != '':
                        reviewsR.write(re.sub(cleaner,'',txt).strip())
                        reviewsR.write('\n')
                    