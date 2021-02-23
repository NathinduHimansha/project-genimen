import re

def sent_tokenize(text):
    return re.split("\.+?\s|but", text)
