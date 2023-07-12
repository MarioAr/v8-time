"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Time_1 = require("./Time");
const Constants_1 = require("./converters/Constants");
class TimeSeconds extends Time_1.default {
    constructor(seconds) {
        super();
        this._separators = Constants_1.default.INITIALS;
        this._addFinishSeparator = !false;
        this._seconds = seconds;
    }
    //#region Getters and Setters
    get timeFormatted() {
        return this.timeShowToString();
    }
    get separators() {
        return this._separators;
    }
    get addFinishSeparator() {
        return this._addFinishSeparator;
    }
    set separators(separators) {
        this._separators = separators;
    }
    set addFinishSeparator(value) {
        this._addFinishSeparator = value;
    }
    //#endregion
    //#region Privates
    timeShowToString() {
        // const _separators = this._separators ?? Constants.INITIALS;
        const { days, hours, minutes, seconds, milliseconds, count } = this.timeShow;
        // Lo hago a mano para que no haya errores en caso de que cambie TimeShow.
        const list = [days, hours, minutes, seconds, milliseconds].map(t => t.toString());
        const mili = list[4];
        // TODO Hacer esto para todos los valores (minutos y segundos).
        // complete left zero to fill 3.
        list[4] = mili.length === 1 ? `00${mili}` : mili.length === 2 ? `0${mili}` : mili;
        // complete letf zero to fill 2.
        list[3] = list[3].length === 1 ? `0${list[3]}` : list[3];
        // complete left zero to fill 2.
        list[2] = list[2].length === 1 ? `0${list[2]}` : list[2];
        // Ajusto tamano de la lista a valores validos.
        const filterList = list.filter((_, index) => index >= list.length - count);
        return this.addMultipleSeparator(filterList); //, this._separators, this._addFinishSeparator);
    }
    addMultipleSeparator(values) {
        var _a;
        let str = '';
        const separator = (_a = this._separators) !== null && _a !== void 0 ? _a : Constants_1.default.INITIALS;
        if (!Array.isArray(separator))
            return '';
        const separatorMatched = this.matchArrays(values, separator);
        values.forEach((value, index) => {
            var _a, _b;
            const sep = (_a = separatorMatched[index]) !== null && _a !== void 0 ? _a : ((_b = separator[0]) !== null && _b !== void 0 ? _b : Constants_1.default.SEPARATOR); // TODO: Lo recibo por prop???.
            if (index === values.length - 1 && !this._addFinishSeparator)
                str += `${value}`;
            else
                str += `${value}${sep}`;
        });
        return str;
    }
    matchArrays(values1, values2) {
        const count1 = values1.length; // 3
        const count2 = values2.length; // 5
        if (count1 === count2)
            return values2;
        if (count1 < count2) {
            return values2.filter((_, index) => index >= count2 - count1);
        }
        return values2;
    }
}
exports.default = TimeSeconds;
/**
1
4
2
8888888
LUCIO RAMPI
PAULITA RAMPI
JULI RAMPI







 */ 
