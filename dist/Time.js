"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ConvertionSeconds_1 = require("./converters/ConvertionSeconds");
class Time {
    constructor() {
        this._rawTime = '';
        this._seconds = 0;
    }
    //#region Getters & Setters
    get rawTime() {
        return this._rawTime;
    }
    get seconds() {
        return this._seconds;
    }
    get miliseconds() {
        const mili = this._seconds * 1000;
        return Math.round(mili);
    }
    get timeShow() {
        return ConvertionSeconds_1.default.toTimeShow(this._seconds);
    }
    //#endregion
    setSeconds(n) {
        if (n < 0)
            n = 0;
        if (isNaN(n))
            n = 0;
        this._seconds = n;
    }
}
exports.default = Time;
