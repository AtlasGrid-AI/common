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
    TEXT_FIELD = "text field"
    TEXT_INPUT = "text input"
    DIALOG = "dialog"
    KEYBOARD = "keyboard"
    ICON = "icon"
    SLIDER = "slider"
    MENU = "menu"
    MENU_ITEM = "menu item"
    NAVIGATION_BAR = "navigation bar"
    TAB_BAR = "tab bar"
    TOOL_BAR = "toolbar"
    SCROLL_VIEW = "scroll view"
    CHECKBOX = "checkbox"
    RADIO_BUTTON = "radio button"
    TOGGLE = "toggle"
    WEB_VIEW = "web view"
    IMAGE = "image"
    PICKER = "picker"
    DATE_PICKER = "date picker"
    PAGE_INDICATOR = "page indicator"
    MAP = "map"
    LIST = "list"


class ActionType(CaseInsensitiveStringEnum):
    TAP = "tap"
    TYPE = "type"
    SWIPE = "swipe"
    WAIT = "wait"
    BACK = "go back"
