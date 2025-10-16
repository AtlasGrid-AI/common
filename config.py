# Basic package/app configuration
VERSION = "0.0.1"
STORE_MODEL_PATH = "model/"

LOCAL_SQLITE_DB = "data/store.db"

import os
DEVTEST_MONGO_DB = os.environ.get('MONGODB_URI')

