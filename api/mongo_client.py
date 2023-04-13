from pymongo import MongoClient
from decouple import config

MONGO_URL = config("MONGO_URL", default="mongo")
MONGO_USERNAME = config("MONGO_USERNAME", default="root")
MONGO_PASSWORD = config("MONGO_PASSWORD", default="")
MONGO_PORT = config("MONGO_PORT", default=27017)

mongo_cliente = MongoClient(
    host=MONGO_URL,
    username=MONGO_USERNAME,
    password=MONGO_PASSWORD,
    port=MONGO_PORT,
)


def insert_test_document():
    db = mongo_cliente.test
    test_collection = db.test_collection
    mongo_result = test_collection.insert_one(
        {
            "name": "João G",
            "instructor": "False",
        }
    )

    print(mongo_result)
