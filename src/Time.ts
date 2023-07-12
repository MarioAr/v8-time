import ITime from "./poo/ITime";
import { TimeShow } from "./poo/Types";
import SecondsConvertion from "./converters/ConvertionSeconds";

export default abstract class Time implements ITime {
    protected _rawTime: string;
    protected _seconds: number;

    constructor() {
        this._rawTime = '';
        this._seconds = 0;
    }

    //#region Getters & Setters
    get rawTime(): string {
        return this._rawTime;
    }

    public get seconds(): number {
        return this._seconds;
    }

    public get miliseconds(): number {
        const mili = this._seconds * 1000;
        
        return Math.round(mili);
    }

    public get timeShow(): TimeShow {
        
        return SecondsConvertion.toTimeShow(this._seconds);
    }
    //#endregion


    protected setSeconds(n: number): void
    {
        if (n < 0) n = 0;
        if (isNaN(n)) n = 0;

        this._seconds = n;
    }
}