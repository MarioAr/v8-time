import { TimeShow } from "../poo/Types";
export default class ConvertionSeconds {
    static convertArrayToSeconds(times: number[]): number;
    static convertFromDays(days: number): number;
    static convertFromHours(hours: number): number;
    static convertFromMinutes(minutes: number): number;
    static convertFromMilesimas(milesimas: number): number;
    static toString(seconds: number): string;
    static toTimeShow(seconds: number): TimeShow;
    private static countZeros;
}
