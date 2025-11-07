

class ScreenMetadata {
    constructor() {
        // throw new Error("cannot initialize like this. use the factory method");
    }

    ToDict() { throw new Error("not implemented"); }
    FromDict(data) { throw new Error("not implemented"); }

    
    Title() { throw new Error("not implemented"); }
    SetTitle(val) { throw new Error("not implemented"); }
    
    Description() { throw new Error("not implemented"); }
    SetDescription(val) { throw new Error("not implemented"); }
    
    Tags() { throw new Error("not implemented"); }
    SetTags(val) { throw new Error("not implemented"); }
    
    Flow() { throw new Error("not implemented"); }
    SetFlow(val) { throw new Error("not implemented"); }
    
}

function ScreenMetadataFactory() {
    const ret = new _ScreenMetadata();
    
    ret.title_ = "";
    
    ret.description_ = "";
    
    ret.tags_ = [];
    
    ret.flow_ = "";
    
    return ret;
}

class _ScreenMetadata extends ScreenMetadata {
    constructor() {
        super();
        
        this.title_ = "";
        
        this.description_ = "";
        
        this.tags_ = [];
        
        this.flow_ = "";
        
    }

    
    SetTitle(val) {
        
        this.title_ = String(val);
        
    }

    Title() {
        
        return this.title_;
        
    }

    
    SetDescription(val) {
        
        this.description_ = String(val);
        
    }

    Description() {
        
        return this.description_;
        
    }

    
    SetTags(val) {
        
        this.tags_ = val;
        
    }

    Tags() {
        
        return this.tags_;
        
    }

    
    SetFlow(val) {
        
        this.flow_ = String(val);
        
    }

    Flow() {
        
        return this.flow_;
        
    }

    

    FromJson(jstr) {
        const data = JSON.parse(jstr);
        return this.FromDict(data);
    }

    ToJson() {
        return JSON.stringify(this.ToDict());
    }

    ToDict() {
        const data = {};
        
        
        
        data["title"] = this.title_;
        
        
        
        
        
        data["description"] = this.description_;
        
        
        
        
        const rawListtags = [];
        for (const v of (this.tags_ || [])) {
            
            rawListtags.push(v);
            
        }
        data["tags"] = rawListtags;
        
        
        
        
        data["flow"] = this.flow_;
        
        
        
        return data;
    }

    FromDict(data) {
        for (const key in data) {
            const rawValue = data[key];
            if (rawValue === null || rawValue === undefined) continue;

            
            if (key === "title") {
                
                
                this.title_ = rawValue;
                

                
            }
            
            if (key === "description") {
                
                
                this.description_ = rawValue;
                

                
            }
            
            if (key === "tags") {
                
                const res = [];

                for (const rw of rawValue) {
                    let ud = "";
                    
                    ud = rw;
                    
                    res.push(ud);
                }

                this.tags_ = res;
                
            }
            
            if (key === "flow") {
                
                
                this.flow_ = rawValue;
                

                
            }
            
        }
    }
}



class Rectangle {
    constructor() {
        // throw new Error("cannot initialize like this. use the factory method");
    }

    ToDict() { throw new Error("not implemented"); }
    FromDict(data) { throw new Error("not implemented"); }

    
    X() { throw new Error("not implemented"); }
    SetX(val) { throw new Error("not implemented"); }
    
    Y() { throw new Error("not implemented"); }
    SetY(val) { throw new Error("not implemented"); }
    
    Width() { throw new Error("not implemented"); }
    SetWidth(val) { throw new Error("not implemented"); }
    
    Height() { throw new Error("not implemented"); }
    SetHeight(val) { throw new Error("not implemented"); }
    
    CenterX() { throw new Error("not implemented"); }
    SetCenterX(val) { throw new Error("not implemented"); }
    
    CenterY() { throw new Error("not implemented"); }
    SetCenterY(val) { throw new Error("not implemented"); }
    
}

function RectangleFactory() {
    const ret = new _Rectangle();
    
    ret.x_ = 0;
    
    ret.y_ = 0;
    
    ret.width_ = 0;
    
    ret.height_ = 0;
    
    ret.centerX_ = 0;
    
    ret.centerY_ = 0;
    
    return ret;
}

class _Rectangle extends Rectangle {
    constructor() {
        super();
        
        this.x_ = 0;
        
        this.y_ = 0;
        
        this.width_ = 0;
        
        this.height_ = 0;
        
        this.centerX_ = 0;
        
        this.centerY_ = 0;
        
    }

    
    SetX(val) {
        
        this.x_ = Number.parseInt(val);
        
    }

    X() {
        
        return this.x_;
        
    }

    
    SetY(val) {
        
        this.y_ = Number.parseInt(val);
        
    }

    Y() {
        
        return this.y_;
        
    }

    
    SetWidth(val) {
        
        this.width_ = Number.parseInt(val);
        
    }

    Width() {
        
        return this.width_;
        
    }

    
    SetHeight(val) {
        
        this.height_ = Number.parseInt(val);
        
    }

    Height() {
        
        return this.height_;
        
    }

    
    SetCenterX(val) {
        
        this.centerX_ = Number.parseInt(val);
        
    }

    CenterX() {
        
        return this.centerX_;
        
    }

    
    SetCenterY(val) {
        
        this.centerY_ = Number.parseInt(val);
        
    }

    CenterY() {
        
        return this.centerY_;
        
    }

    

    FromJson(jstr) {
        const data = JSON.parse(jstr);
        return this.FromDict(data);
    }

    ToJson() {
        return JSON.stringify(this.ToDict());
    }

    ToDict() {
        const data = {};
        
        
        
        data["x"] = this.x_;
        
        
        
        
        
        data["y"] = this.y_;
        
        
        
        
        
        data["width"] = this.width_;
        
        
        
        
        
        data["height"] = this.height_;
        
        
        
        
        
        data["centerX"] = this.centerX_;
        
        
        
        
        
        data["centerY"] = this.centerY_;
        
        
        
        return data;
    }

    FromDict(data) {
        for (const key in data) {
            const rawValue = data[key];
            if (rawValue === null || rawValue === undefined) continue;

            
            if (key === "x") {
                
                
                this.x_ = rawValue;
                

                
            }
            
            if (key === "y") {
                
                
                this.y_ = rawValue;
                

                
            }
            
            if (key === "width") {
                
                
                this.width_ = rawValue;
                

                
            }
            
            if (key === "height") {
                
                
                this.height_ = rawValue;
                

                
            }
            
            if (key === "centerX") {
                
                
                this.centerX_ = rawValue;
                

                
            }
            
            if (key === "centerY") {
                
                
                this.centerY_ = rawValue;
                

                
            }
            
        }
    }
}



class PageNodeAttributes {
    constructor() {
        // throw new Error("cannot initialize like this. use the factory method");
    }

    ToDict() { throw new Error("not implemented"); }
    FromDict(data) { throw new Error("not implemented"); }

    
    ClassName() { throw new Error("not implemented"); }
    SetClassName(val) { throw new Error("not implemented"); }
    
    Classifiers() { throw new Error("not implemented"); }
    SetClassifiers(val) { throw new Error("not implemented"); }
    
    ResourceId() { throw new Error("not implemented"); }
    SetResourceId(val) { throw new Error("not implemented"); }
    
    Package() { throw new Error("not implemented"); }
    SetPackage(val) { throw new Error("not implemented"); }
    
    Text() { throw new Error("not implemented"); }
    SetText(val) { throw new Error("not implemented"); }
    
    Rectangle() { throw new Error("not implemented"); }
    SetRectangle(val) { throw new Error("not implemented"); }
    
    Index() { throw new Error("not implemented"); }
    SetIndex(val) { throw new Error("not implemented"); }
    
    IsDisplayed() { throw new Error("not implemented"); }
    SetIsDisplayed(val) { throw new Error("not implemented"); }
    
    IsEnabled() { throw new Error("not implemented"); }
    SetIsEnabled(val) { throw new Error("not implemented"); }
    
    IsCheckable() { throw new Error("not implemented"); }
    SetIsCheckable(val) { throw new Error("not implemented"); }
    
    IsChecked() { throw new Error("not implemented"); }
    SetIsChecked(val) { throw new Error("not implemented"); }
    
    IsDialog() { throw new Error("not implemented"); }
    SetIsDialog(val) { throw new Error("not implemented"); }
    
    IsClickable() { throw new Error("not implemented"); }
    SetIsClickable(val) { throw new Error("not implemented"); }
    
    IsFocusable() { throw new Error("not implemented"); }
    SetIsFocusable(val) { throw new Error("not implemented"); }
    
    IsFocused() { throw new Error("not implemented"); }
    SetIsFocused(val) { throw new Error("not implemented"); }
    
