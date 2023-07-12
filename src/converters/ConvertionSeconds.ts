import ConvertionDays from "./ConvertionDays";
import ConvertionHours from "./ConvertionHours";
import ConvertionMiliseconds from "./ConvertionMilliseconds";
import ConvertionMinutes from "./ConvertionMinutes";
import { TimeShow } from "../poo/Types";
import Validation from "../poo/Validation";
import TimeSeconds from "../TimeSeconds";


export default class ConvertionSeconds {

    static convertArrayToSeconds(times: number[]): number {
        let d = 0, h = 0, m = 0, s = 0, dd = 0; 
        let [days, hours, minutes, seconds, miliseconds] = times;
        
        if (days) d = ConvertionSeconds.convertFromDays(days);
        if (hours) h = ConvertionSeconds.convertFromHours(hours);
        if (minutes) m = ConvertionSeconds.convertFromMinutes(minutes);
        if (seconds) s = seconds;
        if (miliseconds) dd = ConvertionSeconds.convertFromMilesimas(miliseconds);

        return d + h + m + s + dd;
    }


    
    static convertFromDays(days: number): number {

        if (!Validation.isNumber(days)) return 0;

        return days * 86400;
    }

    static convertFromHours(hours: number): number {
            
        if (!Validation.isNumber(hours)) return 0;

        return hours * 3600;
    }

    static convertFromMinutes(minutes: number): number {
                
        if (!Validation.isNumber(minutes)) return 0;

        return minutes * 60;
    }

    static convertFromMilesimas(milesimas: number): number {

        let mil = milesimas;

        if (!Validation.isNumber(milesimas)) return 0;
      
        return mil / 1000;
    }

    static toString(seconds: number): string {
        const sec = new TimeSeconds(seconds);

        return sec.timeFormatted;
        // const timeShow = ConvertionSeconds.toTimeShow(seconds);
        
        // return TimeConvertion.timeShowToString(timeShow);
    }

    static toTimeShow(seconds: number): TimeShow {
        const time: TimeShow = {} as unknown as TimeShow;

        const _seconds = parseInt(seconds.toString());
        // TODO Estos metodos tendrian que tener su propia clase.
        time.days = ConvertionDays.convertFromSeconds(_seconds);
        // time.days = Math.floor(_seconds / 86400);

        time.hours = ConvertionHours.convertFromSeconds(_seconds);
        // time.hours = Math.floor((_seconds % 86400) / 3600);
        
        time.minutes = ConvertionMinutes.convertFromSeconds(_seconds);
        // time.minutes = Math.floor(((_seconds % 86400) % 3600) / 60);
        
        time.seconds = Math.floor(((_seconds % 86400) % 3600) % 60);
        // time.seconds = Math.floor(((_seconds % 86400) % 3600) % 60);

        // TODO WARNING: miliseconds are not exact. WTF?
        time.milliseconds = ConvertionMiliseconds.convertFromSeconds(seconds);
        
        time.count = ConvertionSeconds.countZeros(time);

        return { ...time };
    }

    
    private static countZeros(time: TimeShow): number {
        let count = 2;

        if (time.days !== 0) count = 5;
        else if (time.hours !== 0) count = 4;
        else if (time.minutes !== 0) count = 3;
        
        return count;
    }
}