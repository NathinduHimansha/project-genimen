from flask import Flask
from uras import uras

app = Flask(__name__)

app.register_blueprint(uras)


app.run()
