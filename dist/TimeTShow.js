"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TimeRaw_1 = require("./TimeRaw");
const main_1 = require("./main");
class TimeTShow extends TimeRaw_1.default {
    constructor(time) {
        super(main_1.TimeConvertion.timeShowToString(time));
    }
}
exports.default = TimeTShow;