    IsLongClickable() { throw new Error("not implemented"); }
    SetIsLongClickable(val) { throw new Error("not implemented"); }
    
    IsScrollable() { throw new Error("not implemented"); }
    SetIsScrollable(val) { throw new Error("not implemented"); }
    
    IsSelected() { throw new Error("not implemented"); }
    SetIsSelected(val) { throw new Error("not implemented"); }
    
    IsDismissable() { throw new Error("not implemented"); }
    SetIsDismissable(val) { throw new Error("not implemented"); }
    
    HasClickables() { throw new Error("not implemented"); }
    SetHasClickables(val) { throw new Error("not implemented"); }
    
}

function PageNodeAttributesFactory() {
    const ret = new _PageNodeAttributes();
    
    ret.className_ = "";
    
    ret.classifiers_ = [];
    
    ret.resourceId_ = "";
    
    ret.package_ = "";
    
    ret.text_ = "";
    
    ret.rectangle_ = RectangleFactory();
    
    ret.index_ = 0;
    
    ret.isDisplayed_ = false;
    
    ret.isEnabled_ = false;
    
    ret.isCheckable_ = false;
    
    ret.isChecked_ = false;
    
    ret.isDialog_ = false;
    
    ret.isClickable_ = false;
    
    ret.isFocusable_ = false;
    
    ret.isFocused_ = false;
    
    ret.isLongClickable_ = false;
    
    ret.isScrollable_ = false;
    
    ret.isSelected_ = false;
    
    ret.isDismissable_ = false;
    
    ret.hasClickables_ = false;
    
    return ret;
}

class _PageNodeAttributes extends PageNodeAttributes {
    constructor() {
        super();
        
        this.className_ = "";
        
        this.classifiers_ = [];
        
        this.resourceId_ = "";
        
        this.package_ = "";
        
        this.text_ = "";
        
        this.rectangle_ = RectangleFactory();
        
        this.index_ = 0;
        
        this.isDisplayed_ = false;
        
        this.isEnabled_ = false;
        
        this.isCheckable_ = false;
        
        this.isChecked_ = false;
        
        this.isDialog_ = false;
        
        this.isClickable_ = false;
        
        this.isFocusable_ = false;
        
        this.isFocused_ = false;
        
        this.isLongClickable_ = false;
        
        this.isScrollable_ = false;
        
        this.isSelected_ = false;
        
        this.isDismissable_ = false;
        
        this.hasClickables_ = false;
        
    }

    
    SetClassName(val) {
        
        this.className_ = String(val);
        
    }

    ClassName() {
        
        return this.className_;
        
    }

    
    SetClassifiers(val) {
        
        this.classifiers_ = val;
        
    }

    Classifiers() {
        
        return this.classifiers_;
        
    }

    
    SetResourceId(val) {
        
        this.resourceId_ = String(val);
        
    }

    ResourceId() {
        
        return this.resourceId_;
        
    }

    
    SetPackage(val) {
        
        this.package_ = String(val);
        
    }

    Package() {
        
        return this.package_;
        
    }

    
    SetText(val) {
        
        this.text_ = String(val);
        
    }

    Text() {
        
        return this.text_;
        
    }

    
    SetRectangle(val) {
        
        this.rectangle_ = val;
        
    }

    Rectangle() {
        
        return this.rectangle_;
        
    }

    
    SetIndex(val) {
        
        this.index_ = Number.parseInt(val);
        
    }

    Index() {
        
        return this.index_;
        
    }

    
    SetIsDisplayed(val) {
        
        this.isDisplayed_ = Boolean(val);
        
    }

    IsDisplayed() {
        
        return this.isDisplayed_;
        
    }

    
    SetIsEnabled(val) {
        
        this.isEnabled_ = Boolean(val);
        
    }

    IsEnabled() {
        
        return this.isEnabled_;
        
    }

    
    SetIsCheckable(val) {
        
        this.isCheckable_ = Boolean(val);
        
    }

    IsCheckable() {
        
        return this.isCheckable_;
        
    }

    
    SetIsChecked(val) {
        
        this.isChecked_ = Boolean(val);
        
    }

    IsChecked() {
        
        return this.isChecked_;
        
    }

    
    SetIsDialog(val) {
        
        this.isDialog_ = Boolean(val);
        
    }

    IsDialog() {
        
        return this.isDialog_;
        
    }

    
    SetIsClickable(val) {
        
        this.isClickable_ = Boolean(val);
        
    }

    IsClickable() {
        
        return this.isClickable_;
        
    }

    
    SetIsFocusable(val) {
        
        this.isFocusable_ = Boolean(val);
        
    }

    IsFocusable() {
        
        return this.isFocusable_;
        
    }

    
    SetIsFocused(val) {
        
        this.isFocused_ = Boolean(val);
        
    }

    IsFocused() {
        
        return this.isFocused_;
        
    }

    
    SetIsLongClickable(val) {
        
        this.isLongClickable_ = Boolean(val);
        
    }

    IsLongClickable() {
        
        return this.isLongClickable_;
        
    }

    
    SetIsScrollable(val) {
        
        this.isScrollable_ = Boolean(val);
        
    }

    IsScrollable() {
        
        return this.isScrollable_;
        
    }

    
    SetIsSelected(val) {
        
        this.isSelected_ = Boolean(val);
        
    }

    IsSelected() {
        
        return this.isSelected_;
        
    }

    
    SetIsDismissable(val) {
        
        this.isDismissable_ = Boolean(val);
        
    }

    IsDismissable() {
        
        return this.isDismissable_;
        
    }

    
    SetHasClickables(val) {
        
        this.hasClickables_ = Boolean(val);
        
    }

    HasClickables() {
        
        return this.hasClickables_;
        
    }

    

    FromJson(jstr) {
        const data = JSON.parse(jstr);
        return this.FromDict(data);
    }

    ToJson() {
        return JSON.stringify(this.ToDict());
    }

    ToDict() {
        const data = {};
        
        
        
        data["className"] = this.className_;
        
        
        
        
        const rawListclassifiers = [];
        for (const v of (this.classifiers_ || [])) {
            
            rawListclassifiers.push(v);
            
        }
        data["classifiers"] = rawListclassifiers;
        
        
        
        
        data["resourceId"] = this.resourceId_;
        
        
        
        
        
        data["package"] = this.package_;
        
        
        
        
        
        data["text"] = this.text_;
        
        
        
        
        
        data["rectangle"] = this.rectangle_ ? this.rectangle_.ToDict() : null;
        
        
        
        
        
        data["index"] = this.index_;
        
        
        
        
        
        data["isDisplayed"] = this.isDisplayed_;
        
        
        
        
        
        data["isEnabled"] = this.isEnabled_;
        
        
        
        
        
        data["isCheckable"] = this.isCheckable_;
        
        
        
        
        
        data["isChecked"] = this.isChecked_;
        
        
        
        
        
        data["isDialog"] = this.isDialog_;
        
        
        
        
        
        data["isClickable"] = this.isClickable_;
        
        
        
        
        
        data["isFocusable"] = this.isFocusable_;
        
        
        
        
        
        data["isFocused"] = this.isFocused_;
        
        
        
        
        
        data["isLongClickable"] = this.isLongClickable_;
        
        
        
        
        
        data["isScrollable"] = this.isScrollable_;
        
        
        
        
        
        data["isSelected"] = this.isSelected_;
        
        
        
        
        
        data["isDismissable"] = this.isDismissable_;
        
        
        
        
        
        data["hasClickables"] = this.hasClickables_;
        
        
        
        return data;
    }

    FromDict(data) {
        for (const key in data) {
            const rawValue = data[key];
            if (rawValue === null || rawValue === undefined) continue;

            
            if (key === "className") {
                
                
                this.className_ = rawValue;
                

                
            }
            
            if (key === "classifiers") {
                
                const res = [];

                for (const rw of rawValue) {
                    let ud = "";
                    
                    ud = rw;
                    
                    res.push(ud);
                }

                this.classifiers_ = res;
                
            }
            
            if (key === "resourceId") {
                
                
                this.resourceId_ = rawValue;
                

                
            }
            
            if (key === "package") {
                
                
                this.package_ = rawValue;
                

                
            }
            
            if (key === "text") {
                
                
                this.text_ = rawValue;
                

                
            }
            
            if (key === "rectangle") {
                
                
                this.rectangle_.FromDict(rawValue);
                

                
            }
            
            if (key === "index") {
                
                
                this.index_ = rawValue;
                

                
            }
            
            if (key === "isDisplayed") {
                
                
                this.isDisplayed_ = rawValue;
                

                
            }
            
            if (key === "isEnabled") {
                
                
                this.isEnabled_ = rawValue;
                

                
            }
            
            if (key === "isCheckable") {
                
                
                this.isCheckable_ = rawValue;
                

                
            }
            
            if (key === "isChecked") {
                
                
                this.isChecked_ = rawValue;
                

                
            }
            
            if (key === "isDialog") {
                
                
                this.isDialog_ = rawValue;
                

                
            }
            
            if (key === "isClickable") {
                
                
                this.isClickable_ = rawValue;
                

                
            }
            
            if (key === "isFocusable") {
                
                
                this.isFocusable_ = rawValue;
                

                
            }
            
            if (key === "isFocused") {
                
                
                this.isFocused_ = rawValue;
                

                
            }
            
            if (key === "isLongClickable") {
                
                
                this.isLongClickable_ = rawValue;
                

                
            }
            
            if (key === "isScrollable") {
                
                
                this.isScrollable_ = rawValue;
                

                
            }
            
            if (key === "isSelected") {
                
                
                this.isSelected_ = rawValue;
                

                
            }
            
            if (key === "isDismissable") {
                
                
                this.isDismissable_ = rawValue;
                

                
            }
            
            if (key === "hasClickables") {
                
                
                this.hasClickables_ = rawValue;
                

                
            }
            
        }
    }
}



