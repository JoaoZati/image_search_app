# Flask
from flask import Flask, jsonify, request, make_response
from flask_cors import CORS

# Tird party
import requests
from decouple import config
from debugger import initialize_debugger
from bson import ObjectId

# App
from mongo_client import (
    insert_test_document,
    find_images,
    add_image,
    find_image_on_database,
    delete_one_image,
)

app = Flask(__name__)
CORS(app)

UNSPLASH_ACCESS_KEY = config("UNSPLASH_ACCESS_KEY", default="")
DEBUG = config("DEBUG", default=True, cast=bool)

UNSPLASH_URL = "https://api.unsplash.com"
SEARCH_PHOTOS = "/search/photos"
RANDOM_PHOTO = "/photos/random"

app.config["FLASK_DEBUG"] = DEBUG
app.debug = DEBUG

if not UNSPLASH_ACCESS_KEY:
    raise EnvironmentError("Please create .env with UNSPLASH_ACCES_KEY=<YOUR KEY>")


@app.route("/")
@app.route("/hello_word")
def hello_word():
    print("hello word")
    return {"message": "ok"}


@app.route("/insert-test-db")
def insert_test_db():
    insert_test_document()
    return {"massage": "ok"}


@app.route("/new-image")
def new_image():
    url_photos = UNSPLASH_URL + RANDOM_PHOTO
    word = request.args.get("query")

    headers = {
        "Accept-Version": "v1",
        "Authorization": f"Client-ID {UNSPLASH_ACCESS_KEY}",
    }

    params = {"query": word}

    response = requests.get(url=url_photos, headers=headers, params=params)

    if response.status_code == 404:
        return jsonify({})

    data = response.json()
    data["title"] = word
    return data


@app.route("/images", methods=["GET", "POST"])
def images():
    if request.method == "POST":
        image = request.get_json()
        return jsonify(add_image(**{"image": image}))

    data_json = jsonify(find_images())

    response = make_response(data_json)
    response.headers.set("Access-Control-Allow-Origin", "*")
    return data_json


@app.route("/images/find-image", methods=["POST"])
def image_find_image():
    dict_json = request.get_json()

    return jsonify(find_image_on_database(dict_json.get("id")))


@app.route("/images/<string:image_id>", methods=["DELETE"])
def images_image_id(image_id):
    data = {"deleted_id": ""}

    try:
        image_id = ObjectId(image_id)
    except Exception as e:
        data['error'] = str(e)

    if request.method == "DELETE":
        data = delete_one_image(image_id, data=data)

    return jsonify(data)


if __name__ == "__main__":
    initialize_debugger()
    app.run(host="0.0.0.0", port=5000)
7