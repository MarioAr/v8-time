"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Validation {
    static isNumber(value) {
        return typeof value === 'number' && !isNaN(value);
    }
    static isInt(value) {
        return Validation.isNumber(value) && Number.isInteger(value);
    }
    static isPositive(value) {
        return Validation.isNumber(value) && value > 0;
    }
    static toIntOrZero(value) {
        return Validation.isInt(parseInt(value)) ? parseInt(value) : 0;
    }
    static toFloatOrZero(value) {
        return Validation.isNumber(parseFloat(value)) ? parseFloat(value) : 0;
        // return TimeValidation.isNumber(value) ? value : 0;
    }
}
exports.default = Validation;
