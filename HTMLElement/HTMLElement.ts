import { VnNative3HTMLElementInterFace } from "./interface";
import * as Mustache from "mustache"
export default class VnNative3HTMLElement implements VnNative3HTMLElementInterFace {
    add(root_id : string,html : string,data : any) : void{
        let screen : any;
        screen = document.getElementById(root_id);
        screen.innerHTML += Mustache.render(html, data);
    }
    remove(root_id : string) : void {
        let ele : any;
        ele = document.getElementById(root_id);
        ele.remove();
    }
    make(html : string,data : any) : string {
        return Mustache.render(html, data);
    }
}