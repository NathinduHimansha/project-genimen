from wordcloud import WordCloud, STOPWORDS
import matplotlib.pyplot as plt

text_data = []

def feeder():
    pass

with open('customer_reviews.txt', encoding='UTF-8') as raw_data:
    text_data = raw_data.readlines()


wc = WordCloud(stopwords=STOPWORDS,max_words=50)

wc.generate(''.join(text_data))

plt.axis("off")
plt.imshow(wc, interpolation="bilinear")
plt.show()