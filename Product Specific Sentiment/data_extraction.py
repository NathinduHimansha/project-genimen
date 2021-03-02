#import necessary modules
import pandas as pd
import nltk
nltk.download('punkt');
from nltk.corpus import stopwords
nltk.download('stopwords')
from nltk.tokenize import word_tokenize
# import module 
import re



def striphtml(data):
    p = re.compile(r'<.*?>')
    return p.sub('', data)


emoji_pattern = re.compile("["
        u"\U0001F600-\U0001F64F"  # emoticons
        u"\U0001F300-\U0001F5FF"  # symbols & pictographs
        u"\U0001F680-\U0001F6FF"  # transport & map symbols
        u"\U0001F1E0-\U0001F1FF"  # flags (iOS)
                           "]+", flags=re.UNICODE)

result = pd.read_csv('C:/Users/ASUS/Documents/sdgp/pyextract/ll.csv')
df = pd.DataFrame(result)

# Selecting column
for i in range (6405):
    row = df['review'].loc[i]
    row2=striphtml(row)
    row3=emoji_pattern.sub(r'', row2) # no emoji
    text_tokens = word_tokenize(row3)
    tokens_without_sw = [word for word in text_tokens if not word in stopwords.words()]
    filtered_sentence = (" ").join(tokens_without_sw)
    print(filtered_sentence)
    
    
    
     
    
    