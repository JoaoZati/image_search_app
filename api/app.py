from flask import Flask, jsonify

app = Flask(__name__)


# Coud be
# app.route('/')(hello)
@app.route('/')
@app.route('/api/hello')
def hello():
    response = {'message': 'Hello, World!'}
    return jsonify(response)

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000)
