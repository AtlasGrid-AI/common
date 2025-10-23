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

    def Content(self) -> list:
        raise Exception("not implemented")

    def SetContent(self, val: list):
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


def ScreenMetadataFactory() -> ScreenMetadata:
    ret = _ScreenMetadata()
    ret.content_ = []
    ret.title_ = ""
    ret.description_ = ""
    ret.tags_ = []
    return ret


class _ScreenMetadata(ScreenMetadata):
    def __init__(self):
        self.content_ = []
        self.title_ = ""
        self.description_ = ""
        self.tags_ = []

    def SetContent(self, val):
        self.content_ = val

    def Content(self):
        return self.content_

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

    def FromJson(self, jstr):
        data = json.loads(jstr)
        return self.FromDict(data)

    def ToJson(self):
        return json.dumps(self.ToDict())

    def ToDict(self):
        data = {}
        rawList = []
        for v in self.content_:
            rawList.append(v)
        data["content"] = rawList
        data["title"] = self.title_
        data["description"] = self.description_
        rawList = []
        for v in self.tags_:
            rawList.append(v)
        data["tags"] = rawList
        return data

    def FromDict(self, data):
        for key, rawValue in data.items():
            if rawValue is None:
                continue
            if key == "content":
                res = []
                for rw in rawValue:
                    ud = ""
                    ud = rw
                    res.append(ud)
                self.content_ = res
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

    def RectX(self) -> int:
        raise Exception("not implemented")

    def SetRectX(self, val: int):
        raise Exception("not implemented")

    def RectY(self) -> int:
        raise Exception("not implemented")

    def SetRectY(self, val: int):
        raise Exception("not implemented")

    def RectW(self) -> int:
        raise Exception("not implemented")

    def SetRectW(self, val: int):
        raise Exception("not implemented")

    def RectH(self) -> int:
        raise Exception("not implemented")

    def SetRectH(self, val: int):
        raise Exception("not implemented")

    def CenterX(self) -> int:
        raise Exception("not implemented")

    def SetCenterX(self, val: int):
        raise Exception("not implemented")

    def CenterY(self) -> int:
        raise Exception("not implemented")

    def SetCenterY(self, val: int):
        raise Exception("not implemented")


def ComponentFactory() -> Component:
    ret = _Component()
    ret.identifier_ = ""
    ret.rectX_ = 0
    ret.rectY_ = 0
    ret.rectW_ = 0
    ret.rectH_ = 0
    ret.centerX_ = 0
    ret.centerY_ = 0
    return ret


class _Component(Component):
    def __init__(self):
        self.identifier_ = ""
        self.rectX_ = 0
        self.rectY_ = 0
        self.rectW_ = 0
        self.rectH_ = 0
        self.centerX_ = 0
        self.centerY_ = 0

    def SetIdentifier(self, val):
        self.identifier_ = str(val)

    def Identifier(self):
        return self.identifier_

    def SetRectX(self, val):
        self.rectX_ = int(val)

    def RectX(self):
        return self.rectX_

    def SetRectY(self, val):
        self.rectY_ = int(val)

    def RectY(self):
        return self.rectY_

    def SetRectW(self, val):
        self.rectW_ = int(val)

    def RectW(self):
        return self.rectW_

    def SetRectH(self, val):
        self.rectH_ = int(val)

    def RectH(self):
        return self.rectH_

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
        data["identifier"] = self.identifier_
        data["rectX"] = self.rectX_
        data["rectY"] = self.rectY_
        data["rectW"] = self.rectW_
        data["rectH"] = self.rectH_
        data["centerX"] = self.centerX_
        data["centerY"] = self.centerY_
        return data

    def FromDict(self, data):
        for key, rawValue in data.items():
            if rawValue is None:
                continue
            if key == "identifier":
                self.identifier_ = rawValue
            if key == "rectX":
                self.rectX_ = rawValue
            if key == "rectY":
                self.rectY_ = rawValue
            if key == "rectW":
                self.rectW_ = rawValue
            if key == "rectH":
                self.rectH_ = rawValue
            if key == "centerX":
                self.centerX_ = rawValue
            if key == "centerY":
                self.centerY_ = rawValue


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


