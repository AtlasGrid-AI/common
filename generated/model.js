

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
    
    Tags() { throw new Error("not implemented"); }
    SetTags(val) { throw new Error("not implemented"); }
    
}

function ScreenMetadataFactory() {
    const ret = new _ScreenMetadata();
    
    ret.content_ = [];
    
    ret.title_ = "";
    
    ret.tags_ = [];
    
    return ret;
}

class _ScreenMetadata extends ScreenMetadata {
    constructor() {
        super();
        
        this.content_ = [];
        
        this.title_ = "";
        
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
            
            if (key === "metadata") {
                
                
                this.metadata_.FromDict(rawValue);
                

                
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





class _Schema {
    constructor(objects) {
        this.objects = objects;
    }

    ObjectForKind(kind) {
        
        if (kind === "Screen") return ScreenFactory();
        else if (kind === "screen") return ScreenFactory();
        
        throw new Error("object does not exist");
    }

    Types() { return this.objects; }
}

function Schema() {
    const objects = [
        
        "Screen",
        
    ];
    return new _Schema(objects);
}