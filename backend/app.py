from flask import Flask, jsonify
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

@app.route("/todos")
def todolist():
    todos = json.load(open('backend/Data Files/todolist.json', 'r'))
    return jsonify(todos)

@app.route("/movies")
def movieList():
    movies = json.load(open('backend/Data Files/movieList.json','r'))
    return jsonify(movies)

if __name__=='__main__':
    app.run(port=5000, debug=True)