class JourneyInternal:
    def __init__(self):
        raise Exception("cannot initialize like this. use the factory method")

    def ToDict(self):
        raise Exception("not implemented")

    def FromDict(self, data):
        raise Exception("not implemented")

    def OperationalStatus(self) -> str:
        raise Exception("not implemented")

    def SetOperationalStatus(self, val: str):
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

    def ActionsAvoided(self) -> list:
        raise Exception("not implemented")

    def SetActionsAvoided(self, val: list):
        raise Exception("not implemented")


def JourneyInternalFactory() -> JourneyInternal:
    ret = _JourneyInternal()
    ret.operationalStatus_ = ""
    ret.errorMessage_ = ""
    ret.lastRunAt_ = "0001-01-01T00:00:00.000000Z"
    ret.lastActionAt_ = "0001-01-01T00:00:00.000000Z"
    ret.finishedAt_ = "0001-01-01T00:00:00.000000Z"
    ret.screenCount_ = 0
    ret.edgeCount_ = 0
    ret.stepsTaken_ = 0
    ret.stepsPlanned_ = 0
    ret.actionsPerformed_ = []
    ret.actionsAvoided_ = []
    return ret


class _JourneyInternal(JourneyInternal):
    def __init__(self):
        self.operationalStatus_ = ""
        self.errorMessage_ = ""
        self.lastRunAt_ = "0001-01-01T00:00:00.000000Z"
        self.lastActionAt_ = "0001-01-01T00:00:00.000000Z"
        self.finishedAt_ = "0001-01-01T00:00:00.000000Z"
        self.screenCount_ = 0
        self.edgeCount_ = 0
        self.stepsTaken_ = 0
        self.stepsPlanned_ = 0
        self.actionsPerformed_ = []
        self.actionsAvoided_ = []

    def SetOperationalStatus(self, val):
        self.operationalStatus_ = str(val)

    def OperationalStatus(self):
        return self.operationalStatus_

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

    def SetActionsAvoided(self, val):
        self.actionsAvoided_ = val

    def ActionsAvoided(self):
        return self.actionsAvoided_

    def FromJson(self, jstr):
        data = json.loads(jstr)
        return self.FromDict(data)

    def ToJson(self):
        return json.dumps(self.ToDict())

    def ToDict(self):
        data = {}
        data["operationalStatus"] = self.operationalStatus_
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
            rawList.append(v)
        data["actionsPerformed"] = rawList
        rawList = []
        for v in self.actionsAvoided_:
            rawList.append(v)
        data["actionsAvoided"] = rawList
        return data

    def FromDict(self, data):
        for key, rawValue in data.items():
            if rawValue is None:
                continue
            if key == "operationalStatus":
                self.operationalStatus_ = rawValue
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
                    ud = ""
                    ud = rw
                    res.append(ud)
                self.actionsPerformed_ = res
            if key == "actionsAvoided":
                res = []
                for rw in rawValue:
                    ud = ""
                    ud = rw
                    res.append(ud)
                self.actionsAvoided_ = res


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

    def Steps(self) -> list:
        raise Exception("not implemented")

    def SetSteps(self, val: list):
        raise Exception("not implemented")


def EdgeFactory() -> Edge:
    ret = _Edge()
    ret.targetScreenIdentifier_ = ""
    ret.component_ = ComponentFactory()
    ret.steps_ = []
    return ret


class _Edge(Edge):
    def __init__(self):
        self.targetScreenIdentifier_ = ""
        self.component_ = ComponentFactory()
        self.steps_ = []

    def SetTargetScreenIdentifier(self, val):
        self.targetScreenIdentifier_ = str(val)

    def TargetScreenIdentifier(self):
        return self.targetScreenIdentifier_

    def SetComponent(self, val):
        self.component_ = val

    def Component(self):
        return self.component_

    def SetSteps(self, val):
        self.steps_ = val

    def Steps(self):
        return self.steps_

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
        rawList = []
        for v in self.steps_:
            rawList.append(v)
        data["steps"] = rawList
        return data

    def FromDict(self, data):
        for key, rawValue in data.items():
            if rawValue is None:
                continue
            if key == "targetScreenIdentifier":
                self.targetScreenIdentifier_ = rawValue
            if key == "component":
                self.component_.FromDict(rawValue)
            if key == "steps":
                res = []
                for rw in rawValue:
                    ud = 0
                    ud = rw
                    res.append(ud)
                self.steps_ = res


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

    def DepriorizeComponents(self) -> list:
        raise Exception("not implemented")

    def SetDepriorizeComponents(self, val: list):
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
    ret.depriorizeComponents_ = []
    ret.stepIntervalMs_ = 0
    ret.maxStepCount_ = 0
    ret.crawler_ = CrawlerConfigurationFactory()
    return ret


