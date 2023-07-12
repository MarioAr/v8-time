import Time from "./Time";
/**
 * Recibe el tiempo en formato string y lo transforma a segundos.
 */
export default class TimeRaw extends Time {
    constructor(rawTime: string);
    private transformRawTimeToSeconds;
    private convertStingToArray;
}
