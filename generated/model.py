import json
from pystorz.internal import constants

# "from pystorz.store import utils",
from pystorz.store import store
from datetime import datetime
from typing import Type


class ScreenMetadata:
    def __init__(self):
        raise Exception("cannot initialize like this. use the factory method")

    def ToDict(self):
        raise Exception("not implemented")

    def FromDict(self, data):
        raise Exception("not implemented")

    def Title(self) -> str:
        raise Exception("not implemented")

    def SetTitle(self, val: str):
        raise Exception("not implemented")

    def Description(self) -> str:
        raise Exception("not implemented")

    def SetDescription(self, val: str):
        raise Exception("not implemented")

    def Tags(self) -> list:
        raise Exception("not implemented")

    def SetTags(self, val: list):
        raise Exception("not implemented")

    def Flow(self) -> str:
        raise Exception("not implemented")

    def SetFlow(self, val: str):
        raise Exception("not implemented")


def ScreenMetadataFactory() -> ScreenMetadata:
    ret = _ScreenMetadata()
    ret.title_ = ""
    ret.description_ = ""
    ret.tags_ = []
    ret.flow_ = ""
    return ret


class _ScreenMetadata(ScreenMetadata):
    def __init__(self):
        self.title_ = ""
        self.description_ = ""
        self.tags_ = []
        self.flow_ = ""

    def SetTitle(self, val):
        self.title_ = str(val)

    def Title(self):
        return self.title_

    def SetDescription(self, val):
        self.description_ = str(val)

    def Description(self):
        return self.description_

    def SetTags(self, val):
        self.tags_ = val

    def Tags(self):
        return self.tags_

    def SetFlow(self, val):
        self.flow_ = str(val)

    def Flow(self):
        return self.flow_

    def FromJson(self, jstr):
        data = json.loads(jstr)
        return self.FromDict(data)

    def ToJson(self):
        return json.dumps(self.ToDict())

    def ToDict(self):
        data = {}
        data["title"] = self.title_
        data["description"] = self.description_
        rawList = []
        for v in self.tags_:
            rawList.append(v)
        data["tags"] = rawList
        data["flow"] = self.flow_
        return data

    def FromDict(self, data):
        for key, rawValue in data.items():
            if rawValue is None:
                continue
            if key == "title":
                self.title_ = rawValue
            if key == "description":
                self.description_ = rawValue
            if key == "tags":
                res = []
                for rw in rawValue:
                    ud = ""
                    ud = rw
                    res.append(ud)
                self.tags_ = res
            if key == "flow":
                self.flow_ = rawValue


class Rectangle:
    def __init__(self):
        raise Exception("cannot initialize like this. use the factory method")

    def ToDict(self):
        raise Exception("not implemented")

    def FromDict(self, data):
        raise Exception("not implemented")

    def X(self) -> int:
        raise Exception("not implemented")

    def SetX(self, val: int):
        raise Exception("not implemented")

    def Y(self) -> int:
        raise Exception("not implemented")

    def SetY(self, val: int):
        raise Exception("not implemented")

    def Width(self) -> int:
        raise Exception("not implemented")

    def SetWidth(self, val: int):
        raise Exception("not implemented")

    def Height(self) -> int:
        raise Exception("not implemented")

    def SetHeight(self, val: int):
        raise Exception("not implemented")

    def CenterX(self) -> int:
        raise Exception("not implemented")

    def SetCenterX(self, val: int):
        raise Exception("not implemented")

    def CenterY(self) -> int:
        raise Exception("not implemented")

    def SetCenterY(self, val: int):
        raise Exception("not implemented")


def RectangleFactory() -> Rectangle:
    ret = _Rectangle()
    ret.x_ = 0
    ret.y_ = 0
    ret.width_ = 0
    ret.height_ = 0
    ret.centerX_ = 0
    ret.centerY_ = 0
    return ret


class _Rectangle(Rectangle):
    def __init__(self):
        self.x_ = 0
        self.y_ = 0
        self.width_ = 0
        self.height_ = 0
        self.centerX_ = 0
        self.centerY_ = 0

    def SetX(self, val):
        self.x_ = int(val)

    def X(self):
        return self.x_

    def SetY(self, val):
        self.y_ = int(val)

    def Y(self):
        return self.y_

    def SetWidth(self, val):
        self.width_ = int(val)

    def Width(self):
        return self.width_

    def SetHeight(self, val):
        self.height_ = int(val)

    def Height(self):
        return self.height_

    def SetCenterX(self, val):
        self.centerX_ = int(val)

    def CenterX(self):
        return self.centerX_

    def SetCenterY(self, val):
        self.centerY_ = int(val)

    def CenterY(self):
        return self.centerY_

    def FromJson(self, jstr):
        data = json.loads(jstr)
        return self.FromDict(data)

    def ToJson(self):
        return json.dumps(self.ToDict())

    def ToDict(self):
        data = {}
        data["x"] = self.x_
        data["y"] = self.y_
        data["width"] = self.width_
        data["height"] = self.height_
        data["centerX"] = self.centerX_
        data["centerY"] = self.centerY_
        return data

    def FromDict(self, data):
        for key, rawValue in data.items():
            if rawValue is None:
                continue
            if key == "x":
                self.x_ = rawValue
            if key == "y":
                self.y_ = rawValue
            if key == "width":
                self.width_ = rawValue
            if key == "height":
                self.height_ = rawValue
            if key == "centerX":
                self.centerX_ = rawValue
            if key == "centerY":
                self.centerY_ = rawValue


class PageNodeAttributes:
    def __init__(self):
        raise Exception("cannot initialize like this. use the factory method")

    def ToDict(self):
        raise Exception("not implemented")

    def FromDict(self, data):
        raise Exception("not implemented")

    def ClassName(self) -> str:
        raise Exception("not implemented")

    def SetClassName(self, val: str):
        raise Exception("not implemented")

    def Classifiers(self) -> list:
        raise Exception("not implemented")

    def SetClassifiers(self, val: list):
        raise Exception("not implemented")

    def ResourceId(self) -> str:
        raise Exception("not implemented")

    def SetResourceId(self, val: str):
        raise Exception("not implemented")

    def Package(self) -> str:
        raise Exception("not implemented")

    def SetPackage(self, val: str):
        raise Exception("not implemented")

    def Text(self) -> str:
        raise Exception("not implemented")

    def SetText(self, val: str):
        raise Exception("not implemented")

    def Rectangle(self) -> Rectangle:
        raise Exception("not implemented")

    def SetRectangle(self, val: Rectangle):
        raise Exception("not implemented")

    def Index(self) -> int:
        raise Exception("not implemented")

    def SetIndex(self, val: int):
        raise Exception("not implemented")

    def IsDisplayed(self) -> bool:
        raise Exception("not implemented")

    def SetIsDisplayed(self, val: bool):
        raise Exception("not implemented")

    def IsEnabled(self) -> bool:
        raise Exception("not implemented")

    def SetIsEnabled(self, val: bool):
        raise Exception("not implemented")

    def IsCheckable(self) -> bool:
        raise Exception("not implemented")

    def SetIsCheckable(self, val: bool):
        raise Exception("not implemented")

    def IsChecked(self) -> bool:
        raise Exception("not implemented")

    def SetIsChecked(self, val: bool):
        raise Exception("not implemented")

    def IsDialog(self) -> bool:
        raise Exception("not implemented")

    def SetIsDialog(self, val: bool):
        raise Exception("not implemented")

    def IsClickable(self) -> bool:
        raise Exception("not implemented")

    def SetIsClickable(self, val: bool):
        raise Exception("not implemented")

    def IsFocusable(self) -> bool:
        raise Exception("not implemented")

    def SetIsFocusable(self, val: bool):
        raise Exception("not implemented")

    def IsFocused(self) -> bool:
        raise Exception("not implemented")

    def SetIsFocused(self, val: bool):
        raise Exception("not implemented")

    def IsLongClickable(self) -> bool:
        raise Exception("not implemented")

    def SetIsLongClickable(self, val: bool):
        raise Exception("not implemented")

    def IsScrollable(self) -> bool:
        raise Exception("not implemented")

    def SetIsScrollable(self, val: bool):
        raise Exception("not implemented")

    def IsSelected(self) -> bool:
        raise Exception("not implemented")

    def SetIsSelected(self, val: bool):
        raise Exception("not implemented")

    def IsDismissable(self) -> bool:
        raise Exception("not implemented")

    def SetIsDismissable(self, val: bool):
        raise Exception("not implemented")

    def HasClickables(self) -> bool:
        raise Exception("not implemented")

    def SetHasClickables(self, val: bool):
        raise Exception("not implemented")


