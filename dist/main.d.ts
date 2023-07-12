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
import { TimeShow as TS } from "./poo/Types";
import Validation from "./poo/Validation";
declare const Converters: {
    Constants: typeof Constants;
    ConvertionDays: typeof ConvertionDays;
    ConvertionHours: typeof ConvertionHours;
    ConvertionMinutes: typeof ConvertionMinutes;
    ConvertionSeconds: typeof ConvertionSeconds;
    ConvertionMilliseconds: typeof ConvertionMilliseconds;
};
declare const poo: {
    Validation: typeof Validation;
    TimeConvertion: typeof TimeConvertion;
};
export { TimeRaw, TimeTShow, TimeSeconds, TimeMilliseconds, TimeConvertion, TimeShow, TS, Converters, poo };
export default TimeShow;
