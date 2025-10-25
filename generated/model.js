

class ScreenMetadata {
    constructor() {
        // throw new Error("cannot initialize like this. use the factory method");
    }

    ToDict() { throw new Error("not implemented"); }
    FromDict(data) { throw new Error("not implemented"); }

    
    Content() { throw new Error("not implemented"); }
    SetContent(val) { throw new Error("not implemented"); }
    
    Title() { throw new Error("not implemented"); }
    SetTitle(val) { throw new Error("not implemented"); }
    
    Description() { throw new Error("not implemented"); }
    SetDescription(val) { throw new Error("not implemented"); }
    
    Tags() { throw new Error("not implemented"); }
    SetTags(val) { throw new Error("not implemented"); }
    
}

function ScreenMetadataFactory() {
    const ret = new _ScreenMetadata();
    
    ret.content_ = [];
    
    ret.title_ = "";
    
    ret.description_ = "";
    
    ret.tags_ = [];
    
    return ret;
}

class _ScreenMetadata extends ScreenMetadata {
    constructor() {
        super();
        
        this.content_ = [];
        
        this.title_ = "";
        
        this.description_ = "";
        
        this.tags_ = [];
        
    }

    
    SetContent(val) {
        
        this.content_ = val;
        
    }

    Content() {
        
        return this.content_;
        
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

    

    FromJson(jstr) {
        const data = JSON.parse(jstr);
        return this.FromDict(data);
    }

    ToJson() {
        return JSON.stringify(this.ToDict());
    }

    ToDict() {
        const data = {};
        
        
        const rawListcontent = [];
        for (const v of (this.content_ || [])) {
            
            rawListcontent.push(v);
            
        }
        data["content"] = rawListcontent;
        
        
        
        
        data["title"] = this.title_;
        
        
        
        
        
        data["description"] = this.description_;
        
        
        
        
        const rawListtags = [];
        for (const v of (this.tags_ || [])) {
            
            rawListtags.push(v);
            
        }
        data["tags"] = rawListtags;
        
        
        return data;
    }

    FromDict(data) {
        for (const key in data) {
            const rawValue = data[key];
            if (rawValue === null || rawValue === undefined) continue;

            
            if (key === "content") {
                
                const res = [];

                for (const rw of rawValue) {
                    let ud = "";
                    
                    ud = rw;
                    
                    res.push(ud);
                }

                this.content_ = res;
                
            }
            
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
            
        }
    }
}



class ScreenContent {
    constructor() {
        // throw new Error("cannot initialize like this. use the factory method");
    }

    ToDict() { throw new Error("not implemented"); }
    FromDict(data) { throw new Error("not implemented"); }

    
    TextInputs() { throw new Error("not implemented"); }
    SetTextInputs(val) { throw new Error("not implemented"); }
    
    Buttons() { throw new Error("not implemented"); }
    SetButtons(val) { throw new Error("not implemented"); }
    
}

function ScreenContentFactory() {
    const ret = new _ScreenContent();
    
    ret.textInputs_ = [];
    
    ret.buttons_ = [];
    
    return ret;
}

class _ScreenContent extends ScreenContent {
    constructor() {
        super();
        
        this.textInputs_ = [];
        
        this.buttons_ = [];
        
    }

    
    SetTextInputs(val) {
        
        this.textInputs_ = val;
        
    }

    TextInputs() {
        
        return this.textInputs_;
        
    }

    
    SetButtons(val) {
        
        this.buttons_ = val;
        
    }

    Buttons() {
        
        return this.buttons_;
        
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
        
        
        const rawListtextInputs = [];
        for (const v of (this.textInputs_ || [])) {
            
            rawListtextInputs.push(v);
            
        }
        data["textInputs"] = rawListtextInputs;
        
        
        
        const rawListbuttons = [];
        for (const v of (this.buttons_ || [])) {
            
            rawListbuttons.push(v);
            
        }
        data["buttons"] = rawListbuttons;
        
        
        return data;
    }