def PageNodeAttributesFactory() -> PageNodeAttributes:
    ret = _PageNodeAttributes()
    ret.className_ = ""
    ret.classifiers_ = []
    ret.resourceId_ = ""
    ret.package_ = ""
    ret.text_ = ""
    ret.rectangle_ = RectangleFactory()
    ret.index_ = 0
    ret.isDisplayed_ = False
    ret.isEnabled_ = False
    ret.isCheckable_ = False
    ret.isChecked_ = False
    ret.isDialog_ = False
    ret.isClickable_ = False
    ret.isFocusable_ = False
    ret.isFocused_ = False
    ret.isLongClickable_ = False
    ret.isScrollable_ = False
    ret.isSelected_ = False
    ret.isDismissable_ = False
    ret.hasClickables_ = False
    return ret


class _PageNodeAttributes(PageNodeAttributes):
    def __init__(self):
        self.className_ = ""
        self.classifiers_ = []
        self.resourceId_ = ""
        self.package_ = ""
        self.text_ = ""
        self.rectangle_ = RectangleFactory()
        self.index_ = 0
        self.isDisplayed_ = False
        self.isEnabled_ = False
        self.isCheckable_ = False
        self.isChecked_ = False
        self.isDialog_ = False
        self.isClickable_ = False
        self.isFocusable_ = False
        self.isFocused_ = False
        self.isLongClickable_ = False
        self.isScrollable_ = False
        self.isSelected_ = False
        self.isDismissable_ = False
        self.hasClickables_ = False

    def SetClassName(self, val):
        self.className_ = str(val)

    def ClassName(self):
        return self.className_

    def SetClassifiers(self, val):
        self.classifiers_ = val

    def Classifiers(self):
        return self.classifiers_

    def SetResourceId(self, val):
        self.resourceId_ = str(val)

    def ResourceId(self):
        return self.resourceId_

    def SetPackage(self, val):
        self.package_ = str(val)

    def Package(self):
        return self.package_

    def SetText(self, val):
        self.text_ = str(val)

    def Text(self):
        return self.text_

    def SetRectangle(self, val):
        self.rectangle_ = val

    def Rectangle(self):
        return self.rectangle_

    def SetIndex(self, val):
        self.index_ = int(val)

    def Index(self):
        return self.index_

    def SetIsDisplayed(self, val):
        self.isDisplayed_ = bool(val)

    def IsDisplayed(self):
        return self.isDisplayed_

    def SetIsEnabled(self, val):
        self.isEnabled_ = bool(val)

    def IsEnabled(self):
        return self.isEnabled_

    def SetIsCheckable(self, val):
        self.isCheckable_ = bool(val)

    def IsCheckable(self):
        return self.isCheckable_

    def SetIsChecked(self, val):
        self.isChecked_ = bool(val)

    def IsChecked(self):
        return self.isChecked_

    def SetIsDialog(self, val):
        self.isDialog_ = bool(val)

    def IsDialog(self):
        return self.isDialog_

    def SetIsClickable(self, val):
        self.isClickable_ = bool(val)

    def IsClickable(self):
        return self.isClickable_

    def SetIsFocusable(self, val):
        self.isFocusable_ = bool(val)

    def IsFocusable(self):
        return self.isFocusable_

    def SetIsFocused(self, val):
        self.isFocused_ = bool(val)

    def IsFocused(self):
        return self.isFocused_

    def SetIsLongClickable(self, val):
        self.isLongClickable_ = bool(val)

    def IsLongClickable(self):
        return self.isLongClickable_

    def SetIsScrollable(self, val):
        self.isScrollable_ = bool(val)

    def IsScrollable(self):
        return self.isScrollable_

    def SetIsSelected(self, val):
        self.isSelected_ = bool(val)

    def IsSelected(self):
        return self.isSelected_

    def SetIsDismissable(self, val):
        self.isDismissable_ = bool(val)

    def IsDismissable(self):
        return self.isDismissable_

    def SetHasClickables(self, val):
        self.hasClickables_ = bool(val)

    def HasClickables(self):
        return self.hasClickables_

    def FromJson(self, jstr):
        data = json.loads(jstr)
        return self.FromDict(data)

    def ToJson(self):
        return json.dumps(self.ToDict())

    def ToDict(self):
        data = {}
        data["className"] = self.className_
        rawList = []
        for v in self.classifiers_:
            rawList.append(v)
        data["classifiers"] = rawList
        data["resourceId"] = self.resourceId_
        data["package"] = self.package_
        data["text"] = self.text_
        # if self.rectangle_ is not None:
        data["rectangle"] = self.rectangle_.ToDict()
        data["index"] = self.index_
        data["isDisplayed"] = self.isDisplayed_
        data["isEnabled"] = self.isEnabled_
        data["isCheckable"] = self.isCheckable_
        data["isChecked"] = self.isChecked_
        data["isDialog"] = self.isDialog_
        data["isClickable"] = self.isClickable_
        data["isFocusable"] = self.isFocusable_
        data["isFocused"] = self.isFocused_
        data["isLongClickable"] = self.isLongClickable_
        data["isScrollable"] = self.isScrollable_
        data["isSelected"] = self.isSelected_
        data["isDismissable"] = self.isDismissable_
        data["hasClickables"] = self.hasClickables_
        return data

    def FromDict(self, data):
        for key, rawValue in data.items():
            if rawValue is None:
                continue
            if key == "className":
                self.className_ = rawValue
            if key == "classifiers":
                res = []
                for rw in rawValue:
                    ud = ""
                    ud = rw
                    res.append(ud)
                self.classifiers_ = res
            if key == "resourceId":
                self.resourceId_ = rawValue
            if key == "package":
                self.package_ = rawValue
            if key == "text":
                self.text_ = rawValue
            if key == "rectangle":
                self.rectangle_.FromDict(rawValue)
            if key == "index":
                self.index_ = rawValue
            if key == "isDisplayed":
                self.isDisplayed_ = rawValue
            if key == "isEnabled":
                self.isEnabled_ = rawValue
            if key == "isCheckable":
                self.isCheckable_ = rawValue
            if key == "isChecked":
                self.isChecked_ = rawValue
            if key == "isDialog":
                self.isDialog_ = rawValue
            if key == "isClickable":
                self.isClickable_ = rawValue
            if key == "isFocusable":
                self.isFocusable_ = rawValue
            if key == "isFocused":
                self.isFocused_ = rawValue
            if key == "isLongClickable":
                self.isLongClickable_ = rawValue
            if key == "isScrollable":
                self.isScrollable_ = rawValue
            if key == "isSelected":
                self.isSelected_ = rawValue
            if key == "isDismissable":
                self.isDismissable_ = rawValue
            if key == "hasClickables":
                self.hasClickables_ = rawValue


class CrawlerConfiguration:
    def __init__(self):
        raise Exception("cannot initialize like this. use the factory method")

    def ToDict(self):
        raise Exception("not implemented")

    def FromDict(self, data):
        raise Exception("not implemented")

    def ServerUrl(self) -> str:
        raise Exception("not implemented")

    def SetServerUrl(self, val: str):
        raise Exception("not implemented")

    def DirectConnection(self) -> bool:
        raise Exception("not implemented")

    def SetDirectConnection(self, val: bool):
        raise Exception("not implemented")

    def KeepAlive(self) -> bool:
        raise Exception("not implemented")

    def SetKeepAlive(self, val: bool):
        raise Exception("not implemented")

    def IgnoreCertificates(self) -> bool:
        raise Exception("not implemented")

    def SetIgnoreCertificates(self, val: bool):
        raise Exception("not implemented")

    def PlatformVersion(self) -> str:
        raise Exception("not implemented")

    def SetPlatformVersion(self, val: str):
        raise Exception("not implemented")

    def DeviceId(self) -> str:
        raise Exception("not implemented")

    def SetDeviceId(self, val: str):
        raise Exception("not implemented")


def CrawlerConfigurationFactory() -> CrawlerConfiguration:
    ret = _CrawlerConfiguration()
    ret.serverUrl_ = ""
    ret.directConnection_ = False
    ret.keepAlive_ = False
    ret.ignoreCertificates_ = False
    ret.platformVersion_ = ""
    ret.deviceId_ = ""
    return ret


