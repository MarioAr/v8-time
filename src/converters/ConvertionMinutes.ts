

export default class ConvertionMinutes {
    static convertFromSeconds(seconds: number): number {
        return Math.floor(((seconds % 86400) % 3600) / 60);
    }
}