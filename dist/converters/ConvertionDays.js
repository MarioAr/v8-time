"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ConvertionDays {
    static convertFromSeconds(seconds) {
        return Math.floor(seconds / 86400);
    }
}
exports.default = ConvertionDays;
