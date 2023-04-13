from pymongo import MongoClient
from decouple import config

MONGO_URL = config("MONGO_URL", default="mongo")
MONGO_USERNAME = config("MONGO_USERNAME", default="root")
MONGO_PASSWORD = config("MONGO_PASSWORD", default="")
MONGO_PORT = config("MONGO_PORT", default=27017)

mongo_client = MongoClient(
    host=MONGO_URL,
    username=MONGO_USERNAME,
    password=MONGO_PASSWORD,
    port=MONGO_PORT,
)

gallery_db = mongo_client.gallery
images_collection = gallery_db.images


def insert_test_document():
    db = mongo_client.test
    test_collection = db.test_collection
    mongo_result = test_collection.insert_one(
        {
            "name": "João G",
            "instructor": "False",
        }
    )

    print(mongo_result)


def find_images(images_collection=images_collection):
    images = images_collection.find({})
    return images


def add_image(images_collection=images_collection, **kwargs):
    image = kwargs.get('image', {})
    images_collection.insert_one(image)

    data = images_collection.find_one({"id": image["id"]})
    data["_id"] = str(data.get("_id"))
    return data