class CrawlerConfiguration {
    constructor() {
        // throw new Error("cannot initialize like this. use the factory method");
    }

    ToDict() { throw new Error("not implemented"); }
    FromDict(data) { throw new Error("not implemented"); }

    
    ServerUrl() { throw new Error("not implemented"); }
    SetServerUrl(val) { throw new Error("not implemented"); }
    
    DirectConnection() { throw new Error("not implemented"); }
    SetDirectConnection(val) { throw new Error("not implemented"); }
    
    KeepAlive() { throw new Error("not implemented"); }
    SetKeepAlive(val) { throw new Error("not implemented"); }
    
    IgnoreCertificates() { throw new Error("not implemented"); }
    SetIgnoreCertificates(val) { throw new Error("not implemented"); }
    
    PlatformVersion() { throw new Error("not implemented"); }
    SetPlatformVersion(val) { throw new Error("not implemented"); }
    
    DeviceId() { throw new Error("not implemented"); }
    SetDeviceId(val) { throw new Error("not implemented"); }
    
}

function CrawlerConfigurationFactory() {
    const ret = new _CrawlerConfiguration();
    
    ret.serverUrl_ = "";
    
    ret.directConnection_ = false;
    
    ret.keepAlive_ = false;
    
    ret.ignoreCertificates_ = false;
    
    ret.platformVersion_ = "";
    
    ret.deviceId_ = "";
    
    return ret;
}

class _CrawlerConfiguration extends CrawlerConfiguration {
    constructor() {
        super();
        
        this.serverUrl_ = "";
        
        this.directConnection_ = false;
        
        this.keepAlive_ = false;
        
        this.ignoreCertificates_ = false;
        
        this.platformVersion_ = "";
        
        this.deviceId_ = "";
        
    }

    
    SetServerUrl(val) {
        
        this.serverUrl_ = String(val);
        
    }

    ServerUrl() {
        
        return this.serverUrl_;
        
    }

    
    SetDirectConnection(val) {
        
        this.directConnection_ = Boolean(val);
        
    }

    DirectConnection() {
        
        return this.directConnection_;
        
    }

    
    SetKeepAlive(val) {
        
        this.keepAlive_ = Boolean(val);
        
    }

    KeepAlive() {
        
        return this.keepAlive_;
        
    }

    
    SetIgnoreCertificates(val) {
        
        this.ignoreCertificates_ = Boolean(val);
        
    }

    IgnoreCertificates() {
        
        return this.ignoreCertificates_;
        
    }

    
    SetPlatformVersion(val) {
        
        this.platformVersion_ = String(val);
        
    }

    PlatformVersion() {
        
        return this.platformVersion_;
        
    }

    
    SetDeviceId(val) {
        
        this.deviceId_ = String(val);
        
    }

    DeviceId() {
        
        return this.deviceId_;
        
    }

    

    FromJson(jstr) {
        const data = JSON.parse(jstr);
        return this.FromDict(data);
    }

    ToJson() {
        return JSON.stringify(this.ToDict());
    }

    ToDict() {
        const data = {};
        
        
        
        data["serverUrl"] = this.serverUrl_;
        
        
        
        
        
        data["directConnection"] = this.directConnection_;
        
        
        
        
        
        data["keepAlive"] = this.keepAlive_;
        
        
        
        
        
        data["ignoreCertificates"] = this.ignoreCertificates_;
        
        
        
        
        
        data["platformVersion"] = this.platformVersion_;
        
        
        
        
        
        data["deviceId"] = this.deviceId_;
        
        
        
        return data;
    }

    FromDict(data) {
        for (const key in data) {
            const rawValue = data[key];
            if (rawValue === null || rawValue === undefined) continue;

            
            if (key === "serverUrl") {
                
                
                this.serverUrl_ = rawValue;
                

                
            }
            
            if (key === "directConnection") {
                
                
                this.directConnection_ = rawValue;
                

                
            }
            
            if (key === "keepAlive") {
                
                
                this.keepAlive_ = rawValue;
                

                
            }
            
            if (key === "ignoreCertificates") {
                
                
                this.ignoreCertificates_ = rawValue;
                

                
            }
            
            if (key === "platformVersion") {
                
                
                this.platformVersion_ = rawValue;
                

                
            }
            
            if (key === "deviceId") {
                
                
                this.deviceId_ = rawValue;
                

                
            }
            
        }
    }
}



class JourneyInternal {
    constructor() {
        // throw new Error("cannot initialize like this. use the factory method");
    }

    ToDict() { throw new Error("not implemented"); }
    FromDict(data) { throw new Error("not implemented"); }

    
    OperSt() { throw new Error("not implemented"); }
    SetOperSt(val) { throw new Error("not implemented"); }
    
    ErrorMessage() { throw new Error("not implemented"); }
    SetErrorMessage(val) { throw new Error("not implemented"); }
    
    LastRunAt() { throw new Error("not implemented"); }
    SetLastRunAt(val) { throw new Error("not implemented"); }
    
    LastActionAt() { throw new Error("not implemented"); }
    SetLastActionAt(val) { throw new Error("not implemented"); }
    
    FinishedAt() { throw new Error("not implemented"); }
    SetFinishedAt(val) { throw new Error("not implemented"); }
    
    ScreenCount() { throw new Error("not implemented"); }
    SetScreenCount(val) { throw new Error("not implemented"); }
    
    EdgeCount() { throw new Error("not implemented"); }
    SetEdgeCount(val) { throw new Error("not implemented"); }
    
    StepsTaken() { throw new Error("not implemented"); }
    SetStepsTaken(val) { throw new Error("not implemented"); }
    
    StepsPlanned() { throw new Error("not implemented"); }
    SetStepsPlanned(val) { throw new Error("not implemented"); }
    
    ActionsPerformed() { throw new Error("not implemented"); }
    SetActionsPerformed(val) { throw new Error("not implemented"); }
    
    ActionsAvoided() { throw new Error("not implemented"); }
    SetActionsAvoided(val) { throw new Error("not implemented"); }
    
    CrawlerVersion() { throw new Error("not implemented"); }
    SetCrawlerVersion(val) { throw new Error("not implemented"); }
    
}

function JourneyInternalFactory() {
    const ret = new _JourneyInternal();
    
    ret.operSt_ = "";
    
    ret.errorMessage_ = "";
    
    ret.lastRunAt_ = "0001-01-01T00:00:00.000000Z";
    
    ret.lastActionAt_ = "0001-01-01T00:00:00.000000Z";
    
    ret.finishedAt_ = "0001-01-01T00:00:00.000000Z";
    
    ret.screenCount_ = 0;
    
    ret.edgeCount_ = 0;
    
    ret.stepsTaken_ = 0;
    
    ret.stepsPlanned_ = 0;
    
    ret.actionsPerformed_ = [];
    
    ret.actionsAvoided_ = [];
    
    ret.crawlerVersion_ = "";
    
    return ret;
}

class _JourneyInternal extends JourneyInternal {
    constructor() {
        super();
        
        this.operSt_ = "";
        
        this.errorMessage_ = "";
        
        this.lastRunAt_ = "0001-01-01T00:00:00.000000Z";
        
        this.lastActionAt_ = "0001-01-01T00:00:00.000000Z";
        
        this.finishedAt_ = "0001-01-01T00:00:00.000000Z";
        
        this.screenCount_ = 0;
        
        this.edgeCount_ = 0;
        
        this.stepsTaken_ = 0;
        
        this.stepsPlanned_ = 0;
        
        this.actionsPerformed_ = [];
        
        this.actionsAvoided_ = [];
        
        this.crawlerVersion_ = "";
        
    }

    
    SetOperSt(val) {
        
        this.operSt_ = String(val);
        
    }