class _CrawlerConfiguration(CrawlerConfiguration):
    def __init__(self):
        self.serverUrl_ = ""
        self.directConnection_ = False
        self.keepAlive_ = False
        self.ignoreCertificates_ = False
        self.platformVersion_ = ""
        self.deviceId_ = ""

    def SetServerUrl(self, val):
        self.serverUrl_ = str(val)

    def ServerUrl(self):
        return self.serverUrl_

    def SetDirectConnection(self, val):
        self.directConnection_ = bool(val)

    def DirectConnection(self):
        return self.directConnection_

    def SetKeepAlive(self, val):
        self.keepAlive_ = bool(val)

    def KeepAlive(self):
        return self.keepAlive_

    def SetIgnoreCertificates(self, val):
        self.ignoreCertificates_ = bool(val)

    def IgnoreCertificates(self):
        return self.ignoreCertificates_

    def SetPlatformVersion(self, val):
        self.platformVersion_ = str(val)

    def PlatformVersion(self):
        return self.platformVersion_

    def SetDeviceId(self, val):
        self.deviceId_ = str(val)

    def DeviceId(self):
        return self.deviceId_

    def FromJson(self, jstr):
        data = json.loads(jstr)
        return self.FromDict(data)

    def ToJson(self):
        return json.dumps(self.ToDict())

    def ToDict(self):
        data = {}
        data["serverUrl"] = self.serverUrl_
        data["directConnection"] = self.directConnection_
        data["keepAlive"] = self.keepAlive_
        data["ignoreCertificates"] = self.ignoreCertificates_
        data["platformVersion"] = self.platformVersion_
        data["deviceId"] = self.deviceId_
        return data

    def FromDict(self, data):
        for key, rawValue in data.items():
            if rawValue is None:
                continue
            if key == "serverUrl":
                self.serverUrl_ = rawValue
            if key == "directConnection":
                self.directConnection_ = rawValue
            if key == "keepAlive":
                self.keepAlive_ = rawValue
            if key == "ignoreCertificates":
                self.ignoreCertificates_ = rawValue
            if key == "platformVersion":
                self.platformVersion_ = rawValue
            if key == "deviceId":
                self.deviceId_ = rawValue


class ScreenIdentifiers:
    def __init__(self):
        raise Exception("cannot initialize like this. use the factory method")

    def ToDict(self):
        raise Exception("not implemented")

    def FromDict(self, data):
        raise Exception("not implemented")

    def First(self) -> str:
        raise Exception("not implemented")

    def SetFirst(self, val: str):
        raise Exception("not implemented")

    def Current(self) -> str:
        raise Exception("not implemented")

    def SetCurrent(self, val: str):
        raise Exception("not implemented")

    def Previous(self) -> str:
        raise Exception("not implemented")

    def SetPrevious(self, val: str):
        raise Exception("not implemented")


def ScreenIdentifiersFactory() -> ScreenIdentifiers:
    ret = _ScreenIdentifiers()
    ret.first_ = ""
    ret.current_ = ""
    ret.previous_ = ""
    return ret


class _ScreenIdentifiers(ScreenIdentifiers):
    def __init__(self):
        self.first_ = ""
        self.current_ = ""
        self.previous_ = ""

    def SetFirst(self, val):
        self.first_ = str(val)

    def First(self):
        return self.first_

    def SetCurrent(self, val):
        self.current_ = str(val)

    def Current(self):
        return self.current_

    def SetPrevious(self, val):
        self.previous_ = str(val)

    def Previous(self):
        return self.previous_

    def FromJson(self, jstr):
        data = json.loads(jstr)
        return self.FromDict(data)

    def ToJson(self):
        return json.dumps(self.ToDict())

    def ToDict(self):
        data = {}
        data["first"] = self.first_
        data["current"] = self.current_
        data["previous"] = self.previous_
        return data

    def FromDict(self, data):
        for key, rawValue in data.items():
            if rawValue is None:
                continue
            if key == "first":
                self.first_ = rawValue
            if key == "current":
                self.current_ = rawValue
            if key == "previous":
                self.previous_ = rawValue


class ActionArguments:
    def __init__(self):
        raise Exception("cannot initialize like this. use the factory method")

    def ToDict(self):
        raise Exception("not implemented")

    def FromDict(self, data):
        raise Exception("not implemented")

    def Integers(self) -> dict:
        raise Exception("not implemented")

    def SetIntegers(self, val: dict):
        raise Exception("not implemented")

    def Strings(self) -> dict:
        raise Exception("not implemented")

    def SetStrings(self, val: dict):
        raise Exception("not implemented")


def ActionArgumentsFactory() -> ActionArguments:
    ret = _ActionArguments()
    ret.integers_ = {}
    ret.strings_ = {}
    return ret


class _ActionArguments(ActionArguments):
    def __init__(self):
        self.integers_ = {}
        self.strings_ = {}

    def SetIntegers(self, val):
        self.integers_ = val

    def Integers(self):
        return self.integers_

    def SetStrings(self, val):
        self.strings_ = val

    def Strings(self):
        return self.strings_

    def FromJson(self, jstr):
        data = json.loads(jstr)
        return self.FromDict(data)

    def ToJson(self):
        return json.dumps(self.ToDict())

    def ToDict(self):
        data = {}
        rawSubmap = {}
        for k, v in self.integers_.items():
            rawSubmap[k] = v
        data["integers"] = rawSubmap
        rawSubmap = {}
        for k, v in self.strings_.items():
            rawSubmap[k] = v
        data["strings"] = rawSubmap
        return data

    def FromDict(self, data):
        for key, rawValue in data.items():
            if rawValue is None:
                continue
            if key == "integers":
                res = {}
                for rk, rw in rawValue.items():
                    ud = 0
                    ud = rw
                    res[rk] = ud
                self.integers_ = res
            if key == "strings":
                res = {}
                for rk, rw in rawValue.items():
                    ud = ""
                    ud = rw
                    res[rk] = ud
                self.strings_ = res


class Component:
    def __init__(self):
        raise Exception("cannot initialize like this. use the factory method")

    def ToDict(self):
        raise Exception("not implemented")

    def FromDict(self, data):
        raise Exception("not implemented")

    def Identifier(self) -> str:
        raise Exception("not implemented")

    def SetIdentifier(self, val: str):
        raise Exception("not implemented")

    def Rectangle(self) -> Rectangle:
        raise Exception("not implemented")

    def SetRectangle(self, val: Rectangle):
        raise Exception("not implemented")

    def Type(self) -> str:
        raise Exception("not implemented")

    def SetType(self, val: str):
        raise Exception("not implemented")

    def Text(self) -> str:
        raise Exception("not implemented")

    def SetText(self, val: str):
        raise Exception("not implemented")


def ComponentFactory() -> Component:
    ret = _Component()
    ret.identifier_ = ""
    ret.rectangle_ = RectangleFactory()
    ret.type_ = ""
    ret.text_ = ""
    return ret


class _Component(Component):
    def __init__(self):
        self.identifier_ = ""
        self.rectangle_ = RectangleFactory()
        self.type_ = ""
        self.text_ = ""

    def SetIdentifier(self, val):
        self.identifier_ = str(val)

    def Identifier(self):
        return self.identifier_

    def SetRectangle(self, val):
        self.rectangle_ = val

    def Rectangle(self):
        return self.rectangle_

    def SetType(self, val):
        self.type_ = str(val)

    def Type(self):
        return self.type_

    def SetText(self, val):
        self.text_ = str(val)

    def Text(self):
        return self.text_

    def FromJson(self, jstr):
        data = json.loads(jstr)
        return self.FromDict(data)

    def ToJson(self):
        return json.dumps(self.ToDict())

    def ToDict(self):
        data = {}
        data["identifier"] = self.identifier_
        # if self.rectangle_ is not None:
        data["rectangle"] = self.rectangle_.ToDict()
        data["type"] = self.type_
        data["text"] = self.text_
        return data

    def FromDict(self, data):
        for key, rawValue in data.items():
            if rawValue is None:
                continue
            if key == "identifier":
                self.identifier_ = rawValue
            if key == "rectangle":
                self.rectangle_.FromDict(rawValue)
            if key == "type":
                self.type_ = rawValue
            if key == "text":
                self.text_ = rawValue


