"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Constants {
}
Constants.SEPARATOR = ' ';
Constants.INITIALS = ['d', 'h', "'", "''", 'ms'].map((t, i) => i !== 4 ? `${t}${Constants.SEPARATOR}` : t);
exports.default = Constants;
