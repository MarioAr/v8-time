"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.poo = exports.Converters = exports.TimeConvertion = exports.TimeMilliseconds = exports.TimeSeconds = exports.TimeTShow = exports.TimeRaw = void 0;
const TimeMilliseconds_1 = require("./TimeMilliseconds");
exports.TimeMilliseconds = TimeMilliseconds_1.default;
const TimeRaw_1 = require("./TimeRaw");
exports.TimeRaw = TimeRaw_1.default;
const TimeSeconds_1 = require("./TimeSeconds");
exports.TimeSeconds = TimeSeconds_1.default;
const TimeTShow_1 = require("./TimeTShow");
exports.TimeTShow = TimeTShow_1.default;
const Constants_1 = require("./converters/Constants");
const ConvertionDays_1 = require("./converters/ConvertionDays");
const ConvertionHours_1 = require("./converters/ConvertionHours");
const ConvertionMilliseconds_1 = require("./converters/ConvertionMilliseconds");
const ConvertionMinutes_1 = require("./converters/ConvertionMinutes");
const ConvertionSeconds_1 = require("./converters/ConvertionSeconds");
const TimeConvertion_1 = require("./poo/TimeConvertion");
Object.defineProperty(exports, "TimeConvertion", { enumerable: true, get: function () { return TimeConvertion_1.TimeConvertion; } });
const Validation_1 = require("./poo/Validation");
const Converters = {
    Constants: Constants_1.default,
    ConvertionDays: ConvertionDays_1.default,
    ConvertionHours: ConvertionHours_1.default,
    ConvertionMinutes: ConvertionMinutes_1.default,
    ConvertionSeconds: ConvertionSeconds_1.default,
    ConvertionMilliseconds: ConvertionMilliseconds_1.default,
};
exports.Converters = Converters;
const poo = {
    Validation: Validation_1.default,
    TimeConvertion: TimeConvertion_1.TimeConvertion,
    // TimeShow,
};
exports.poo = poo;
// export { TimeRaw, TimeSeconds, TimeMilliseconds, TimeConvertion, A, type TimeShow, Converters };
// const txt = '0--1-21-422'; //
// const t = new TimeRaw(txt);
// console.log(txt);
// // console.log(t);
// const seconds = t.seconds;
// const ts = new TimeSeconds(seconds);
// // ts.addFinishSeparator = !true;
// // ts.separators = ['dd', 'hh', 'mm', 'ss', 'ms'].map(t => `${t.toUpperCase()} `);
// console.log('============================================');
// ts.separators = ['x']
// console.log(ts.timeFormatted);
// console.log(ts.seconds);