    OperSt() {
        
        return this.operSt_;
        
    }

    
    SetErrorMessage(val) {
        
        this.errorMessage_ = String(val);
        
    }

    ErrorMessage() {
        
        return this.errorMessage_;
        
    }

    
    SetLastRunAt(val) {
        
        this.lastRunAt_ = val.ToString();
        
    }

    LastRunAt() {
        
        return Date.parse(this.lastRunAt_);
        
    }

    
    SetLastActionAt(val) {
        
        this.lastActionAt_ = val.ToString();
        
    }

    LastActionAt() {
        
        return Date.parse(this.lastActionAt_);
        
    }

    
    SetFinishedAt(val) {
        
        this.finishedAt_ = val.ToString();
        
    }

    FinishedAt() {
        
        return Date.parse(this.finishedAt_);
        
    }

    
    SetScreenCount(val) {
        
        this.screenCount_ = Number.parseInt(val);
        
    }

    ScreenCount() {
        
        return this.screenCount_;
        
    }

    
    SetEdgeCount(val) {
        
        this.edgeCount_ = Number.parseInt(val);
        
    }

    EdgeCount() {
        
        return this.edgeCount_;
        
    }

    
    SetStepsTaken(val) {
        
        this.stepsTaken_ = Number.parseInt(val);
        
    }

    StepsTaken() {
        
        return this.stepsTaken_;
        
    }

    
    SetStepsPlanned(val) {
        
        this.stepsPlanned_ = Number.parseInt(val);
        
    }

    StepsPlanned() {
        
        return this.stepsPlanned_;
        
    }

    
    SetActionsPerformed(val) {
        
        this.actionsPerformed_ = val;
        
    }

    ActionsPerformed() {
        
        return this.actionsPerformed_;
        
    }

    
    SetActionsAvoided(val) {
        
        this.actionsAvoided_ = val;
        
    }

    ActionsAvoided() {
        
        return this.actionsAvoided_;
        
    }

    
    SetCrawlerVersion(val) {
        
        this.crawlerVersion_ = String(val);
        
    }

    CrawlerVersion() {
        
        return this.crawlerVersion_;
        
    }

    

    FromJson(jstr) {
        const data = JSON.parse(jstr);
        return this.FromDict(data);
    }

    ToJson() {
        return JSON.stringify(this.ToDict());
    }

    ToDict() {
        const data = {};
        
        
        
        data["operSt"] = this.operSt_;
        
        
        
        
        
        data["errorMessage"] = this.errorMessage_;
        
        
        
        
        
        data["lastRunAt"] = this.lastRunAt_;
        
        
        
        
        
        data["lastActionAt"] = this.lastActionAt_;
        
        
        
        
        
        data["finishedAt"] = this.finishedAt_;
        
        
        
        
        
        data["screenCount"] = this.screenCount_;
        
        
        
        
        
        data["edgeCount"] = this.edgeCount_;
        
        
        
        
        
        data["stepsTaken"] = this.stepsTaken_;
        
        
        
        
        
        data["stepsPlanned"] = this.stepsPlanned_;
        
        
        
        
        const rawListactionsPerformed = [];
        for (const v of (this.actionsPerformed_ || [])) {
            
            rawListactionsPerformed.push(v);
            
        }
        data["actionsPerformed"] = rawListactionsPerformed;
        
        
        
        const rawListactionsAvoided = [];
        for (const v of (this.actionsAvoided_ || [])) {
            
            rawListactionsAvoided.push(v);
            
        }
        data["actionsAvoided"] = rawListactionsAvoided;
        
        
        
        
        data["crawlerVersion"] = this.crawlerVersion_;
        
        
        
        return data;
    }

    FromDict(data) {
        for (const key in data) {
            const rawValue = data[key];
            if (rawValue === null || rawValue === undefined) continue;

            
            if (key === "operSt") {
                
                
                this.operSt_ = rawValue;
                

                
            }
            
            if (key === "errorMessage") {
                
                
                this.errorMessage_ = rawValue;
                

                
            }
            
            if (key === "lastRunAt") {
                
                
                this.lastRunAt_ = rawValue;
                

                
            }
            
            if (key === "lastActionAt") {
                
                
                this.lastActionAt_ = rawValue;
                

                
            }
            
            if (key === "finishedAt") {
                
                
                this.finishedAt_ = rawValue;
                

                
            }
            
            if (key === "screenCount") {
                
                
                this.screenCount_ = rawValue;
                

                
            }
            
            if (key === "edgeCount") {
                
                
                this.edgeCount_ = rawValue;
                

                
            }
            
            if (key === "stepsTaken") {
                
                
                this.stepsTaken_ = rawValue;
                

                
            }
            
            if (key === "stepsPlanned") {
                
                
                this.stepsPlanned_ = rawValue;
                

                
            }
            
            if (key === "actionsPerformed") {
                
                const res = [];

                for (const rw of rawValue) {
                    let ud = "";
                    
                    ud = rw;
                    
                    res.push(ud);
                }

                this.actionsPerformed_ = res;
                
            }
            
            if (key === "actionsAvoided") {
                
                const res = [];

                for (const rw of rawValue) {
                    let ud = "";
                    
                    ud = rw;
                    
                    res.push(ud);
                }

                this.actionsAvoided_ = res;
                
            }
            
            if (key === "crawlerVersion") {
                
                
                this.crawlerVersion_ = rawValue;
                

                
            }
            
        }
    }
}



class Component {
    constructor() {
        // throw new Error("cannot initialize like this. use the factory method");
    }

    ToDict() { throw new Error("not implemented"); }
    FromDict(data) { throw new Error("not implemented"); }

    
    Identifier() { throw new Error("not implemented"); }
    SetIdentifier(val) { throw new Error("not implemented"); }
    
    Rectangle() { throw new Error("not implemented"); }
    SetRectangle(val) { throw new Error("not implemented"); }
    
    Type() { throw new Error("not implemented"); }
    SetType(val) { throw new Error("not implemented"); }
    
    Text() { throw new Error("not implemented"); }
    SetText(val) { throw new Error("not implemented"); }
    
}

function ComponentFactory() {
    const ret = new _Component();
    
    ret.identifier_ = "";
    
    ret.rectangle_ = RectangleFactory();
    
    ret.type_ = "";
    
    ret.text_ = "";
    
    return ret;
}

class _Component extends Component {
    constructor() {
        super();
        
        this.identifier_ = "";
        
        this.rectangle_ = RectangleFactory();
        
        this.type_ = "";
        
        this.text_ = "";
        
    }

    
    SetIdentifier(val) {
        
        this.identifier_ = String(val);
        
    }

    Identifier() {
        
        return this.identifier_;
        
    }

    
    SetRectangle(val) {
        
        this.rectangle_ = val;
        
    }

    Rectangle() {
        
        return this.rectangle_;
        
    }

    
    SetType(val) {
        
        this.type_ = String(val);
        
    }

    Type() {
        
        return this.type_;
        
    }

    
    SetText(val) {
        
        this.text_ = String(val);
        
    }

    Text() {
        
        return this.text_;
        
    }

    

    FromJson(jstr) {
        const data = JSON.parse(jstr);
        return this.FromDict(data);
    }

    ToJson() {
        return JSON.stringify(this.ToDict());
    }

    ToDict() {
        const data = {};
        
        
        
        data["identifier"] = this.identifier_;
        
        
        
        
        
        data["rectangle"] = this.rectangle_ ? this.rectangle_.ToDict() : null;
        
        
        
        
        
        data["type"] = this.type_;
        
        
        
        
        
        data["text"] = this.text_;
        
        
        
        return data;
    }

    FromDict(data) {
        for (const key in data) {
            const rawValue = data[key];
            if (rawValue === null || rawValue === undefined) continue;

            
            if (key === "identifier") {
                
                
                this.identifier_ = rawValue;
                

                
            }
            
            if (key === "rectangle") {
                
                
                this.rectangle_.FromDict(rawValue);
                

                
            }
            
            if (key === "type") {
                
                
                this.type_ = rawValue;
                

                
            }
            
            if (key === "text") {
                
                
                this.text_ = rawValue;
                

                
            }
            
        }
    }
}



class JourneyConfiguration {
    constructor() {
        // throw new Error("cannot initialize like this. use the factory method");
    }

    ToDict() { throw new Error("not implemented"); }
    FromDict(data) { throw new Error("not implemented"); }

    
    TextFields() { throw new Error("not implemented"); }
    SetTextFields(val) { throw new Error("not implemented"); }
    
    AvoidComponents() { throw new Error("not implemented"); }
    SetAvoidComponents(val) { throw new Error("not implemented"); }
    
