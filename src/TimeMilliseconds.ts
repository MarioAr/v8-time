import TimeSeconds from "./TimeSeconds";

export default class TimeMilliseconds extends TimeSeconds {
    
    constructor(milliseconds: number) {
        super(milliseconds / 1000);
    }
}