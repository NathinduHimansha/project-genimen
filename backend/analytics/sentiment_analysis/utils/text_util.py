import re

def sent_tokenize(text):
    no_extra_space = re.sub("\s{2,}", " ", text)
    return re.split("\.+\s?|but", no_extra_space)
