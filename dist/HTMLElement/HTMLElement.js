"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Mustache = require("mustache");
var VnNative3HTMLElement = /** @class */ (function () {
    function VnNative3HTMLElement() {
    }
    VnNative3HTMLElement.prototype.add = function (root_id, html, data) {
        var screen;
        screen = document.getElementById(root_id);
        screen.innerHTML += Mustache.render(html, data);
        return new VnNative3HTMLElement;
    };
    VnNative3HTMLElement.prototype.remove = function (root_id) {
        var ele;
        ele = document.getElementById(root_id);
        ele.remove();
        return new VnNative3HTMLElement;
    };
    VnNative3HTMLElement.prototype.head = function (set) {
        document.title = set && set.title ? set.title : "Vn Native Framework - V3";
        document.title += ' | ' + (set && set.slogan ? set.slogan : "Cross framework");
        return new VnNative3HTMLElement;
    };
    VnNative3HTMLElement.prototype.make = function (html, data) {
        return Mustache.render(html, data);
    };
    VnNative3HTMLElement.prototype.next = function (callback) {
        callback();
        return new VnNative3HTMLElement;
    };
    VnNative3HTMLElement.prototype.addScript = function (url) {
        var script;
        script = document.createElement("script");
        script.setAttribute("src", url);
        document.body.appendChild(script);
        return new VnNative3HTMLElement;
    };
    VnNative3HTMLElement.prototype.addScriptModule = function (url) {
        var script;
        script = document.createElement("script");
        script.setAttribute("src", url);
        script.setAttribute("type", "module");
        document.body.appendChild(script);
        return new VnNative3HTMLElement;
    };
    return VnNative3HTMLElement;
}());
exports.default = VnNative3HTMLElement;