    FromDict(data) {
        for (const key in data) {
            const rawValue = data[key];
            if (rawValue === null || rawValue === undefined) continue;

            
            if (key === "textInputs") {
                
                const res = [];

                for (const rw of rawValue) {
                    let ud = "";
                    
                    ud = rw;
                    
                    res.push(ud);
                }

                this.textInputs_ = res;
                
            }
            
            if (key === "buttons") {
                
                const res = [];

                for (const rw of rawValue) {
                    let ud = "";
                    
                    ud = rw;
                    
                    res.push(ud);
                }

                this.buttons_ = res;
                
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
    
    RectX() { throw new Error("not implemented"); }
    SetRectX(val) { throw new Error("not implemented"); }
    
    RectY() { throw new Error("not implemented"); }
    SetRectY(val) { throw new Error("not implemented"); }
    
    RectW() { throw new Error("not implemented"); }
    SetRectW(val) { throw new Error("not implemented"); }
    
    RectH() { throw new Error("not implemented"); }
    SetRectH(val) { throw new Error("not implemented"); }
    
    CenterX() { throw new Error("not implemented"); }
    SetCenterX(val) { throw new Error("not implemented"); }
    
    CenterY() { throw new Error("not implemented"); }
    SetCenterY(val) { throw new Error("not implemented"); }
    
}

function ComponentFactory() {
    const ret = new _Component();
    
    ret.identifier_ = "";
    
    ret.rectX_ = 0;
    
    ret.rectY_ = 0;
    
    ret.rectW_ = 0;
    
    ret.rectH_ = 0;
    
    ret.centerX_ = 0;
    
    ret.centerY_ = 0;
    
    return ret;
}

class _Component extends Component {
    constructor() {
        super();
        
        this.identifier_ = "";
        
        this.rectX_ = 0;
        
        this.rectY_ = 0;
        
        this.rectW_ = 0;
        
        this.rectH_ = 0;
        
        this.centerX_ = 0;
        
        this.centerY_ = 0;
        
    }

    
    SetIdentifier(val) {
        
        this.identifier_ = String(val);
        
    }

    Identifier() {
        
        return this.identifier_;
        
    }

    
    SetRectX(val) {
        
        this.rectX_ = Number.parseInt(val);
        
    }

    RectX() {
        
        return this.rectX_;
        
    }

    
    SetRectY(val) {
        
        this.rectY_ = Number.parseInt(val);
        
    }

    RectY() {
        
        return this.rectY_;
        
    }

    
    SetRectW(val) {
        
        this.rectW_ = Number.parseInt(val);
        
    }

    RectW() {
        
        return this.rectW_;
        
    }

    
    SetRectH(val) {
        
        this.rectH_ = Number.parseInt(val);
        
    }

    RectH() {
        
        return this.rectH_;
        
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
        
        
        
        data["identifier"] = this.identifier_;
        
        
        
        
        
        data["rectX"] = this.rectX_;
        
        
        
        
        
        data["rectY"] = this.rectY_;
        
        
        
        
        
        data["rectW"] = this.rectW_;
        
        
        
        
        
        data["rectH"] = this.rectH_;
        
        
        
        
        
        data["centerX"] = this.centerX_;
        
        
        
        
        
        data["centerY"] = this.centerY_;
        
        
        
        return data;
    }

    FromDict(data) {
        for (const key in data) {
            const rawValue = data[key];
            if (rawValue === null || rawValue === undefined) continue;

            
            if (key === "identifier") {
                
                
                this.identifier_ = rawValue;
                

                
            }
            
            if (key === "rectX") {
                
                
                this.rectX_ = rawValue;
                

                
            }
            
            if (key === "rectY") {
                
                
                this.rectY_ = rawValue;
                

                
            }
            
            if (key === "rectW") {
                
                
                this.rectW_ = rawValue;
                

                
            }
            
            if (key === "rectH") {
                
                
                this.rectH_ = rawValue;
                

                
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
    
    Steps() { throw new Error("not implemented"); }
    SetSteps(val) { throw new Error("not implemented"); }
    
}

function EdgeFactory() {
    const ret = new _Edge();
    
    ret.targetScreenIdentifier_ = "";
    
    ret.component_ = ComponentFactory();
    
    ret.steps_ = [];
    
    return ret;
}

class _Edge extends Edge {
    constructor() {
        super();
        
        this.targetScreenIdentifier_ = "";
        
        this.component_ = ComponentFactory();
        
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
        
        
        const rawSubmap = {};
        for (const k in (this.textFields_ || {})) {
            const v = this.textFields_[k];
            
            rawSubmap[k] = v;
            
        }
        data["textFields"] = rawSubmap;
        
        
        
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



class ScreenExternal {
    constructor() {
        // throw new Error("cannot initialize like this. use the factory method");
    }

    ToDict() { throw new Error("not implemented"); }
    FromDict(data) { throw new Error("not implemented"); }

    
    Journey() { throw new Error("not implemented"); }
    SetJourney(val) { throw new Error("not implemented"); }
    
    Identifier() { throw new Error("not implemented"); }
    SetIdentifier(val) { throw new Error("not implemented"); }
    
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

function ScreenExternalFactory() {
    const ret = new _ScreenExternal();
    
    ret.journey_ = "";
    
    ret.identifier_ = "";
    
    ret.edges_ = [];
    
    ret.image_ = "";
    
    ret.imageLowRes_ = "";
    
    ret.isEntryPoint_ = false;
    
    ret.content_ = ScreenContentFactory();
    
    ret.metadata_ = ScreenMetadataFactory();
    
    return ret;
}

class _ScreenExternal extends ScreenExternal {
    constructor() {
        super();
        
        this.journey_ = "";
        
        this.identifier_ = "";
        
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







class Screen {

    constructor() {
        // throw new Error("cannot initialize like this. use the factory method");
    }

    ToDict() { throw new Error("not implemented"); }
    FromDict(data) { throw new Error("not implemented"); }

    Clone() { throw new Error("not implemented"); }
    Meta() { throw new Error("not implemented"); }

    
    External() { throw new Error("not implemented"); }
    

    
}

function ScreenFactory() {
    const ret = new _Screen();

    
    ret.external_ = ScreenExternalFactory();
    
    

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

    
    SetExternal(val) { this.external_ = val; }
    External() { return this.external_; }
    

    

    FromJson(jstr) { const data = JSON.parse(jstr); return this.FromDict(data); }
    ToJson() { return JSON.stringify(this.ToDict()); }

    ToDict() {
        const data = {};
        data["metadata"] = this.meta_;
        data["external"] = this.external_.ToDict(); 
        
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
        
        if (kind === "Journey") return JourneyFactory();
        else if (kind === "journey") return JourneyFactory();
        
        throw new Error("object does not exist");
    }

    Types() { return this.objects; }
}

function Schema() {
    const objects = [
        
        "Screen",
        
        "Journey",
        
    ];
    return new _Schema(objects);
}