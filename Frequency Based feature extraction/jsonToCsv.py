import pandas as pd

#conver the json file to .csv
pdObj = pd.read_json('amazon_mobile_user_reviews.jl', lines=True)
csvData = pdObj.to_csv("amazonJsonTOCSV.csv",index=False)
print(csvData)