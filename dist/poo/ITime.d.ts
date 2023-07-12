import { TimeShow } from "./Types";
export default interface ITime {
    get seconds(): number;
    get miliseconds(): number;
    get timeShow(): TimeShow;
    get rawTime(): string;
}
