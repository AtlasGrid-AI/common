import logging
import sys

# Basic package/app configuration
VERSION = "0.0.1"

STORE_MODEL_PATH = "store/model/"

SERVER_HOST = "127.0.0.1"
SERVER_PORT = 8080

SQLITE_DB = "test.db"


logging.basicConfig(
	stream=sys.stdout,
	level=logging.INFO,
	format='[%(asctime)s] %(levelname)s %(name)s: %(message)s',
	datefmt='%Y-%m-%d %H:%M:%S',
)

cartographer_logger = logging.getLogger("cartographer")
cartographer_logger.setLevel(logging.DEBUG)

pystorz_logger = logging.getLogger("pystorz")
pystorz_logger.setLevel(logging.ERROR)

werkzeug_logger = logging.getLogger("werkzeug")
werkzeug_logger.setLevel(logging.ERROR)
