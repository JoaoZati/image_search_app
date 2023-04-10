from flask import Flask, jsonify, request

app = Flask(__name__)


@app.route('/new-image')
def new_image():
    word = request.args.get("query")


    response = {'word': word}
    return jsonify(response)

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000)
