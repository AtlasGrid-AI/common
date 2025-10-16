import config

from pystorz.mgen import generator  

import logging
log = logging.getLogger(__name__)
log.info("initializing store...")

generator.Generate(
    config.STORE_MODEL_PATH)