class JourneyConfiguration:
    def __init__(self):
        raise Exception("cannot initialize like this. use the factory method")

    def ToDict(self):
        raise Exception("not implemented")

    def FromDict(self, data):
        raise Exception("not implemented")

    def TextFields(self) -> dict:
        raise Exception("not implemented")

    def SetTextFields(self, val: dict):
        raise Exception("not implemented")

    def AvoidComponents(self) -> list:
        raise Exception("not implemented")

    def SetAvoidComponents(self, val: list):
        raise Exception("not implemented")

    def DeprioritizeComponents(self) -> list:
        raise Exception("not implemented")

    def SetDeprioritizeComponents(self, val: list):
        raise Exception("not implemented")

    def AdditionalFlows(self) -> dict:
        raise Exception("not implemented")

    def SetAdditionalFlows(self, val: dict):
        raise Exception("not implemented")

    def StepIntervalMs(self) -> int:
        raise Exception("not implemented")

    def SetStepIntervalMs(self, val: int):
        raise Exception("not implemented")

    def MaxStepCount(self) -> int:
        raise Exception("not implemented")

    def SetMaxStepCount(self, val: int):
        raise Exception("not implemented")

    def Crawler(self) -> CrawlerConfiguration:
        raise Exception("not implemented")

    def SetCrawler(self, val: CrawlerConfiguration):
        raise Exception("not implemented")


def JourneyConfigurationFactory() -> JourneyConfiguration:
    ret = _JourneyConfiguration()
    ret.textFields_ = {}
    ret.avoidComponents_ = []
    ret.deprioritizeComponents_ = []
    ret.additionalFlows_ = {}
    ret.stepIntervalMs_ = 0
    ret.maxStepCount_ = 0
    ret.crawler_ = CrawlerConfigurationFactory()
    return ret


class _JourneyConfiguration(JourneyConfiguration):
    def __init__(self):
        self.textFields_ = {}
        self.avoidComponents_ = []
        self.deprioritizeComponents_ = []
        self.additionalFlows_ = {}
        self.stepIntervalMs_ = 0
        self.maxStepCount_ = 0
        self.crawler_ = CrawlerConfigurationFactory()

    def SetTextFields(self, val):
        self.textFields_ = val

    def TextFields(self):
        return self.textFields_

    def SetAvoidComponents(self, val):
        self.avoidComponents_ = val

    def AvoidComponents(self):
        return self.avoidComponents_

    def SetDeprioritizeComponents(self, val):
        self.deprioritizeComponents_ = val

    def DeprioritizeComponents(self):
        return self.deprioritizeComponents_

    def SetAdditionalFlows(self, val):
        self.additionalFlows_ = val

    def AdditionalFlows(self):
        return self.additionalFlows_

    def SetStepIntervalMs(self, val):
        self.stepIntervalMs_ = int(val)

    def StepIntervalMs(self):
        return self.stepIntervalMs_

    def SetMaxStepCount(self, val):
        self.maxStepCount_ = int(val)

    def MaxStepCount(self):
        return self.maxStepCount_

    def SetCrawler(self, val):
        self.crawler_ = val

    def Crawler(self):
        return self.crawler_

    def FromJson(self, jstr):
        data = json.loads(jstr)
        return self.FromDict(data)

    def ToJson(self):
        return json.dumps(self.ToDict())

    def ToDict(self):
        data = {}
        rawSubmap = {}
        for k, v in self.textFields_.items():
            rawSubmap[k] = v
        data["textFields"] = rawSubmap
        rawList = []
        for v in self.avoidComponents_:
            rawList.append(v)
        data["avoidComponents"] = rawList
        rawList = []
        for v in self.deprioritizeComponents_:
            rawList.append(v)
        data["deprioritizeComponents"] = rawList
        rawSubmap = {}
        for k, v in self.additionalFlows_.items():
            rawSubmap[k] = v
        data["additionalFlows"] = rawSubmap
        data["stepIntervalMs"] = self.stepIntervalMs_
        data["maxStepCount"] = self.maxStepCount_
        # if self.crawler_ is not None:
        data["crawler"] = self.crawler_.ToDict()
        return data

    def FromDict(self, data):
        for key, rawValue in data.items():
            if rawValue is None:
                continue
            if key == "textFields":
                res = {}
                for rk, rw in rawValue.items():
                    ud = ""
                    ud = rw
                    res[rk] = ud
                self.textFields_ = res
            if key == "avoidComponents":
                res = []
                for rw in rawValue:
                    ud = ""
                    ud = rw
                    res.append(ud)
                self.avoidComponents_ = res
            if key == "deprioritizeComponents":
                res = []
                for rw in rawValue:
                    ud = ""
                    ud = rw
                    res.append(ud)
                self.deprioritizeComponents_ = res
            if key == "additionalFlows":
                res = {}
                for rk, rw in rawValue.items():
                    ud = ""
                    ud = rw
                    res[rk] = ud
                self.additionalFlows_ = res
            if key == "stepIntervalMs":
                self.stepIntervalMs_ = rawValue
            if key == "maxStepCount":
                self.maxStepCount_ = rawValue
            if key == "crawler":
                self.crawler_.FromDict(rawValue)


class Action:
    def __init__(self):
        raise Exception("cannot initialize like this. use the factory method")

    def ToDict(self):
        raise Exception("not implemented")

    def FromDict(self, data):
        raise Exception("not implemented")

    def GroupIdentifier(self) -> str:
        raise Exception("not implemented")

    def SetGroupIdentifier(self, val: str):
        raise Exception("not implemented")

    def ScreenIdentifier(self) -> str:
        raise Exception("not implemented")

    def SetScreenIdentifier(self, val: str):
        raise Exception("not implemented")

    def ComponentIdentifier(self) -> str:
        raise Exception("not implemented")

    def SetComponentIdentifier(self, val: str):
        raise Exception("not implemented")

    def ActionType(self) -> str:
        raise Exception("not implemented")

    def SetActionType(self, val: str):
        raise Exception("not implemented")

    def Timestamp(self) -> datetime:
        raise Exception("not implemented")

    def SetTimestamp(self, val: datetime):
        raise Exception("not implemented")

    def Arguments(self) -> ActionArguments:
        raise Exception("not implemented")

    def SetArguments(self, val: ActionArguments):
        raise Exception("not implemented")

    def ExpectedScreenIdentifier(self) -> str:
        raise Exception("not implemented")

    def SetExpectedScreenIdentifier(self, val: str):
        raise Exception("not implemented")

    def ErrorMessage(self) -> str:
        raise Exception("not implemented")

    def SetErrorMessage(self, val: str):
        raise Exception("not implemented")


def ActionFactory() -> Action:
    ret = _Action()
    ret.groupIdentifier_ = ""
    ret.screenIdentifier_ = ""
    ret.componentIdentifier_ = ""
    ret.actionType_ = ""
    ret.timestamp_ = "0001-01-01T00:00:00.000000Z"
    ret.arguments_ = ActionArgumentsFactory()
    ret.expectedScreenIdentifier_ = ""
    ret.errorMessage_ = ""
    return ret


class _Action(Action):
    def __init__(self):
        self.groupIdentifier_ = ""
        self.screenIdentifier_ = ""
        self.componentIdentifier_ = ""
        self.actionType_ = ""
        self.timestamp_ = "0001-01-01T00:00:00.000000Z"
        self.arguments_ = ActionArgumentsFactory()
        self.expectedScreenIdentifier_ = ""
        self.errorMessage_ = ""

    def SetGroupIdentifier(self, val):
        self.groupIdentifier_ = str(val)

    def GroupIdentifier(self):
        return self.groupIdentifier_

    def SetScreenIdentifier(self, val):
        self.screenIdentifier_ = str(val)

    def ScreenIdentifier(self):
        return self.screenIdentifier_

    def SetComponentIdentifier(self, val):
        self.componentIdentifier_ = str(val)

    def ComponentIdentifier(self):
        return self.componentIdentifier_

    def SetActionType(self, val):
        self.actionType_ = str(val)

    def ActionType(self):
        return self.actionType_

    def SetTimestamp(self, val):
        self.timestamp_ = store.datetime_string(val)

    def Timestamp(self):
        return store.datetime_parse(self.timestamp_)

    def SetArguments(self, val):
        self.arguments_ = val

    def Arguments(self):
        return self.arguments_

    def SetExpectedScreenIdentifier(self, val):
        self.expectedScreenIdentifier_ = str(val)

    def ExpectedScreenIdentifier(self):
        return self.expectedScreenIdentifier_

    def SetErrorMessage(self, val):
        self.errorMessage_ = str(val)

    def ErrorMessage(self):
        return self.errorMessage_

    def FromJson(self, jstr):
        data = json.loads(jstr)
        return self.FromDict(data)

    def ToJson(self):
        return json.dumps(self.ToDict())

    def ToDict(self):
        data = {}
        data["groupIdentifier"] = self.groupIdentifier_
        data["screenIdentifier"] = self.screenIdentifier_
        data["componentIdentifier"] = self.componentIdentifier_
        data["actionType"] = self.actionType_
        data["timestamp"] = self.timestamp_
        # if self.arguments_ is not None:
        data["arguments"] = self.arguments_.ToDict()
        data["expectedScreenIdentifier"] = self.expectedScreenIdentifier_
        data["errorMessage"] = self.errorMessage_
        return data

    def FromDict(self, data):
        for key, rawValue in data.items():
            if rawValue is None:
                continue
            if key == "groupIdentifier":
                self.groupIdentifier_ = rawValue
            if key == "screenIdentifier":
                self.screenIdentifier_ = rawValue
            if key == "componentIdentifier":
                self.componentIdentifier_ = rawValue
            if key == "actionType":
                self.actionType_ = rawValue
            if key == "timestamp":
                self.timestamp_ = rawValue
            if key == "arguments":
                self.arguments_.FromDict(rawValue)
            if key == "expectedScreenIdentifier":
                self.expectedScreenIdentifier_ = rawValue
            if key == "errorMessage":
                self.errorMessage_ = rawValue


