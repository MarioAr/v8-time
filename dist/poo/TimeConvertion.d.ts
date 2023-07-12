import { TimeShow } from "./Types";
export declare class TimeConvertion {
    static timeShowToString(timeShow: TimeShow, separators?: string[], addFinishValue?: boolean): string;
    private static addMultipleSeparator;
    static matchArrays(values1: any[], values2: any[]): any[];
    private static getMilliseconds;
    private static calculateCount;
}
