import logging
import os
from datetime import datetime

LOG_DIR = "logs"
os.makedirs(LOG_DIR, exist_ok=True)

log_filename = datetime.now().strftime("%Y-%m-%d_%H-%M-%S.log")
log_path = os.path.join(LOG_DIR, log_filename)

LOG_FORMAT = "%(asctime)s [%(levelname)s] [%(name)s] %(message)s"

logging.basicConfig(
    level=logging.INFO,
    format=LOG_FORMAT,
    handlers=[
        logging.FileHandler(log_path, encoding='utf-8'),
        logging.StreamHandler()
    ]
)

uvicorn_logger = logging.getLogger("uvicorn")
uvicorn_logger.handlers = logging.getLogger().handlers
uvicorn_logger.setLevel(logging.INFO)

uvicorn_access_logger = logging.getLogger("uvicorn.access")
uvicorn_access_logger.handlers = logging.getLogger().handlers
uvicorn_access_logger.setLevel(logging.INFO)

logger = logging.getLogger("app")
logger.info(f"Logging initialized — saving logs to {log_path}")
