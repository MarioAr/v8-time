"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ConvertionMinutes {
    static convertFromSeconds(seconds) {
        return Math.floor(((seconds % 86400) % 3600) / 60);
    }
}
exports.default = ConvertionMinutes;