class Edge:
    def __init__(self):
        raise Exception("cannot initialize like this. use the factory method")

    def ToDict(self):
        raise Exception("not implemented")

    def FromDict(self, data):
        raise Exception("not implemented")

    def TargetScreenIdentifier(self) -> str:
        raise Exception("not implemented")

    def SetTargetScreenIdentifier(self, val: str):
        raise Exception("not implemented")

    def Component(self) -> Component:
        raise Exception("not implemented")

    def SetComponent(self, val: Component):
        raise Exception("not implemented")

    def Action(self) -> Action:
        raise Exception("not implemented")

    def SetAction(self, val: Action):
        raise Exception("not implemented")

    def Expired(self) -> bool:
        raise Exception("not implemented")

    def SetExpired(self, val: bool):
        raise Exception("not implemented")


def EdgeFactory() -> Edge:
    ret = _Edge()
    ret.targetScreenIdentifier_ = ""
    ret.component_ = ComponentFactory()
    ret.action_ = ActionFactory()
    ret.expired_ = False
    return ret


class _Edge(Edge):
    def __init__(self):
        self.targetScreenIdentifier_ = ""
        self.component_ = ComponentFactory()
        self.action_ = ActionFactory()
        self.expired_ = False

    def SetTargetScreenIdentifier(self, val):
        self.targetScreenIdentifier_ = str(val)

    def TargetScreenIdentifier(self):
        return self.targetScreenIdentifier_

    def SetComponent(self, val):
        self.component_ = val

    def Component(self):
        return self.component_

    def SetAction(self, val):
        self.action_ = val

    def Action(self):
        return self.action_

    def SetExpired(self, val):
        self.expired_ = bool(val)

    def Expired(self):
        return self.expired_

    def FromJson(self, jstr):
        data = json.loads(jstr)
        return self.FromDict(data)

    def ToJson(self):
        return json.dumps(self.ToDict())

    def ToDict(self):
        data = {}
        data["targetScreenIdentifier"] = self.targetScreenIdentifier_
        # if self.component_ is not None:
        data["component"] = self.component_.ToDict()
        # if self.action_ is not None:
        data["action"] = self.action_.ToDict()
        data["expired"] = self.expired_
        return data

    def FromDict(self, data):
        for key, rawValue in data.items():
            if rawValue is None:
                continue
            if key == "targetScreenIdentifier":
                self.targetScreenIdentifier_ = rawValue
            if key == "component":
                self.component_.FromDict(rawValue)
            if key == "action":
                self.action_.FromDict(rawValue)
            if key == "expired":
                self.expired_ = rawValue


class ScreenContent:
    def __init__(self):
        raise Exception("cannot initialize like this. use the factory method")

    def ToDict(self):
        raise Exception("not implemented")

    def FromDict(self, data):
        raise Exception("not implemented")

    def Components(self) -> list:
        raise Exception("not implemented")

    def SetComponents(self, val: list):
        raise Exception("not implemented")

    def Text(self) -> list:
        raise Exception("not implemented")

    def SetText(self, val: list):
        raise Exception("not implemented")


def ScreenContentFactory() -> ScreenContent:
    ret = _ScreenContent()
    ret.components_ = []
    ret.text_ = []
    return ret


class _ScreenContent(ScreenContent):
    def __init__(self):
        self.components_ = []
        self.text_ = []

    def SetComponents(self, val):
        self.components_ = val

    def Components(self):
        return self.components_

    def SetText(self, val):
        self.text_ = val

    def Text(self):
        return self.text_

    def FromJson(self, jstr):
        data = json.loads(jstr)
        return self.FromDict(data)

    def ToJson(self):
        return json.dumps(self.ToDict())

    def ToDict(self):
        data = {}
        rawList = []
        for v in self.components_:
            rawList.append(v.ToDict())
        data["components"] = rawList
        rawList = []
        for v in self.text_:
            rawList.append(v)
        data["text"] = rawList
        return data

    def FromDict(self, data):
        for key, rawValue in data.items():
            if rawValue is None:
                continue
            if key == "components":
                res = []
                for rw in rawValue:
                    ud = ComponentFactory()
                    ud.FromDict(rw)
                    res.append(ud)
                self.components_ = res
            if key == "text":
                res = []
                for rw in rawValue:
                    ud = ""
                    ud = rw
                    res.append(ud)
                self.text_ = res


class PageNode:
    def __init__(self):
        raise Exception("cannot initialize like this. use the factory method")

    def ToDict(self):
        raise Exception("not implemented")

    def FromDict(self, data):
        raise Exception("not implemented")

    def Identifier(self) -> str:
        raise Exception("not implemented")

    def SetIdentifier(self, val: str):
        raise Exception("not implemented")

    def Parent(self) -> str:
        raise Exception("not implemented")

    def SetParent(self, val: str):
        raise Exception("not implemented")

    def Children(self) -> list:
        raise Exception("not implemented")

    def SetChildren(self, val: list):
        raise Exception("not implemented")

    def Attributes(self) -> PageNodeAttributes:
        raise Exception("not implemented")

    def SetAttributes(self, val: PageNodeAttributes):
        raise Exception("not implemented")

    def Hash(self) -> str:
        raise Exception("not implemented")

    def SetHash(self, val: str):
        raise Exception("not implemented")


def PageNodeFactory() -> PageNode:
    ret = _PageNode()
    ret.identifier_ = ""
    ret.parent_ = ""
    ret.children_ = []
    ret.attributes_ = PageNodeAttributesFactory()
    ret.hash_ = ""
    return ret


class _PageNode(PageNode):
    def __init__(self):
        self.identifier_ = ""
        self.parent_ = ""
        self.children_ = []
        self.attributes_ = PageNodeAttributesFactory()
        self.hash_ = ""

    def SetIdentifier(self, val):
        self.identifier_ = str(val)

    def Identifier(self):
        return self.identifier_

    def SetParent(self, val):
        self.parent_ = str(val)

    def Parent(self):
        return self.parent_

    def SetChildren(self, val):
        self.children_ = val

    def Children(self):
        return self.children_

    def SetAttributes(self, val):
        self.attributes_ = val

    def Attributes(self):
        return self.attributes_

    def SetHash(self, val):
        self.hash_ = str(val)

    def Hash(self):
        return self.hash_

    def FromJson(self, jstr):
        data = json.loads(jstr)
        return self.FromDict(data)

    def ToJson(self):
        return json.dumps(self.ToDict())

    def ToDict(self):
        data = {}
        data["identifier"] = self.identifier_
        data["parent"] = self.parent_
        rawList = []
        for v in self.children_:
            rawList.append(v.ToDict())
        data["children"] = rawList
        # if self.attributes_ is not None:
        data["attributes"] = self.attributes_.ToDict()
        data["hash"] = self.hash_
        return data

    def FromDict(self, data):
        for key, rawValue in data.items():
            if rawValue is None:
                continue
            if key == "identifier":
                self.identifier_ = rawValue
            if key == "parent":
                self.parent_ = rawValue
            if key == "children":
                res = []
                for rw in rawValue:
                    ud = PageNodeFactory()
                    ud.FromDict(rw)
                    res.append(ud)
                self.children_ = res
            if key == "attributes":
                self.attributes_.FromDict(rawValue)
            if key == "hash":
                self.hash_ = rawValue


