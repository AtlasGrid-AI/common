from enum import Enum


class AdminState(Enum):
    RUN = "run"
    STOP = "stop"
    RESTART = "restart"


class OperState(Enum):
    RUNNING = "running"
    IDLE = "idle"
    ERROR = "error"


class Platform(Enum):
    ANDROID = "Android"
    IOS = "iOS"
    WEB = "Web"
