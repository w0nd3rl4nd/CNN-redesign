from scrapper import obtener_noticias_cnn
from flask import Flask, jsonify, make_response 
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

@app.route('/cnn-news-1')
def cnn_news_1():
    noticias = obtener_noticias_cnn(1)
    return make_response(jsonify(noticias), 200)

@app.route('/cnn-news-5')
def cnn_news_5():
    noticias = obtener_noticias_cnn(5)
    return make_response(jsonify(noticias), 200)

@app.route('/cnn-news-15')
def cnn_news_15():
    noticias = obtener_noticias_cnn(15)
    return make_response(jsonify(noticias), 200)


## Create new one for 1, 5 and 15


if __name__ == '__main__':
    app.run(debug=True)
