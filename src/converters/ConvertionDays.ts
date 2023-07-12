

export default class ConvertionDays {

    static convertFromSeconds(seconds: number): number {
        return Math.floor(seconds / 86400);
    }
}