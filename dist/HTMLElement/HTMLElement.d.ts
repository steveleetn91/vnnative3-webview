import { VnNative3HTMLElementInterFace } from "./interface";
export default class VnNative3HTMLElement implements VnNative3HTMLElementInterFace {
    add(root_id: string, html: string, data: any): VnNative3HTMLElementInterFace;
    remove(root_id: string): VnNative3HTMLElementInterFace;
    head(set: any): VnNative3HTMLElementInterFace;
    make(html: string, data: any): string;
    next(callback: any): VnNative3HTMLElementInterFace;
    addScript(url: string): VnNative3HTMLElementInterFace;
    addScriptModule(url: string): VnNative3HTMLElementInterFace;
}