    DeprioritizeComponents() { throw new Error("not implemented"); }
    SetDeprioritizeComponents(val) { throw new Error("not implemented"); }
    
    AdditionalFlows() { throw new Error("not implemented"); }
    SetAdditionalFlows(val) { throw new Error("not implemented"); }
    
    StepIntervalMs() { throw new Error("not implemented"); }
    SetStepIntervalMs(val) { throw new Error("not implemented"); }
    
    MaxStepCount() { throw new Error("not implemented"); }
    SetMaxStepCount(val) { throw new Error("not implemented"); }
    
    Crawler() { throw new Error("not implemented"); }
    SetCrawler(val) { throw new Error("not implemented"); }
    
}

function JourneyConfigurationFactory() {
    const ret = new _JourneyConfiguration();
    
    ret.textFields_ = {};
    
    ret.avoidComponents_ = [];
    
    ret.deprioritizeComponents_ = [];
    
    ret.additionalFlows_ = {};
    
    ret.stepIntervalMs_ = 0;
    
    ret.maxStepCount_ = 0;
    
    ret.crawler_ = CrawlerConfigurationFactory();
    
    return ret;
}

class _JourneyConfiguration extends JourneyConfiguration {
    constructor() {
        super();
        
        this.textFields_ = {};
        
        this.avoidComponents_ = [];
        
        this.deprioritizeComponents_ = [];
        
        this.additionalFlows_ = {};
        
        this.stepIntervalMs_ = 0;
        
        this.maxStepCount_ = 0;
        
        this.crawler_ = CrawlerConfigurationFactory();
        
    }

    
    SetTextFields(val) {
        
        this.textFields_ = val;
        
    }

    TextFields() {
        
        return this.textFields_;
        
    }

    
    SetAvoidComponents(val) {
        
        this.avoidComponents_ = val;
        
    }

    AvoidComponents() {
        
        return this.avoidComponents_;
        
    }

    
    SetDeprioritizeComponents(val) {
        
        this.deprioritizeComponents_ = val;
        
    }

    DeprioritizeComponents() {
        
        return this.deprioritizeComponents_;
        
    }

    
    SetAdditionalFlows(val) {
        
        this.additionalFlows_ = val;
        
    }

    AdditionalFlows() {
        
        return this.additionalFlows_;
        
    }

    
    SetStepIntervalMs(val) {
        
        this.stepIntervalMs_ = Number.parseInt(val);
        
    }

    StepIntervalMs() {
        
        return this.stepIntervalMs_;
        
    }

    
    SetMaxStepCount(val) {
        
        this.maxStepCount_ = Number.parseInt(val);
        
    }

    MaxStepCount() {
        
        return this.maxStepCount_;
        
    }

    
    SetCrawler(val) {
        
        this.crawler_ = val;
        
    }

    Crawler() {
        
        return this.crawler_;
        
    }

    

    FromJson(jstr) {
        const data = JSON.parse(jstr);
        return this.FromDict(data);
    }

    ToJson() {
        return JSON.stringify(this.ToDict());
    }

    ToDict() {
        const data = {};
        
        
        const rawSubmaptextFields = {};
        for (const k in (this.textFields_ || {})) {
            const v = this.textFields_[k];
            
            rawSubmaptextFields[k] = v;
            
        }
        data["textFields"] = rawSubmaptextFields;
        
        
        
        const rawListavoidComponents = [];
        for (const v of (this.avoidComponents_ || [])) {
            
            rawListavoidComponents.push(v);
            
        }
        data["avoidComponents"] = rawListavoidComponents;
        
        
        
        const rawListdeprioritizeComponents = [];
        for (const v of (this.deprioritizeComponents_ || [])) {
            
            rawListdeprioritizeComponents.push(v);
            
        }
        data["deprioritizeComponents"] = rawListdeprioritizeComponents;
        
        
        
        const rawSubmapadditionalFlows = {};
        for (const k in (this.additionalFlows_ || {})) {
            const v = this.additionalFlows_[k];
            
            rawSubmapadditionalFlows[k] = v;
            
        }
        data["additionalFlows"] = rawSubmapadditionalFlows;
        
        
        
        
        data["stepIntervalMs"] = this.stepIntervalMs_;
        
        
        
        
        
        data["maxStepCount"] = this.maxStepCount_;
        
        
        
        
        
        data["crawler"] = this.crawler_ ? this.crawler_.ToDict() : null;
        
        
        
        return data;
    }

    FromDict(data) {
        for (const key in data) {
            const rawValue = data[key];
            if (rawValue === null || rawValue === undefined) continue;

            
            if (key === "textFields") {
                
                const res = {};

                for (const rk in rawValue) {
                    const rw = rawValue[rk];
                    let ud = "";
                    
                    ud = rw;
                    
                    res[rk] = ud;
                }

                this.textFields_ = res;
                
            }
            
            if (key === "avoidComponents") {
                
                const res = [];

                for (const rw of rawValue) {
                    let ud = "";
                    
                    ud = rw;
                    
                    res.push(ud);
                }

                this.avoidComponents_ = res;
                
            }
            
            if (key === "deprioritizeComponents") {
                
                const res = [];

                for (const rw of rawValue) {
                    let ud = "";
                    
                    ud = rw;
                    
                    res.push(ud);
                }

                this.deprioritizeComponents_ = res;
                
            }
            
            if (key === "additionalFlows") {
                
                const res = {};

                for (const rk in rawValue) {
                    const rw = rawValue[rk];
                    let ud = "";
                    
                    ud = rw;
                    
                    res[rk] = ud;
                }

                this.additionalFlows_ = res;
                
            }
            
            if (key === "stepIntervalMs") {
                
                
                this.stepIntervalMs_ = rawValue;
                

                
            }
            
            if (key === "maxStepCount") {
                
                
                this.maxStepCount_ = rawValue;
                

                
            }
            
            if (key === "crawler") {
                
                
                this.crawler_.FromDict(rawValue);
                

                
            }
            
        }
    }
}



class Edge {
    constructor() {
        // throw new Error("cannot initialize like this. use the factory method");
    }

    ToDict() { throw new Error("not implemented"); }
    FromDict(data) { throw new Error("not implemented"); }

    
    TargetScreenIdentifier() { throw new Error("not implemented"); }
    SetTargetScreenIdentifier(val) { throw new Error("not implemented"); }
    
    Component() { throw new Error("not implemented"); }
    SetComponent(val) { throw new Error("not implemented"); }
    
    Action() { throw new Error("not implemented"); }
    SetAction(val) { throw new Error("not implemented"); }
    
    Expired() { throw new Error("not implemented"); }
    SetExpired(val) { throw new Error("not implemented"); }
    
    Steps() { throw new Error("not implemented"); }
    SetSteps(val) { throw new Error("not implemented"); }
    
}

function EdgeFactory() {
    const ret = new _Edge();
    
    ret.targetScreenIdentifier_ = "";
    
    ret.component_ = ComponentFactory();
    
    ret.action_ = "";
    
    ret.expired_ = false;
    
    ret.steps_ = [];
    
    return ret;
}

class _Edge extends Edge {
    constructor() {
        super();
        
        this.targetScreenIdentifier_ = "";
        
        this.component_ = ComponentFactory();
        
        this.action_ = "";
        
        this.expired_ = false;
        
        this.steps_ = [];
        
    }

    
    SetTargetScreenIdentifier(val) {
        
        this.targetScreenIdentifier_ = String(val);
        
    }

    TargetScreenIdentifier() {
        
        return this.targetScreenIdentifier_;
        
    }

    
    SetComponent(val) {
        
        this.component_ = val;
        
    }

    Component() {
        
        return this.component_;
        
    }

    
    SetAction(val) {
        
        this.action_ = String(val);
        
    }

    Action() {
        
        return this.action_;
        
    }

    
    SetExpired(val) {
        
        this.expired_ = Boolean(val);
        
    }

    Expired() {
        
        return this.expired_;
        
    }

    
    SetSteps(val) {
        
        this.steps_ = val;
        
    }

    Steps() {
        
        return this.steps_;
        
    }

    

    FromJson(jstr) {
        const data = JSON.parse(jstr);
        return this.FromDict(data);
    }

    ToJson() {
        return JSON.stringify(this.ToDict());
    }

    ToDict() {
        const data = {};
        
        
        
        data["targetScreenIdentifier"] = this.targetScreenIdentifier_;
        
        
        
        
        
        data["component"] = this.component_ ? this.component_.ToDict() : null;
        
        
        
        
        
        data["action"] = this.action_;
        
        
        
        
        
        data["expired"] = this.expired_;
        
        
        
        
        const rawListsteps = [];
        for (const v of (this.steps_ || [])) {
            
            rawListsteps.push(v);
            
        }
        data["steps"] = rawListsteps;
        
        
        return data;
    }

