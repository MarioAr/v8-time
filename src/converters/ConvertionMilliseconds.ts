

export default class ConvertionMiliseconds {

    static convertFromSeconds(seconds: number): number {
        
        return parseInt((
            Math.round(
                (seconds - parseInt(seconds?.toString())) * 1000)
            ).toString()
        );
    }
}