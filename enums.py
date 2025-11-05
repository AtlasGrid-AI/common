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


class ComponentType(Enum):
    BUTTON = "button"
    CELL = "cell"
    LINK = "link"
    SEARCH_FIELD = "search field"
    TEXT_FIELD = "text field"
    SWITCH = "switch"
    SLIDER = "slider"
    TAB_BAR = "tab bar"
    ALERT = "alert"
    SCROLL_VIEW = "scroll view"
    CHECKBOX = "checkbox"
    RADIO_BUTTON = "radio button"
    MENU = "menu"
    MENU_ITEM = "menu item"
    PICKER = "picker"
    SEGMENTED_CONTROL = "segmented control"
    STEPPER = "stepper"
    PAGE_INDICATOR = "page indicator"
    DATE_PICKER = "date picker"
    TOOLBAR = "toolbar"
    NAVIGATION_BAR = "navigation bar"
    WEB_VIEW = "web view"
    MAP = "map"
    IMAGE = "image"
    ICON = "icon"
    TOGGLE = "toggle"
    KEYBOARD = "keyboard"


class ActionType(Enum):
    TAP = "tap"
    SCROLL_VERTICAL = "vertical scroll"
    SCROLL_HORIZONTAL = "horizontal scroll"
    TEXT_INPUT = "text input"
    SWIPE_LEFT = "swipe left"
    SWIPE_RIGHT = "swipe right"
    SWIPE_UP = "swipe up"
    SWIPE_DOWN = "swipe down"
    WAIT = "wait"
    GO_BACK = "go back"
    LONG_PRESS = "long press"