    FromDict(data) {
        for (const key in data) {
            const rawValue = data[key];
            if (rawValue === null || rawValue === undefined) continue;

            
            if (key === "targetScreenIdentifier") {
                
                
                this.targetScreenIdentifier_ = rawValue;
                

                
            }
            
            if (key === "component") {
                
                
                this.component_.FromDict(rawValue);
                

                
            }
            
            if (key === "action") {
                
                
                this.action_ = rawValue;
                

                
            }
            
            if (key === "expired") {
                
                
                this.expired_ = rawValue;
                

                
            }
            
            if (key === "steps") {
                
                const res = [];

                for (const rw of rawValue) {
                    let ud = 0;
                    
                    ud = rw;
                    
                    res.push(ud);
                }

                this.steps_ = res;
                
            }
            
        }
    }
}



class ScreenContent {
    constructor() {
        // throw new Error("cannot initialize like this. use the factory method");
    }

    ToDict() { throw new Error("not implemented"); }
    FromDict(data) { throw new Error("not implemented"); }

    
    Components() { throw new Error("not implemented"); }
    SetComponents(val) { throw new Error("not implemented"); }
    
    Text() { throw new Error("not implemented"); }
    SetText(val) { throw new Error("not implemented"); }
    
}

function ScreenContentFactory() {
    const ret = new _ScreenContent();
    
    ret.components_ = [];
    
    ret.text_ = [];
    
    return ret;
}

class _ScreenContent extends ScreenContent {
    constructor() {
        super();
        
        this.components_ = [];
        
        this.text_ = [];
        
    }

    
    SetComponents(val) {
        
        this.components_ = val;
        
    }

    Components() {
        
        return this.components_;
        
    }

    
    SetText(val) {
        
        this.text_ = val;
        
    }

    Text() {
        
        return this.text_;
        
    }

    

    FromJson(jstr) {
        const data = JSON.parse(jstr);
        return this.FromDict(data);
    }

    ToJson() {
        return JSON.stringify(this.ToDict());
    }

    ToDict() {
        const data = {};
        
        
        const rawListcomponents = [];
        for (const v of (this.components_ || [])) {
            
            rawListcomponents.push(v.ToDict());
            
        }
        data["components"] = rawListcomponents;
        
        
        
        const rawListtext = [];
        for (const v of (this.text_ || [])) {
            
            rawListtext.push(v);
            
        }
        data["text"] = rawListtext;
        
        
        return data;
    }

    FromDict(data) {
        for (const key in data) {
            const rawValue = data[key];
            if (rawValue === null || rawValue === undefined) continue;

            
            if (key === "components") {
                
                const res = [];

                for (const rw of rawValue) {
                    let ud = ComponentFactory();
                    
                    ud.FromDict(rw);
                    
                    res.push(ud);
                }

                this.components_ = res;
                
            }
            
            if (key === "text") {
                
                const res = [];

                for (const rw of rawValue) {
                    let ud = "";
                    
                    ud = rw;
                    
                    res.push(ud);
                }

                this.text_ = res;
                
            }
            
        }
    }
}



class PageNode {
    constructor() {
        // throw new Error("cannot initialize like this. use the factory method");
    }

    ToDict() { throw new Error("not implemented"); }
    FromDict(data) { throw new Error("not implemented"); }

    
    Identifier() { throw new Error("not implemented"); }
    SetIdentifier(val) { throw new Error("not implemented"); }
    
    Parent() { throw new Error("not implemented"); }
    SetParent(val) { throw new Error("not implemented"); }
    
    Children() { throw new Error("not implemented"); }
    SetChildren(val) { throw new Error("not implemented"); }
    
    Attributes() { throw new Error("not implemented"); }
    SetAttributes(val) { throw new Error("not implemented"); }
    
    Hash() { throw new Error("not implemented"); }
    SetHash(val) { throw new Error("not implemented"); }
    
}

function PageNodeFactory() {
    const ret = new _PageNode();
    
    ret.identifier_ = "";
    
    ret.parent_ = "";
    
    ret.children_ = [];
    
    ret.attributes_ = PageNodeAttributesFactory();
    
    ret.hash_ = "";
    
    return ret;
}

class _PageNode extends PageNode {
    constructor() {
        super();
        
        this.identifier_ = "";
        
        this.parent_ = "";
        
        this.children_ = [];
        
        this.attributes_ = PageNodeAttributesFactory();
        
        this.hash_ = "";
        
    }

    
    SetIdentifier(val) {
        
        this.identifier_ = String(val);
        
    }

    Identifier() {
        
        return this.identifier_;
        
    }

    
    SetParent(val) {
        
        this.parent_ = String(val);
        
    }

    Parent() {
        
        return this.parent_;
        
    }

    
    SetChildren(val) {
        
        this.children_ = val;
        
    }

    Children() {
        
        return this.children_;
        
    }

    
    SetAttributes(val) {
        
        this.attributes_ = val;
        
    }

    Attributes() {
        
        return this.attributes_;
        
    }

    
    SetHash(val) {
        
        this.hash_ = String(val);
        
    }

    Hash() {
        
        return this.hash_;
        
    }

    

    FromJson(jstr) {
        const data = JSON.parse(jstr);
        return this.FromDict(data);
    }

    ToJson() {
        return JSON.stringify(this.ToDict());
    }

    ToDict() {
        const data = {};
        
        
        
        data["identifier"] = this.identifier_;
        
        
        
        
        
        data["parent"] = this.parent_;
        
        
        
        
        const rawListchildren = [];
        for (const v of (this.children_ || [])) {
            
            rawListchildren.push(v.ToDict());
            
        }
        data["children"] = rawListchildren;
        
        
        
        
        data["attributes"] = this.attributes_ ? this.attributes_.ToDict() : null;
        
        
        
        
        
        data["hash"] = this.hash_;
        
        
        
        return data;
    }

    FromDict(data) {
        for (const key in data) {
            const rawValue = data[key];
            if (rawValue === null || rawValue === undefined) continue;

            
            if (key === "identifier") {
                
                
                this.identifier_ = rawValue;
                

                
            }
            
            if (key === "parent") {
                
                
                this.parent_ = rawValue;
                

                
            }
            
            if (key === "children") {
                
                const res = [];

                for (const rw of rawValue) {
                    let ud = PageNodeFactory();
                    
                    ud.FromDict(rw);
                    
                    res.push(ud);
                }

                this.children_ = res;
                
            }
            
            if (key === "attributes") {
                
                
                this.attributes_.FromDict(rawValue);
                

                
            }
            
            if (key === "hash") {
                
                
                this.hash_ = rawValue;
                

                
            }
            
        }
    }
}



class JourneyExternal {
    constructor() {
        // throw new Error("cannot initialize like this. use the factory method");
    }

    ToDict() { throw new Error("not implemented"); }
    FromDict(data) { throw new Error("not implemented"); }

    
    Name() { throw new Error("not implemented"); }
    SetName(val) { throw new Error("not implemented"); }
    
    Atlas() { throw new Error("not implemented"); }
    SetAtlas(val) { throw new Error("not implemented"); }
    
    Owner() { throw new Error("not implemented"); }
    SetOwner(val) { throw new Error("not implemented"); }
    
    Description() { throw new Error("not implemented"); }
    SetDescription(val) { throw new Error("not implemented"); }
    
    Platform() { throw new Error("not implemented"); }
    SetPlatform(val) { throw new Error("not implemented"); }
    
    AdminSt() { throw new Error("not implemented"); }
    SetAdminSt(val) { throw new Error("not implemented"); }
    
    Config() { throw new Error("not implemented"); }
    SetConfig(val) { throw new Error("not implemented"); }
    
    Deleted() { throw new Error("not implemented"); }
    SetDeleted(val) { throw new Error("not implemented"); }
    
}

function JourneyExternalFactory() {
    const ret = new _JourneyExternal();
    
    ret.name_ = "";
    
    ret.atlas_ = "";
    
    ret.owner_ = "";
    
    ret.description_ = "";
    
    ret.platform_ = "";
    
    ret.adminSt_ = "";
    
    ret.config_ = JourneyConfigurationFactory();
    
    ret.deleted_ = false;
    
    return ret;
}

class _JourneyExternal extends JourneyExternal {
    constructor() {
        super();
        
        this.name_ = "";
        
        this.atlas_ = "";
        
        this.owner_ = "";
        
        this.description_ = "";
        
        this.platform_ = "";
        
        this.adminSt_ = "";
        
        this.config_ = JourneyConfigurationFactory();
        
        this.deleted_ = false;
        
    }

    
    SetName(val) {
        
        this.name_ = String(val);
        
    }

    Name() {
        
        return this.name_;
        
    }

    
    SetAtlas(val) {
        
        this.atlas_ = String(val);
        
    }

