from flask import Flask, jsonify, request
import requests
import os
from decouple import config
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

UNSPLASH_ACCESS_KEY = config("UNSPLASH_ACCESS_KEY")
DEBUG = config("DEBUG", default=True, cast=bool)

UNSPLASH_URL = "https://api.unsplash.com"
SEARCH_PHOTOS = "/search/photos"
RANDOM_PHOTO = "/photos/random"

app.config["FLASK_DEBUG"] = DEBUG

if not UNSPLASH_ACCESS_KEY:
    raise EnvironmentError("Please create .env with UNSPLASH_ACCES_KEY=<YOUR KEY>")


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

    data = response.json()
    return data


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