class _JourneyConfiguration(JourneyConfiguration):
    def __init__(self):
        self.textFields_ = {}
        self.avoidComponents_ = []
        self.depriorizeComponents_ = []
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

    def SetDepriorizeComponents(self, val):
        self.depriorizeComponents_ = val

    def DepriorizeComponents(self):
        return self.depriorizeComponents_

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
        for v in self.depriorizeComponents_:
            rawList.append(v)
        data["depriorizeComponents"] = rawList
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
            if key == "depriorizeComponents":
                res = []
                for rw in rawValue:
                    ud = ""
                    ud = rw
                    res.append(ud)
                self.depriorizeComponents_ = res
            if key == "stepIntervalMs":
                self.stepIntervalMs_ = rawValue
            if key == "maxStepCount":
                self.maxStepCount_ = rawValue
            if key == "crawler":
                self.crawler_.FromDict(rawValue)


class ScreenExternal:
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

    def Metadata(self) -> ScreenMetadata:
        raise Exception("not implemented")

    def SetMetadata(self, val: ScreenMetadata):
        raise Exception("not implemented")


def ScreenExternalFactory() -> ScreenExternal:
    ret = _ScreenExternal()
    ret.journey_ = ""
    ret.identifier_ = ""
    ret.edges_ = []
    ret.image_ = ""
    ret.imageLowRes_ = ""
    ret.isEntryPoint_ = False
    ret.metadata_ = ScreenMetadataFactory()
    return ret


class _ScreenExternal(ScreenExternal):
    def __init__(self):
        self.journey_ = ""
        self.identifier_ = ""
        self.edges_ = []
        self.image_ = ""
        self.imageLowRes_ = ""
        self.isEntryPoint_ = False
        self.metadata_ = ScreenMetadataFactory()

    def SetJourney(self, val):
        self.journey_ = str(val)

    def Journey(self):
        return self.journey_

    def SetIdentifier(self, val):
        self.identifier_ = str(val)

    def Identifier(self):
        return self.identifier_

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
        rawList = []
        for v in self.edges_:
            rawList.append(v.ToDict())
        data["edges"] = rawList
        data["image"] = self.image_
        data["imageLowRes"] = self.imageLowRes_
        data["isEntryPoint"] = self.isEntryPoint_
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
            if key == "metadata":
                self.metadata_.FromDict(rawValue)


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

    def OperSt(self) -> str:
        raise Exception("not implemented")

    def SetOperSt(self, val: str):
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
    ret.operSt_ = ""
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
        self.operSt_ = ""
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

    def SetOperSt(self, val):
        self.operSt_ = str(val)

    def OperSt(self):
        return self.operSt_

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
        data["operSt"] = self.operSt_
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
            if key == "operSt":
                self.operSt_ = rawValue
            if key == "config":
                self.config_.FromDict(rawValue)
            if key == "deleted":
                self.deleted_ = rawValue


class Screen(store.ExternalHolder):
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

    def External() -> ScreenExternal:
        raise Exception("not implemented")


def ScreenFactory() -> Screen:
    ret = _Screen()
    ret.external_ = ScreenExternalFactory()
    return ret


class _Screen(Screen):
    def __init__(self):
        self.meta_ = store.MetaFactory("Screen")
        self.external_ = None
        self.internal_ = None

    def SetExternal(self, val):
        self.external_ = val

    def External(self) -> ScreenExternal:
        return self.external_

    def FromJson(self, jstr):
        data = json.loads(jstr)
        return self.FromDict(data)

    def ToJson(self):
        return json.dumps(self.ToDict())

    def ToDict(self):
        data = {}
        data["metadata"] = self.meta_.ToDict()
        data["external"] = self.external_.ToDict()
        return data

    def FromDict(self, data):
        for key, rawValue in data.items():
            if rawValue is None:
                continue
            if key == "metadata":
                self.meta_.FromDict(rawValue)
            if key == "external":
                self.external_.FromDict(rawValue)

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
        "Journey",
    ]
    return _Schema(objects)
