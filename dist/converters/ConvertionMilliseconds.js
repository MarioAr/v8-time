"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ConvertionMiliseconds {
    static convertFromSeconds(seconds) {
        return parseInt((Math.round((seconds - parseInt(seconds === null || seconds === void 0 ? void 0 : seconds.toString())) * 1000)).toString());
    }
}
exports.default = ConvertionMiliseconds;
