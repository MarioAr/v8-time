

export default class ConvertionHours {
    static convertFromSeconds(seconds: number): number {
        return Math.floor((seconds % 86400) / 3600);
    }
}