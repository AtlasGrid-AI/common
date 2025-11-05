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
    SEARCH_FIELD = "search_field"
    TEXT_FIELD = "text_field"
    SWITCH = "switch"
    SLIDER = "slider"
    TAB_BAR = "tab_bar"
    ALERT = "alert"
    SCROLL_VIEW = "scroll_view"
    CHECKBOX = "checkbox"
    RADIO_BUTTON = "radio_button"
    MENU = "menu"
    MENU_ITEM = "menu_item"
    PICKER = "picker"
    SEGMENTED_CONTROL = "segmented_control"
    STEPPER = "stepper"
    PAGE_INDICATOR = "page_indicator"
    DATE_PICKER = "date_picker"
    TOOLBAR = "toolbar"
    NAVIGATION_BAR = "navigation_bar"
    WEB_VIEW = "web_view"
    MAP = "map"
    IMAGE = "image"
    ICON = "icon"
    TOGGLE = "toggle"
    KEYBOARD = "keyboard"
