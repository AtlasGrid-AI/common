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


def ScreenMetadataFactory() -> ScreenMetadata:
    ret = _ScreenMetadata()
    ret.content_ = list()
    return ret


class _ScreenMetadata(ScreenMetadata):
    def __init__(self):
        self.content_ = list()

    def SetContent(self, val):
        self.content_ = val

    def Content(self):
        return self.content_

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
        return data

    def FromDict(self, data):
        for key, rawValue in data.items():
            if rawValue is None:
                continue
            if key == "content":
                res = list()
                for rw in rawValue:
                    ud = ""
                    ud = rw
                    res.append(ud)
                self.content_ = res


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
    ret.steps_ = list()
    return ret


class _Edge(Edge):
    def __init__(self):
        self.targetScreenIdentifier_ = ""
        self.component_ = ComponentFactory()
        self.steps_ = list()

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
                res = list()
                for rw in rawValue:
                    ud = 0
                    ud = rw
                    res.append(ud)
                self.steps_ = res


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
    ret.edges_ = list()
    ret.image_ = ""
    ret.isEntryPoint_ = False
    ret.metadata_ = ScreenMetadataFactory()
    return ret


class _ScreenExternal(ScreenExternal):
    def __init__(self):
        self.journey_ = ""
        self.identifier_ = ""
        self.edges_ = list()
        self.image_ = ""
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
                res = list()
                for rw in rawValue:
                    ud = EdgeFactory()
                    ud.FromDict(rw)
                    res.append(ud)
                self.edges_ = res
            if key == "image":
                self.image_ = rawValue
            if key == "isEntryPoint":
                self.isEntryPoint_ = rawValue
            if key == "metadata":
                self.metadata_.FromDict(rawValue)


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


class _Schema(store.SchemaHolder):
    def __init__(self, objects):
        self.objects = objects

    def ObjectForKind(self, kind) -> store.Object:
        if kind == "Screen":
            return ScreenFactory()
        elif kind == "screen":
            return ScreenFactory()
        raise Exception(constants.ErrNoSuchObject)

    def Types(self):
        return self.objects


def Schema():
    objects = [
        "Screen",
    ]
    return _Schema(objects)
