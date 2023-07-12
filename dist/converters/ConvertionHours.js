"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ConvertionHours {
    static convertFromSeconds(seconds) {
        return Math.floor((seconds % 86400) / 3600);
    }
}
exports.default = ConvertionHours;
