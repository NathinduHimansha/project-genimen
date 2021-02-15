import pandas

file = open("testreviews.jl")  # file object (original file)

jsonFile = pandas.read_json(file, lines=True, encoding="utf-8")  # file converting into json object
csvFile = jsonFile.to_csv("amazon_reviews.csv", index=False)  # json object to csv file
