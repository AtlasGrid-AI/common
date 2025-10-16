from store.config import config

from pystorz.sql.sqlite import SqliteStoreFactory
from pystorz.meta.store import MetaStore
from pystorz.mgen import generator  

import logging
log = logging.getLogger(__name__)


def initialize():
    log.info("initializing store...")

    generator.Generate(
        config.STORE_MODEL_PATH)
    
    log.debug("model generated...")


__cached_store = None
def Store():
    global __cached_store

    if __cached_store is None:
        from generated.model import Schema
        
        schema = Schema()
        __cached_store = MetaStore(
            SqliteStoreFactory(schema, config.SQLITE_DB),
        )

    return __cached_store

