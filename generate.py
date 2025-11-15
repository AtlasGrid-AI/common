import config

from pystorz import Generate

import logging

log = logging.getLogger(__name__)
log.info("initializing store...")

Generate(config.STORE_MODEL_PATH)