    Atlas() {
        
        return this.atlas_;
        
    }

    
    SetOwner(val) {
        
        this.owner_ = String(val);
        
    }

    Owner() {
        
        return this.owner_;
        
    }

    
    SetDescription(val) {
        
        this.description_ = String(val);
        
    }

    Description() {
        
        return this.description_;
        
    }

    
    SetPlatform(val) {
        
        this.platform_ = String(val);
        
    }

    Platform() {
        
        return this.platform_;
        
    }

    
    SetAdminSt(val) {
        
        this.adminSt_ = String(val);
        
    }

    AdminSt() {
        
        return this.adminSt_;
        
    }

    
    SetConfig(val) {
        
        this.config_ = val;
        
    }

    Config() {
        
        return this.config_;
        
    }

    
    SetDeleted(val) {
        
        this.deleted_ = Boolean(val);
        
    }

    Deleted() {
        
        return this.deleted_;
        
    }

    

    FromJson(jstr) {
        const data = JSON.parse(jstr);
        return this.FromDict(data);
    }

    ToJson() {
        return JSON.stringify(this.ToDict());
    }

    ToDict() {
        const data = {};
        
        
        
        data["name"] = this.name_;
        
        
        
        
        
        data["atlas"] = this.atlas_;
        
        
        
        
        
        data["owner"] = this.owner_;
        
        
        
        
        
        data["description"] = this.description_;
        
        
        
        
        
        data["platform"] = this.platform_;
        
        
        
        
        
        data["adminSt"] = this.adminSt_;
        
        
        
        
        
        data["config"] = this.config_ ? this.config_.ToDict() : null;
        
        
        
        
        
        data["deleted"] = this.deleted_;
        
        
        
        return data;
    }

    FromDict(data) {
        for (const key in data) {
            const rawValue = data[key];
            if (rawValue === null || rawValue === undefined) continue;

            
            if (key === "name") {
                
                
                this.name_ = rawValue;
                

                
            }
            
            if (key === "atlas") {
                
                
                this.atlas_ = rawValue;
                

                
            }
            
            if (key === "owner") {
                
                
                this.owner_ = rawValue;
                

                
            }
            
            if (key === "description") {
                
                
                this.description_ = rawValue;
                

                
            }
            
            if (key === "platform") {
                
                
                this.platform_ = rawValue;
                

                
            }
            
            if (key === "adminSt") {
                
                
                this.adminSt_ = rawValue;
                

                
            }
            
            if (key === "config") {
                
                
                this.config_.FromDict(rawValue);
                

                
            }
            
            if (key === "deleted") {
                
                
                this.deleted_ = rawValue;
                

                
            }
            
        }
    }
}



class ScreenInternal {
    constructor() {
        // throw new Error("cannot initialize like this. use the factory method");
    }

    ToDict() { throw new Error("not implemented"); }
    FromDict(data) { throw new Error("not implemented"); }

    
    Journey() { throw new Error("not implemented"); }
    SetJourney(val) { throw new Error("not implemented"); }
    
    Identifier() { throw new Error("not implemented"); }
    SetIdentifier(val) { throw new Error("not implemented"); }
    
    GroupIdentifier() { throw new Error("not implemented"); }
    SetGroupIdentifier(val) { throw new Error("not implemented"); }
    
    Edges() { throw new Error("not implemented"); }
    SetEdges(val) { throw new Error("not implemented"); }
    
    Image() { throw new Error("not implemented"); }
    SetImage(val) { throw new Error("not implemented"); }
    
    ImageLowRes() { throw new Error("not implemented"); }
    SetImageLowRes(val) { throw new Error("not implemented"); }
    
    IsEntryPoint() { throw new Error("not implemented"); }
    SetIsEntryPoint(val) { throw new Error("not implemented"); }
    
    Content() { throw new Error("not implemented"); }
    SetContent(val) { throw new Error("not implemented"); }
    
    Metadata() { throw new Error("not implemented"); }
    SetMetadata(val) { throw new Error("not implemented"); }
    
}

function ScreenInternalFactory() {
    const ret = new _ScreenInternal();
    
    ret.journey_ = "";
    
    ret.identifier_ = "";
    
    ret.groupIdentifier_ = "";
    
    ret.edges_ = [];
    
    ret.image_ = "";
    
    ret.imageLowRes_ = "";
    
    ret.isEntryPoint_ = false;
    
    ret.content_ = ScreenContentFactory();
    
    ret.metadata_ = ScreenMetadataFactory();
    
    return ret;
}

class _ScreenInternal extends ScreenInternal {
    constructor() {
        super();
        
        this.journey_ = "";
        
        this.identifier_ = "";
        
        this.groupIdentifier_ = "";
        
        this.edges_ = [];
        
        this.image_ = "";
        
        this.imageLowRes_ = "";
        
        this.isEntryPoint_ = false;
        
        this.content_ = ScreenContentFactory();
        
        this.metadata_ = ScreenMetadataFactory();
        
    }

    
    SetJourney(val) {
        
        this.journey_ = String(val);
        
    }

    Journey() {
        
        return this.journey_;
        
    }

    
    SetIdentifier(val) {
        
        this.identifier_ = String(val);
        
    }

    Identifier() {
        
        return this.identifier_;
        
    }

    
    SetGroupIdentifier(val) {
        
        this.groupIdentifier_ = String(val);
        
    }

    GroupIdentifier() {
        
        return this.groupIdentifier_;
        
    }

    
    SetEdges(val) {
        
        this.edges_ = val;
        
    }

    Edges() {
        
        return this.edges_;
        
    }

    
    SetImage(val) {
        
        this.image_ = String(val);
        
    }

    Image() {
        
        return this.image_;
        
    }

    
    SetImageLowRes(val) {
        
        this.imageLowRes_ = String(val);
        
    }

    ImageLowRes() {
        
        return this.imageLowRes_;
        
    }

    
    SetIsEntryPoint(val) {
        
        this.isEntryPoint_ = Boolean(val);
        
    }

    IsEntryPoint() {
        
        return this.isEntryPoint_;
        
    }

    
    SetContent(val) {
        
        this.content_ = val;
        
    }

    Content() {
        
        return this.content_;
        
    }

    
    SetMetadata(val) {
        
        this.metadata_ = val;
        
    }

    Metadata() {
        
        return this.metadata_;
        
    }

    

    FromJson(jstr) {
        const data = JSON.parse(jstr);
        return this.FromDict(data);
    }

    ToJson() {
        return JSON.stringify(this.ToDict());
    }

    ToDict() {
        const data = {};
        
        
        
        data["journey"] = this.journey_;
        
        
        
        
        
        data["identifier"] = this.identifier_;
        
        
        
        
        
        data["groupIdentifier"] = this.groupIdentifier_;
        
        
        
        
        const rawListedges = [];
        for (const v of (this.edges_ || [])) {
            
            rawListedges.push(v.ToDict());
            
        }
        data["edges"] = rawListedges;
        
        
        
        
        data["image"] = this.image_;
        
        
        
        
        
        data["imageLowRes"] = this.imageLowRes_;
        
        
        
        
        
        data["isEntryPoint"] = this.isEntryPoint_;
        
        
        
        
        
        data["content"] = this.content_ ? this.content_.ToDict() : null;
        
        
        
        
        
        data["metadata"] = this.metadata_ ? this.metadata_.ToDict() : null;
        
        
        
        return data;
    }

    FromDict(data) {
        for (const key in data) {
            const rawValue = data[key];
            if (rawValue === null || rawValue === undefined) continue;

            
            if (key === "journey") {
                
                
                this.journey_ = rawValue;
                

                
            }
            
            if (key === "identifier") {
                
                
                this.identifier_ = rawValue;
                

                
            }
            
            if (key === "groupIdentifier") {
                
                
                this.groupIdentifier_ = rawValue;
                

                
            }
            
            if (key === "edges") {
                
                const res = [];

                for (const rw of rawValue) {
                    let ud = EdgeFactory();
                    
                    ud.FromDict(rw);
                    
                    res.push(ud);
                }

                this.edges_ = res;
                
            }
            
            if (key === "image") {
                
                
                this.image_ = rawValue;
                

                
            }
            
            if (key === "imageLowRes") {
                
                
                this.imageLowRes_ = rawValue;
                

                
            }
            
            if (key === "isEntryPoint") {
                
                
                this.isEntryPoint_ = rawValue;
                

                
            }
            
            if (key === "content") {
                
                
                this.content_.FromDict(rawValue);
                

                
            }
            
            if (key === "metadata") {
                
                
                this.metadata_.FromDict(rawValue);
                

                
            }
            
        }
    }
}



class PageInternal {
    constructor() {
        // throw new Error("cannot initialize like this. use the factory method");
    }