class JourneyExternal:
    def __init__(self):
        raise Exception("cannot initialize like this. use the factory method")

    def ToDict(self):
        raise Exception("not implemented")

    def FromDict(self, data):
        raise Exception("not implemented")

    def Name(self) -> str:
        raise Exception("not implemented")

    def SetName(self, val: str):
        raise Exception("not implemented")

    def Atlas(self) -> str:
        raise Exception("not implemented")

    def SetAtlas(self, val: str):
        raise Exception("not implemented")

    def Owner(self) -> str:
        raise Exception("not implemented")

    def SetOwner(self, val: str):
        raise Exception("not implemented")

    def Description(self) -> str:
        raise Exception("not implemented")

    def SetDescription(self, val: str):
        raise Exception("not implemented")

    def Platform(self) -> str:
        raise Exception("not implemented")

    def SetPlatform(self, val: str):
        raise Exception("not implemented")

    def AdminSt(self) -> str:
        raise Exception("not implemented")

    def SetAdminSt(self, val: str):
        raise Exception("not implemented")

    def Config(self) -> JourneyConfiguration:
        raise Exception("not implemented")

    def SetConfig(self, val: JourneyConfiguration):
        raise Exception("not implemented")

    def Deleted(self) -> bool:
        raise Exception("not implemented")

    def SetDeleted(self, val: bool):
        raise Exception("not implemented")


def JourneyExternalFactory() -> JourneyExternal:
    ret = _JourneyExternal()
    ret.name_ = ""
    ret.atlas_ = ""
    ret.owner_ = ""
    ret.description_ = ""
    ret.platform_ = ""
    ret.adminSt_ = ""
    ret.config_ = JourneyConfigurationFactory()
    ret.deleted_ = False
    return ret


class _JourneyExternal(JourneyExternal):
    def __init__(self):
        self.name_ = ""
        self.atlas_ = ""
        self.owner_ = ""
        self.description_ = ""
        self.platform_ = ""
        self.adminSt_ = ""
        self.config_ = JourneyConfigurationFactory()
        self.deleted_ = False

    def SetName(self, val):
        self.name_ = str(val)

    def Name(self):
        return self.name_

    def SetAtlas(self, val):
        self.atlas_ = str(val)

    def Atlas(self):
        return self.atlas_

    def SetOwner(self, val):
        self.owner_ = str(val)

    def Owner(self):
        return self.owner_

    def SetDescription(self, val):
        self.description_ = str(val)

    def Description(self):
        return self.description_

    def SetPlatform(self, val):
        self.platform_ = str(val)

    def Platform(self):
        return self.platform_

    def SetAdminSt(self, val):
        self.adminSt_ = str(val)

    def AdminSt(self):
        return self.adminSt_

    def SetConfig(self, val):
        self.config_ = val

    def Config(self):
        return self.config_

    def SetDeleted(self, val):
        self.deleted_ = bool(val)

    def Deleted(self):
        return self.deleted_

    def FromJson(self, jstr):
        data = json.loads(jstr)
        return self.FromDict(data)

    def ToJson(self):
        return json.dumps(self.ToDict())

    def ToDict(self):
        data = {}
        data["name"] = self.name_
        data["atlas"] = self.atlas_
        data["owner"] = self.owner_
        data["description"] = self.description_
        data["platform"] = self.platform_
        data["adminSt"] = self.adminSt_
        # if self.config_ is not None:
        data["config"] = self.config_.ToDict()
        data["deleted"] = self.deleted_
        return data

    def FromDict(self, data):
        for key, rawValue in data.items():
            if rawValue is None:
                continue
            if key == "name":
                self.name_ = rawValue
            if key == "atlas":
                self.atlas_ = rawValue
            if key == "owner":
                self.owner_ = rawValue
            if key == "description":
                self.description_ = rawValue
            if key == "platform":
                self.platform_ = rawValue
            if key == "adminSt":
                self.adminSt_ = rawValue
            if key == "config":
                self.config_.FromDict(rawValue)
            if key == "deleted":
                self.deleted_ = rawValue


class JourneyInternal:
    def __init__(self):
        raise Exception("cannot initialize like this. use the factory method")

    def ToDict(self):
        raise Exception("not implemented")

    def FromDict(self, data):
        raise Exception("not implemented")

    def OperSt(self) -> str:
        raise Exception("not implemented")

    def SetOperSt(self, val: str):
        raise Exception("not implemented")

    def ErrorMessage(self) -> str:
        raise Exception("not implemented")

    def SetErrorMessage(self, val: str):
        raise Exception("not implemented")

    def LastRunAt(self) -> datetime:
        raise Exception("not implemented")

    def SetLastRunAt(self, val: datetime):
        raise Exception("not implemented")

    def LastActionAt(self) -> datetime:
        raise Exception("not implemented")

    def SetLastActionAt(self, val: datetime):
        raise Exception("not implemented")

    def FinishedAt(self) -> datetime:
        raise Exception("not implemented")

    def SetFinishedAt(self, val: datetime):
        raise Exception("not implemented")

    def ScreenCount(self) -> int:
        raise Exception("not implemented")

    def SetScreenCount(self, val: int):
        raise Exception("not implemented")

    def EdgeCount(self) -> int:
        raise Exception("not implemented")

    def SetEdgeCount(self, val: int):
        raise Exception("not implemented")

    def StepsTaken(self) -> int:
        raise Exception("not implemented")

    def SetStepsTaken(self, val: int):
        raise Exception("not implemented")

    def StepsPlanned(self) -> int:
        raise Exception("not implemented")

    def SetStepsPlanned(self, val: int):
        raise Exception("not implemented")

    def ActionsPerformed(self) -> list:
        raise Exception("not implemented")

    def SetActionsPerformed(self, val: list):
        raise Exception("not implemented")

    def CrawlerVersion(self) -> str:
        raise Exception("not implemented")

    def SetCrawlerVersion(self, val: str):
        raise Exception("not implemented")

    def ScreenIdentifiers(self) -> ScreenIdentifiers:
        raise Exception("not implemented")

    def SetScreenIdentifiers(self, val: ScreenIdentifiers):
        raise Exception("not implemented")


def JourneyInternalFactory() -> JourneyInternal:
    ret = _JourneyInternal()
    ret.operSt_ = ""
    ret.errorMessage_ = ""
    ret.lastRunAt_ = "0001-01-01T00:00:00.000000Z"
    ret.lastActionAt_ = "0001-01-01T00:00:00.000000Z"
    ret.finishedAt_ = "0001-01-01T00:00:00.000000Z"
    ret.screenCount_ = 0
    ret.edgeCount_ = 0
    ret.stepsTaken_ = 0
    ret.stepsPlanned_ = 0
    ret.actionsPerformed_ = []
    ret.crawlerVersion_ = ""
    ret.screenIdentifiers_ = ScreenIdentifiersFactory()
    return ret


