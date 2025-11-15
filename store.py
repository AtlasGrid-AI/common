import os

from . import config

from pystorz import SqliteStoreFactory, MongoStoreFactory, MetaStore

from functools import lru_cache
from .generated import model


def Store():
    return DevtestMongoStore()


@lru_cache(maxsize=1)
def LocalSqliteStore():
    os.makedirs(os.path.dirname(config.LOCAL_SQLITE_DB), exist_ok=True)

    return MetaStore(
        SqliteStoreFactory(model.Schema(), config.LOCAL_SQLITE_DB),
    )


@lru_cache(maxsize=1)
def DevtestMongoStore():
    return MetaStore(MongoStoreFactory(model.Schema(), config.DEVTEST_MONGO_DB))
