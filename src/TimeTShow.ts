import TimeRaw from "./TimeRaw";
import TimeShow, { TimeConvertion } from "./main";


export default class TimeTShow extends TimeRaw {
    
    constructor(time: TimeShow) {
        super(TimeConvertion.timeShowToString(time));
    }
}