class _JourneyInternal(JourneyInternal):
    def __init__(self):
        self.operSt_ = ""
        self.errorMessage_ = ""
        self.lastRunAt_ = "0001-01-01T00:00:00.000000Z"
        self.lastActionAt_ = "0001-01-01T00:00:00.000000Z"
        self.finishedAt_ = "0001-01-01T00:00:00.000000Z"
        self.screenCount_ = 0
        self.edgeCount_ = 0
        self.stepsTaken_ = 0
        self.stepsPlanned_ = 0
        self.actionsPerformed_ = []
        self.crawlerVersion_ = ""
        self.screenIdentifiers_ = ScreenIdentifiersFactory()

    def SetOperSt(self, val):
        self.operSt_ = str(val)

    def OperSt(self):
        return self.operSt_

    def SetErrorMessage(self, val):
        self.errorMessage_ = str(val)

    def ErrorMessage(self):
        return self.errorMessage_

    def SetLastRunAt(self, val):
        self.lastRunAt_ = store.datetime_string(val)

    def LastRunAt(self):
        return store.datetime_parse(self.lastRunAt_)

    def SetLastActionAt(self, val):
        self.lastActionAt_ = store.datetime_string(val)

    def LastActionAt(self):
        return store.datetime_parse(self.lastActionAt_)

    def SetFinishedAt(self, val):
        self.finishedAt_ = store.datetime_string(val)

    def FinishedAt(self):
        return store.datetime_parse(self.finishedAt_)

    def SetScreenCount(self, val):
        self.screenCount_ = int(val)

    def ScreenCount(self):
        return self.screenCount_

    def SetEdgeCount(self, val):
        self.edgeCount_ = int(val)

    def EdgeCount(self):
        return self.edgeCount_

    def SetStepsTaken(self, val):
        self.stepsTaken_ = int(val)

    def StepsTaken(self):
        return self.stepsTaken_

    def SetStepsPlanned(self, val):
        self.stepsPlanned_ = int(val)

    def StepsPlanned(self):
        return self.stepsPlanned_

    def SetActionsPerformed(self, val):
        self.actionsPerformed_ = val

    def ActionsPerformed(self):
        return self.actionsPerformed_

    def SetCrawlerVersion(self, val):
        self.crawlerVersion_ = str(val)

    def CrawlerVersion(self):
        return self.crawlerVersion_

    def SetScreenIdentifiers(self, val):
        self.screenIdentifiers_ = val

    def ScreenIdentifiers(self):
        return self.screenIdentifiers_

    def FromJson(self, jstr):
        data = json.loads(jstr)
        return self.FromDict(data)

    def ToJson(self):
        return json.dumps(self.ToDict())

    def ToDict(self):
        data = {}
        data["operSt"] = self.operSt_
        data["errorMessage"] = self.errorMessage_
        data["lastRunAt"] = self.lastRunAt_
        data["lastActionAt"] = self.lastActionAt_
        data["finishedAt"] = self.finishedAt_
        data["screenCount"] = self.screenCount_
        data["edgeCount"] = self.edgeCount_
        data["stepsTaken"] = self.stepsTaken_
        data["stepsPlanned"] = self.stepsPlanned_
        rawList = []
        for v in self.actionsPerformed_:
            rawList.append(v.ToDict())
        data["actionsPerformed"] = rawList
        data["crawlerVersion"] = self.crawlerVersion_
        # if self.screenIdentifiers_ is not None:
        data["screenIdentifiers"] = self.screenIdentifiers_.ToDict()
        return data

    def FromDict(self, data):
        for key, rawValue in data.items():
            if rawValue is None:
                continue
            if key == "operSt":
                self.operSt_ = rawValue
            if key == "errorMessage":
                self.errorMessage_ = rawValue
            if key == "lastRunAt":
                self.lastRunAt_ = rawValue
            if key == "lastActionAt":
                self.lastActionAt_ = rawValue
            if key == "finishedAt":
                self.finishedAt_ = rawValue
            if key == "screenCount":
                self.screenCount_ = rawValue
            if key == "edgeCount":
                self.edgeCount_ = rawValue
            if key == "stepsTaken":
                self.stepsTaken_ = rawValue
            if key == "stepsPlanned":
                self.stepsPlanned_ = rawValue
            if key == "actionsPerformed":
                res = []
                for rw in rawValue:
                    ud = ActionFactory()
                    ud.FromDict(rw)
                    res.append(ud)
                self.actionsPerformed_ = res
            if key == "crawlerVersion":
                self.crawlerVersion_ = rawValue
            if key == "screenIdentifiers":
                self.screenIdentifiers_.FromDict(rawValue)


class ScreenInternal:
    def __init__(self):
        raise Exception("cannot initialize like this. use the factory method")

    def ToDict(self):
        raise Exception("not implemented")

    def FromDict(self, data):
        raise Exception("not implemented")

    def Journey(self) -> str:
        raise Exception("not implemented")

    def SetJourney(self, val: str):
        raise Exception("not implemented")

    def Identifier(self) -> str:
        raise Exception("not implemented")

    def SetIdentifier(self, val: str):
        raise Exception("not implemented")

    def GroupIdentifier(self) -> str:
        raise Exception("not implemented")

    def SetGroupIdentifier(self, val: str):
        raise Exception("not implemented")

    def Edges(self) -> list:
        raise Exception("not implemented")

    def SetEdges(self, val: list):
        raise Exception("not implemented")

    def Image(self) -> str:
        raise Exception("not implemented")

    def SetImage(self, val: str):
        raise Exception("not implemented")

    def ImageLowRes(self) -> str:
        raise Exception("not implemented")

    def SetImageLowRes(self, val: str):
        raise Exception("not implemented")

    def IsEntryPoint(self) -> bool:
        raise Exception("not implemented")

    def SetIsEntryPoint(self, val: bool):
        raise Exception("not implemented")

    def Content(self) -> ScreenContent:
        raise Exception("not implemented")

    def SetContent(self, val: ScreenContent):
        raise Exception("not implemented")

    def Metadata(self) -> ScreenMetadata:
        raise Exception("not implemented")

    def SetMetadata(self, val: ScreenMetadata):
        raise Exception("not implemented")


def ScreenInternalFactory() -> ScreenInternal:
    ret = _ScreenInternal()
    ret.journey_ = ""
    ret.identifier_ = ""
    ret.groupIdentifier_ = ""
    ret.edges_ = []
    ret.image_ = ""
    ret.imageLowRes_ = ""
    ret.isEntryPoint_ = False
    ret.content_ = ScreenContentFactory()
    ret.metadata_ = ScreenMetadataFactory()
    return ret


class _ScreenInternal(ScreenInternal):
    def __init__(self):
        self.journey_ = ""
        self.identifier_ = ""
        self.groupIdentifier_ = ""
        self.edges_ = []
        self.image_ = ""
        self.imageLowRes_ = ""
        self.isEntryPoint_ = False
        self.content_ = ScreenContentFactory()
        self.metadata_ = ScreenMetadataFactory()

    def SetJourney(self, val):
        self.journey_ = str(val)

    def Journey(self):
        return self.journey_

    def SetIdentifier(self, val):
        self.identifier_ = str(val)

    def Identifier(self):
        return self.identifier_

    def SetGroupIdentifier(self, val):
        self.groupIdentifier_ = str(val)

    def GroupIdentifier(self):
        return self.groupIdentifier_

    def SetEdges(self, val):
        self.edges_ = val

    def Edges(self):
        return self.edges_

    def SetImage(self, val):
        self.image_ = str(val)

    def Image(self):
        return self.image_

    def SetImageLowRes(self, val):
        self.imageLowRes_ = str(val)

    def ImageLowRes(self):
        return self.imageLowRes_

    def SetIsEntryPoint(self, val):
        self.isEntryPoint_ = bool(val)

    def IsEntryPoint(self):
        return self.isEntryPoint_

    def SetContent(self, val):
        self.content_ = val

    def Content(self):
        return self.content_

    def SetMetadata(self, val):
        self.metadata_ = val

    def Metadata(self):
        return self.metadata_

    def FromJson(self, jstr):
        data = json.loads(jstr)
        return self.FromDict(data)

    def ToJson(self):
        return json.dumps(self.ToDict())

    def ToDict(self):
        data = {}
        data["journey"] = self.journey_
        data["identifier"] = self.identifier_
        data["groupIdentifier"] = self.groupIdentifier_
        rawList = []
        for v in self.edges_:
            rawList.append(v.ToDict())
        data["edges"] = rawList
        data["image"] = self.image_
        data["imageLowRes"] = self.imageLowRes_
        data["isEntryPoint"] = self.isEntryPoint_
        # if self.content_ is not None:
        data["content"] = self.content_.ToDict()
        # if self.metadata_ is not None:
        data["metadata"] = self.metadata_.ToDict()
        return data

    def FromDict(self, data):
        for key, rawValue in data.items():
            if rawValue is None:
                continue
            if key == "journey":
                self.journey_ = rawValue
            if key == "identifier":
                self.identifier_ = rawValue
            if key == "groupIdentifier":
                self.groupIdentifier_ = rawValue
            if key == "edges":
                res = []
                for rw in rawValue:
                    ud = EdgeFactory()
                    ud.FromDict(rw)
                    res.append(ud)
                self.edges_ = res
            if key == "image":
                self.image_ = rawValue
            if key == "imageLowRes":
                self.imageLowRes_ = rawValue
            if key == "isEntryPoint":
                self.isEntryPoint_ = rawValue
            if key == "content":
                self.content_.FromDict(rawValue)
            if key == "metadata":
                self.metadata_.FromDict(rawValue)


