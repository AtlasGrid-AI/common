from . import config

from pystorz.sql.sqlite import SqliteStoreFactory
from pystorz.mongo.mongo import MongoStoreFactory
from pystorz.meta.store import MetaStore
from functools import lru_cache
from .generated import model


def Store():
    return DevtestMongoStore()


@lru_cache(maxsize=1)
def LocalSqliteStore():
    return MetaStore(
        SqliteStoreFactory(model.Schema(), config.LOCAL_SQLITE_DB),
    )


@lru_cache(maxsize=1)
def DevtestMongoStore():
    return MetaStore(MongoStoreFactory(model.Schema(), config.DEVTEST_MONGO_DB))
