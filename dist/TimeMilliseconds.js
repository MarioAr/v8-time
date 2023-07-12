"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TimeSeconds_1 = require("./TimeSeconds");
class TimeMilliseconds extends TimeSeconds_1.default {
    constructor(milliseconds) {
        super(milliseconds / 1000);
    }
}
exports.default = TimeMilliseconds;