class PageInternal:
    def __init__(self):
        raise Exception("cannot initialize like this. use the factory method")

    def ToDict(self):
        raise Exception("not implemented")

    def FromDict(self, data):
        raise Exception("not implemented")

    def Identifier(self) -> str:
        raise Exception("not implemented")

    def SetIdentifier(self, val: str):
        raise Exception("not implemented")

    def Journey(self) -> str:
        raise Exception("not implemented")

    def SetJourney(self, val: str):
        raise Exception("not implemented")

    def Root(self) -> PageNode:
        raise Exception("not implemented")

    def SetRoot(self, val: PageNode):
        raise Exception("not implemented")


def PageInternalFactory() -> PageInternal:
    ret = _PageInternal()
    ret.identifier_ = ""
    ret.journey_ = ""
    ret.root_ = PageNodeFactory()
    return ret


class _PageInternal(PageInternal):
    def __init__(self):
        self.identifier_ = ""
        self.journey_ = ""
        self.root_ = PageNodeFactory()

    def SetIdentifier(self, val):
        self.identifier_ = str(val)

    def Identifier(self):
        return self.identifier_

    def SetJourney(self, val):
        self.journey_ = str(val)

    def Journey(self):
        return self.journey_

    def SetRoot(self, val):
        self.root_ = val

    def Root(self):
        return self.root_

    def FromJson(self, jstr):
        data = json.loads(jstr)
        return self.FromDict(data)

    def ToJson(self):
        return json.dumps(self.ToDict())

    def ToDict(self):
        data = {}
        data["identifier"] = self.identifier_
        data["journey"] = self.journey_
        # if self.root_ is not None:
        data["root"] = self.root_.ToDict()
        return data

    def FromDict(self, data):
        for key, rawValue in data.items():
            if rawValue is None:
                continue
            if key == "identifier":
                self.identifier_ = rawValue
            if key == "journey":
                self.journey_ = rawValue
            if key == "root":
                self.root_.FromDict(rawValue)


class Screen(store.Object):
    def __init__(self):
        raise Exception("cannot initialize like this. use the factory method")

    def ToDict(self):
        raise Exception("not implemented")

    def FromDict(self, data):
        raise Exception("not implemented")

    def Clone(self) -> Type["Screen"]:
        raise NotImplementedError()

    def Meta(self) -> store.Meta:
        raise Exception("not implemented")

    def Internal(self) -> ScreenInternal:
        raise Exception("not implemented")


def ScreenFactory() -> Screen:
    ret = _Screen()
    ret.internal_ = ScreenInternalFactory()
    return ret


class _Screen(Screen):
    def __init__(self):
        self.meta_ = store.MetaFactory("Screen")
        self.external_ = None
        self.internal_ = None

    def SetInternal(self, val):
        self.internal_ = val

    def Internal(self) -> ScreenInternal:
        return self.internal_

    def FromJson(self, jstr):
        data = json.loads(jstr)
        return self.FromDict(data)

    def ToJson(self):
        return json.dumps(self.ToDict())

    def ToDict(self):
        data = {}
        data["metadata"] = self.meta_.ToDict()
        data["internal"] = self.internal_.ToDict()
        return data

    def FromDict(self, data):
        for key, rawValue in data.items():
            if rawValue is None:
                continue
            if key == "metadata":
                self.meta_.FromDict(rawValue)
            if key == "internal":
                self.internal_.FromDict(rawValue)

    def Clone(self) -> Screen:
        ret = ScreenFactory()
        ret.FromJson(self.ToJson())
        return ret

    def Metadata(self) -> store.Meta:
        return self.meta_

    def SetMetadata(self, val: store.Meta):
        self.meta_ = val

    def PrimaryKey(self):
        return str(self.Metadata().Identity())


def ScreenIdentity(pkey):
    return store.ObjectIdentity("screen/" + pkey)


ScreenKindIdentity = store.ObjectIdentity("screen/")
ScreenKind = "Screen"


class Page(store.Object):
    def __init__(self):
        raise Exception("cannot initialize like this. use the factory method")

    def ToDict(self):
        raise Exception("not implemented")

    def FromDict(self, data):
        raise Exception("not implemented")

    def Clone(self) -> Type["Page"]:
        raise NotImplementedError()

    def Meta(self) -> store.Meta:
        raise Exception("not implemented")

    def Internal(self) -> PageInternal:
        raise Exception("not implemented")


def PageFactory() -> Page:
    ret = _Page()
    ret.internal_ = PageInternalFactory()
    return ret


class _Page(Page):
    def __init__(self):
        self.meta_ = store.MetaFactory("Page")
        self.external_ = None
        self.internal_ = None

    def SetInternal(self, val):
        self.internal_ = val

    def Internal(self) -> PageInternal:
        return self.internal_

    def FromJson(self, jstr):
        data = json.loads(jstr)
        return self.FromDict(data)

    def ToJson(self):
        return json.dumps(self.ToDict())

    def ToDict(self):
        data = {}
        data["metadata"] = self.meta_.ToDict()
        data["internal"] = self.internal_.ToDict()
        return data

    def FromDict(self, data):
        for key, rawValue in data.items():
            if rawValue is None:
                continue
            if key == "metadata":
                self.meta_.FromDict(rawValue)
            if key == "internal":
                self.internal_.FromDict(rawValue)

    def Clone(self) -> Page:
        ret = PageFactory()
        ret.FromJson(self.ToJson())
        return ret

    def Metadata(self) -> store.Meta:
        return self.meta_

    def SetMetadata(self, val: store.Meta):
        self.meta_ = val

    def PrimaryKey(self):
        return str(self.Metadata().Identity())


def PageIdentity(pkey):
    return store.ObjectIdentity("page/" + pkey)


PageKindIdentity = store.ObjectIdentity("page/")
PageKind = "Page"


class Journey(store.ExternalHolder):
    def __init__(self):
        raise Exception("cannot initialize like this. use the factory method")

    def ToDict(self):
        raise Exception("not implemented")

    def FromDict(self, data):
        raise Exception("not implemented")

    def Clone(self) -> Type["Journey"]:
        raise NotImplementedError()

    def Meta(self) -> store.Meta:
        raise Exception("not implemented")

    def External() -> JourneyExternal:
        raise Exception("not implemented")

    def Internal(self) -> JourneyInternal:
        raise Exception("not implemented")


def JourneyFactory() -> Journey:
    ret = _Journey()
    ret.external_ = JourneyExternalFactory()
    ret.internal_ = JourneyInternalFactory()
    return ret


class _Journey(Journey):
    def __init__(self):
        self.meta_ = store.MetaFactory("Journey")
        self.external_ = None
        self.internal_ = None

    def SetExternal(self, val):
        self.external_ = val

    def External(self) -> JourneyExternal:
        return self.external_

    def SetInternal(self, val):
        self.internal_ = val

    def Internal(self) -> JourneyInternal:
        return self.internal_

    def FromJson(self, jstr):
        data = json.loads(jstr)
        return self.FromDict(data)

    def ToJson(self):
        return json.dumps(self.ToDict())

    def ToDict(self):
        data = {}
        data["metadata"] = self.meta_.ToDict()
        data["external"] = self.external_.ToDict()
        data["internal"] = self.internal_.ToDict()
        return data

    def FromDict(self, data):
        for key, rawValue in data.items():
            if rawValue is None:
                continue
            if key == "metadata":
                self.meta_.FromDict(rawValue)
            if key == "external":
                self.external_.FromDict(rawValue)
            if key == "internal":
                self.internal_.FromDict(rawValue)

    def Clone(self) -> Journey:
        ret = JourneyFactory()
        ret.FromJson(self.ToJson())
        return ret

    def Metadata(self) -> store.Meta:
        return self.meta_

    def SetMetadata(self, val: store.Meta):
        self.meta_ = val

    def PrimaryKey(self):
        return str(self.Metadata().Identity())


def JourneyIdentity(pkey):
    return store.ObjectIdentity("journey/" + pkey)


JourneyKindIdentity = store.ObjectIdentity("journey/")
JourneyKind = "Journey"


class _Schema(store.SchemaHolder):
    def __init__(self, objects):
        self.objects = objects

    def ObjectForKind(self, kind) -> store.Object:
        if kind == "Screen":
            return ScreenFactory()
        elif kind == "screen":
            return ScreenFactory()
        if kind == "Page":
            return PageFactory()
        elif kind == "page":
            return PageFactory()
        if kind == "Journey":
            return JourneyFactory()
        elif kind == "journey":
            return JourneyFactory()
        raise Exception(constants.ErrNoSuchObject)

    def Types(self):
        return self.objects


def Schema():
    objects = [
        "Screen",
        "Page",
        "Journey",
    ]
    return _Schema(objects)
