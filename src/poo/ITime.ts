import { TimeShow } from "./Types";

export default interface ITime {
    // _seconds: number;

    get seconds(): number;
    get miliseconds(): number;
    get timeShow(): TimeShow;
    get rawTime(): string;

    // setSeconds(n: number): void;
}