import ITime from "./poo/ITime";
import { TimeShow } from "./poo/Types";
export default abstract class Time implements ITime {
    protected _rawTime: string;
    protected _seconds: number;
    constructor();
    get rawTime(): string;
    get seconds(): number;
    get miliseconds(): number;
    get timeShow(): TimeShow;
    protected setSeconds(n: number): void;
}
