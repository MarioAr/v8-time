import TimeMilliseconds from "./TimeMilliseconds";
import TimeRaw from "./TimeRaw";
import TimeSeconds from "./TimeSeconds";
import TimeTShow from "./TimeTShow";
import Constants from "./converters/Constants";
import ConvertionDays from "./converters/ConvertionDays";
import ConvertionHours from "./converters/ConvertionHours";
import ConvertionMilliseconds from "./converters/ConvertionMilliseconds";
import ConvertionMinutes from "./converters/ConvertionMinutes";
import ConvertionSeconds from "./converters/ConvertionSeconds";
import { TimeConvertion } from "./poo/TimeConvertion";

import TimeShow from "./poo/Types";
import {TimeShow as TS} from "./poo/Types";
import Validation from "./poo/Validation";

const Converters = {
    Constants,
    ConvertionDays,
    ConvertionHours,
    ConvertionMinutes,
    ConvertionSeconds,
    ConvertionMilliseconds,
}
const poo = {
    Validation,
    TimeConvertion,
    // TimeShow,
}

export { 
    TimeRaw, 
    TimeTShow,
    TimeSeconds, 
    TimeMilliseconds, 
    TimeConvertion, 
    TimeShow, 
    TS, 
    Converters, 
    poo 
};

export default TimeShow;
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