from enum import Enum


class CaseInsensitiveStringEnum(Enum):
    def __eq__(self, other):
        if isinstance(other, str):
            return self.value.lower() == other.lower()
        return super().__eq__(other)  # Default comparison for Enum

    def __str__(self):
        return self.value

    def __hash__(self):
        return hash(self.value.lower())


class AdminState(CaseInsensitiveStringEnum):
    RUN = "run"
    STOP = "stop"
    RESTART = "restart"


class OperState(CaseInsensitiveStringEnum):
    RUNNING = "running"
    IDLE = "idle"
    ERROR = "error"


class Platform(CaseInsensitiveStringEnum):
    ANDROID = "Android"
    IOS = "iOS"
    WEB = "Web"


class ComponentType(CaseInsensitiveStringEnum):
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


class ActionType(CaseInsensitiveStringEnum):
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
