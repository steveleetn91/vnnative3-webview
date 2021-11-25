import { VnNative3HTMLElementInterFace } from "./interface";

export default class VnNative3HTMLElement implements VnNative3HTMLElementInterFace {
    add(root_id : string,html : string,data : any) : void{
        var Mustache = require('mustache');
        document.getElementById(root_id).innerHTML += Mustache.render(html, data);
    }
    update(root_id : string,html : string,data : any) : void{
        var Mustache = require('mustache');
        document.getElementById(root_id).innerHTML = Mustache.render(html, data);
    }
    remove(root_id : string) : void {
        document.getElementById(root_id).innerHTML = "";
    }
    make(html : string,data : any) : string {
        var Mustache = require('mustache');
        return Mustache.render(html, data);
    }
}