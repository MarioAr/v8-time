"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ConvertionDays_1 = require("./ConvertionDays");
const ConvertionHours_1 = require("./ConvertionHours");
const ConvertionMilliseconds_1 = require("./ConvertionMilliseconds");
const ConvertionMinutes_1 = require("./ConvertionMinutes");
const Validation_1 = require("../poo/Validation");
const TimeSeconds_1 = require("../TimeSeconds");
class ConvertionSeconds {
    static convertArrayToSeconds(times) {
        let d = 0, h = 0, m = 0, s = 0, dd = 0;
        let [days, hours, minutes, seconds, miliseconds] = times;
        if (days)
            d = ConvertionSeconds.convertFromDays(days);
        if (hours)
            h = ConvertionSeconds.convertFromHours(hours);
        if (minutes)
            m = ConvertionSeconds.convertFromMinutes(minutes);
        if (seconds)
            s = seconds;
        if (miliseconds)
            dd = ConvertionSeconds.convertFromMilesimas(miliseconds);
        return d + h + m + s + dd;
    }
    static convertFromDays(days) {
        if (!Validation_1.default.isNumber(days))
            return 0;
        return days * 86400;
    }
    static convertFromHours(hours) {
        if (!Validation_1.default.isNumber(hours))
            return 0;
        return hours * 3600;
    }
    static convertFromMinutes(minutes) {
        if (!Validation_1.default.isNumber(minutes))
            return 0;
        return minutes * 60;
    }
    static convertFromMilesimas(milesimas) {
        let mil = milesimas;
        if (!Validation_1.default.isNumber(milesimas))
            return 0;
        return mil / 1000;
    }
    static toString(seconds) {
        const sec = new TimeSeconds_1.default(seconds);
        return sec.timeFormatted;
        // const timeShow = ConvertionSeconds.toTimeShow(seconds);
        // return TimeConvertion.timeShowToString(timeShow);
    }
    static toTimeShow(seconds) {
        const time = {};
        const _seconds = parseInt(seconds.toString());
        // TODO Estos metodos tendrian que tener su propia clase.
        time.days = ConvertionDays_1.default.convertFromSeconds(_seconds);
        // time.days = Math.floor(_seconds / 86400);
        time.hours = ConvertionHours_1.default.convertFromSeconds(_seconds);
        // time.hours = Math.floor((_seconds % 86400) / 3600);
        time.minutes = ConvertionMinutes_1.default.convertFromSeconds(_seconds);
        // time.minutes = Math.floor(((_seconds % 86400) % 3600) / 60);
        time.seconds = Math.floor(((_seconds % 86400) % 3600) % 60);
        // time.seconds = Math.floor(((_seconds % 86400) % 3600) % 60);
        // TODO WARNING: miliseconds are not exact. WTF?
        time.milliseconds = ConvertionMilliseconds_1.default.convertFromSeconds(seconds);
        time.count = ConvertionSeconds.countZeros(time);
        return Object.assign({}, time);
    }
    static countZeros(time) {
        let count = 2;
        if (time.days !== 0)
            count = 5;
        else if (time.hours !== 0)
            count = 4;
        else if (time.minutes !== 0)
            count = 3;
        return count;
    }
}
exports.default = ConvertionSeconds;
