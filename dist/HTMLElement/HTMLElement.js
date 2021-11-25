"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Mustache = require("mustache");
var VnNative3HTMLElement = /** @class */ (function () {
    function VnNative3HTMLElement() {
    }
    VnNative3HTMLElement.prototype.add = function (root_id, html, data) {
        var screen;
        screen = document.getElementById(root_id);
        screen += Mustache.render(html, data);
    };
    VnNative3HTMLElement.prototype.update = function (root_id, html, data) {
        var screen;
        screen = document.getElementById(root_id);
        screen = Mustache.render(html, data);
    };
    VnNative3HTMLElement.prototype.remove = function (root_id) {
        var screen;
        screen = document.getElementById(root_id);
        screen = "";
    };
    VnNative3HTMLElement.prototype.make = function (html, data) {
        return Mustache.render(html, data);
    };
    return VnNative3HTMLElement;
}());
exports.default = VnNative3HTMLElement;
