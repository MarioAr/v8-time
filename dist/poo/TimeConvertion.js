"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeConvertion = void 0;
const Constants_1 = require("../converters/Constants");
class TimeConvertion {
    static timeShowToString(timeShow, separators, addFinishValue) {
        const _separators = separators !== null && separators !== void 0 ? separators : Constants_1.default.INITIALS;
        const { days, hours, minutes, seconds, milliseconds } = timeShow;
        const count = TimeConvertion.calculateCount(timeShow);
        // Lo hago a mano para que no haya errores en caso de que cambie TimeShow.
        const list = [days, hours, minutes, seconds, milliseconds].map(t => { var _a; return (_a = t === null || t === void 0 ? void 0 : t.toString()) !== null && _a !== void 0 ? _a : ''; });
        list[4] = TimeConvertion.getMilliseconds(milliseconds);
        // Ajusto tamano de la lista a valores validos.
        const filterList = list.filter((_, index) => index >= list.length - (count !== null && count !== void 0 ? count : 5));
        return TimeConvertion.addMultipleSeparator(filterList, _separators, addFinishValue);
    }
    static addMultipleSeparator(values, separator, addFinishValue) {
        let str = '';
        if (!Array.isArray(separator))
            return '';
        const separatorMatched = TimeConvertion.matchArrays(values, separator);
        values.forEach((value, index) => {
            var _a;
            const sep = (_a = separatorMatched[index]) !== null && _a !== void 0 ? _a : Constants_1.default.SEPARATOR;
            if (index === values.length - 1 && !addFinishValue)
                str += `${value}`;
            else
                str += `${value}${sep}`;
        });
        return str;
    }
    static matchArrays(values1, values2) {
        const count1 = values1.length; // 3
        const count2 = values2.length; // 5
        if (count1 === count2)
            return values2;
        if (count1 < count2) {
            return values2.filter((_, index) => index >= count2 - count1);
        }
        return values2;
    }
    static getMilliseconds(seconds) {
        var _a;
        const s = (_a = seconds === null || seconds === void 0 ? void 0 : seconds.toString()) !== null && _a !== void 0 ? _a : '0';
        // fill 3 with zeros.
        const ms = s.padStart(3, '0');
        return ms;
    }
    static calculateCount(timeShow) {
        const { days, hours, minutes, seconds, milliseconds } = timeShow;
        if (days)
            return 5;
        if (hours)
            return 4;
        if (minutes)
            return 3;
        if (seconds)
            return 2;
        if (milliseconds)
            return 1;
        return 0;
    }
}
exports.TimeConvertion = TimeConvertion;
