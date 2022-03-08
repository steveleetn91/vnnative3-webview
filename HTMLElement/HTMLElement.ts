import { VnNative3HTMLElementInterFace } from "./interface";
import * as Mustache from "mustache"
export default class VnNative3HTMLElement implements VnNative3HTMLElementInterFace {
    add(root_id : string,html : string,data : any) : VnNative3HTMLElementInterFace{
        let screen : HTMLElement | null;
        screen = document.getElementById(root_id);
        screen!.innerHTML += Mustache.render(html, data);
        return new VnNative3HTMLElement;
    }
    empty(root_id : string) : VnNative3HTMLElementInterFace{
        let screen : HTMLElement | null;
        screen = document.getElementById(root_id);
        screen!.innerHTML = "";
        return new VnNative3HTMLElement;
    }
    remove(root_id : string) : VnNative3HTMLElementInterFace {
        let ele : HTMLElement | null;
        ele = document.getElementById(root_id);
        ele?.remove();
        return new VnNative3HTMLElement;
    }
    head(set: any): VnNative3HTMLElementInterFace {
        document.title = set && set.title ? set.title  : "Vn Native Framework - V3"; 
        document.title += ' | ' + (set && set.slogan ? set.slogan  : "Cross framework"); 
        return new VnNative3HTMLElement;
    }
    make(html : string,data : any) : string {
        return Mustache.render(html, data);
    }
    next(callback : any) : VnNative3HTMLElementInterFace {
        callback();
        return new VnNative3HTMLElement;
    }
    addScript(url : string) : VnNative3HTMLElementInterFace {
        let script : HTMLScriptElement;
        script = document.createElement("script");
        script.setAttribute("src",url);
        document.body.appendChild(script);
        return new VnNative3HTMLElement;
    }
    addScriptModule(url : string) : VnNative3HTMLElementInterFace {
        let script : HTMLScriptElement;
        script = document.createElement("script");
        script.setAttribute("src",url);
        script.setAttribute("type","module");
        document.body.appendChild(script);
        return new VnNative3HTMLElement;
    }
}