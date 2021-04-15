import pickle
from keyword_extraction import getTopWords
from flask import Flask ,jsonify
from flask_restful import Api , Resource

app = Flask(__name__)
api = Api(app)

class KeywordExtract(Resource):
    def get(self):
        return getTopWords()
        #return{'message' : 'Hello World'}

api.add_resource(KeywordExtract,"/exkey")


if __name__ == '__main__':
    app.run(debug=True)