    ToDict() { throw new Error("not implemented"); }
    FromDict(data) { throw new Error("not implemented"); }

    
    Identifier() { throw new Error("not implemented"); }
    SetIdentifier(val) { throw new Error("not implemented"); }
    
    Journey() { throw new Error("not implemented"); }
    SetJourney(val) { throw new Error("not implemented"); }
    
    Root() { throw new Error("not implemented"); }
    SetRoot(val) { throw new Error("not implemented"); }
    
}

function PageInternalFactory() {
    const ret = new _PageInternal();
    
    ret.identifier_ = "";
    
    ret.journey_ = "";
    
    ret.root_ = PageNodeFactory();
    
    return ret;
}

class _PageInternal extends PageInternal {
    constructor() {
        super();
        
        this.identifier_ = "";
        
        this.journey_ = "";
        
        this.root_ = PageNodeFactory();
        
    }

    
    SetIdentifier(val) {
        
        this.identifier_ = String(val);
        
    }

    Identifier() {
        
        return this.identifier_;
        
    }

    
    SetJourney(val) {
        
        this.journey_ = String(val);
        
    }

    Journey() {
        
        return this.journey_;
        
    }

    
    SetRoot(val) {
        
        this.root_ = val;
        
    }

    Root() {
        
        return this.root_;
        
    }

    

    FromJson(jstr) {
        const data = JSON.parse(jstr);
        return this.FromDict(data);
    }

    ToJson() {
        return JSON.stringify(this.ToDict());
    }

    ToDict() {
        const data = {};
        
        
        
        data["identifier"] = this.identifier_;
        
        
        
        
        
        data["journey"] = this.journey_;
        
        
        
        
        
        data["root"] = this.root_ ? this.root_.ToDict() : null;
        
        
        
        return data;
    }

    FromDict(data) {
        for (const key in data) {
            const rawValue = data[key];
            if (rawValue === null || rawValue === undefined) continue;

            
            if (key === "identifier") {
                
                
                this.identifier_ = rawValue;
                

                
            }
            
            if (key === "journey") {
                
                
                this.journey_ = rawValue;
                

                
            }
            
            if (key === "root") {
                
                
                this.root_.FromDict(rawValue);
                

                
            }
            
        }
    }
}







class Screen {

    constructor() {
        // throw new Error("cannot initialize like this. use the factory method");
    }

    ToDict() { throw new Error("not implemented"); }
    FromDict(data) { throw new Error("not implemented"); }

    Clone() { throw new Error("not implemented"); }
    Meta() { throw new Error("not implemented"); }

    

    
    Internal() { throw new Error("not implemented"); }
    
}

function ScreenFactory() {
    const ret = new _Screen();

    
    
    ret.internal_ = ScreenInternalFactory();
    

    return ret;
}

class _Screen extends Screen {
    constructor() {
        super();
        this.meta_ = [];
        this.meta_["kind"] = "Screen";
        this.external_ = null;
        this.internal_ = null;
    }

    

    
    SetInternal(val) { this.internal_ = val; }
    Internal() { return this.internal_; }
    

    FromJson(jstr) { const data = JSON.parse(jstr); return this.FromDict(data); }
    ToJson() { return JSON.stringify(this.ToDict()); }

    ToDict() {
        const data = {};
        data["metadata"] = this.meta_;
        
        data["internal"] = this.internal_.ToDict(); 
        return data;
    }

    FromDict(data) {
        for (const key in data) {
            const rawValue = data[key];
            if (rawValue === null || rawValue === undefined) continue;

            if (key === "metadata") {
                this.meta_ = rawValue;
            }

            

            
            if (key === "internal") { this.internal_.FromDict(rawValue); }
            
        }
    }

    Clone() {
        const ret = ScreenFactory();
        ret.FromJson(this.ToJson());
        return ret;
    }

    Metadata() { return this.meta_; }
    SetMetadata(val) { this.meta_ = val; }

    PrimaryKey() {
        return String(this.Metadata().Identity());
    }
}

function ScreenIdentity(pkey) {
    return "screen/" + pkey;
}

const ScreenKindIdentity = "screen/";

const ScreenKind = "Screen";




class Page {

    constructor() {
        // throw new Error("cannot initialize like this. use the factory method");
    }

    ToDict() { throw new Error("not implemented"); }
    FromDict(data) { throw new Error("not implemented"); }

    Clone() { throw new Error("not implemented"); }
    Meta() { throw new Error("not implemented"); }

    

    
    Internal() { throw new Error("not implemented"); }
    
}

function PageFactory() {
    const ret = new _Page();

    
    
    ret.internal_ = PageInternalFactory();
    

    return ret;
}

class _Page extends Page {
    constructor() {
        super();
        this.meta_ = [];
        this.meta_["kind"] = "Page";
        this.external_ = null;
        this.internal_ = null;
    }

    

    
    SetInternal(val) { this.internal_ = val; }
    Internal() { return this.internal_; }
    

    FromJson(jstr) { const data = JSON.parse(jstr); return this.FromDict(data); }
    ToJson() { return JSON.stringify(this.ToDict()); }

    ToDict() {
        const data = {};
        data["metadata"] = this.meta_;
        
        data["internal"] = this.internal_.ToDict(); 
        return data;
    }

    FromDict(data) {
        for (const key in data) {
            const rawValue = data[key];
            if (rawValue === null || rawValue === undefined) continue;

            if (key === "metadata") {
                this.meta_ = rawValue;
            }

            

            
            if (key === "internal") { this.internal_.FromDict(rawValue); }
            
        }
    }

    Clone() {
        const ret = PageFactory();
        ret.FromJson(this.ToJson());
        return ret;
    }

    Metadata() { return this.meta_; }
    SetMetadata(val) { this.meta_ = val; }

    PrimaryKey() {
        return String(this.Metadata().Identity());
    }
}

function PageIdentity(pkey) {
    return "page/" + pkey;
}

const PageKindIdentity = "page/";

const PageKind = "Page";




class Journey {

    constructor() {
        // throw new Error("cannot initialize like this. use the factory method");
    }

    ToDict() { throw new Error("not implemented"); }
    FromDict(data) { throw new Error("not implemented"); }

    Clone() { throw new Error("not implemented"); }
    Meta() { throw new Error("not implemented"); }

    
    External() { throw new Error("not implemented"); }
    

    
    Internal() { throw new Error("not implemented"); }
    
}

function JourneyFactory() {
    const ret = new _Journey();

    
    ret.external_ = JourneyExternalFactory();
    
    
    ret.internal_ = JourneyInternalFactory();
    

    return ret;
}

class _Journey extends Journey {
    constructor() {
        super();
        this.meta_ = [];
        this.meta_["kind"] = "Journey";
        this.external_ = null;
        this.internal_ = null;
    }

    
    SetExternal(val) { this.external_ = val; }
    External() { return this.external_; }
    

    
    SetInternal(val) { this.internal_ = val; }
    Internal() { return this.internal_; }
    

    FromJson(jstr) { const data = JSON.parse(jstr); return this.FromDict(data); }
    ToJson() { return JSON.stringify(this.ToDict()); }

    ToDict() {
        const data = {};
        data["metadata"] = this.meta_;
        data["external"] = this.external_.ToDict(); 
        data["internal"] = this.internal_.ToDict(); 
        return data;
    }

    FromDict(data) {
        for (const key in data) {
            const rawValue = data[key];
            if (rawValue === null || rawValue === undefined) continue;

            if (key === "metadata") {
                this.meta_ = rawValue;
            }

            
            if (key === "external") { this.external_.FromDict(rawValue); }
            

            
            if (key === "internal") { this.internal_.FromDict(rawValue); }
            
        }
    }

    Clone() {
        const ret = JourneyFactory();
        ret.FromJson(this.ToJson());
        return ret;
    }

    Metadata() { return this.meta_; }
    SetMetadata(val) { this.meta_ = val; }

    PrimaryKey() {
        return String(this.Metadata().Identity());
    }
}

function JourneyIdentity(pkey) {
    return "journey/" + pkey;
}

const JourneyKindIdentity = "journey/";

const JourneyKind = "Journey";





class _Schema {
    constructor(objects) {
        this.objects = objects;
    }

    ObjectForKind(kind) {
        
        if (kind === "Screen") return ScreenFactory();
        else if (kind === "screen") return ScreenFactory();
        
        if (kind === "Page") return PageFactory();
        else if (kind === "page") return PageFactory();
        
        if (kind === "Journey") return JourneyFactory();
        else if (kind === "journey") return JourneyFactory();
        
        throw new Error("object does not exist");
    }

    Types() { return this.objects; }
}

function Schema() {
    const objects = [
        
        "Screen",
        
        "Page",
        
        "Journey",
        
    ];
    return new _Schema(objects);
}