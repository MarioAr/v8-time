import { TimeShow } from "./Types";
import Constants from "../converters/Constants";


export class TimeConvertion {

 

    static timeShowToString(timeShow: TimeShow, separators?: string[], addFinishValue?: boolean): string {
        const _separators = separators ?? Constants.INITIALS;
        
        const { days, hours, minutes, seconds, milliseconds } = timeShow;
        const count = TimeConvertion.calculateCount(timeShow);
        // Lo hago a mano para que no haya errores en caso de que cambie TimeShow.
        const list = [days, hours, minutes, seconds, milliseconds].map(t => t?.toString() ?? '');
        list[4] = TimeConvertion.getMilliseconds(milliseconds);
        
        // Ajusto tamano de la lista a valores validos.
        const filterList = list.filter((_, index) => index >= list.length - (count ?? 5));        
                
        return TimeConvertion.addMultipleSeparator(filterList, _separators, addFinishValue);
    }

    private static addMultipleSeparator(values: number[] | string[], separator: string [], addFinishValue?: boolean): string {
        let str = '';
        
        if (!Array.isArray(separator)) return '';
        
        const separatorMatched = TimeConvertion.matchArrays(values, separator);

        values.forEach((value, index) => {
            const sep = separatorMatched[index] ?? Constants.SEPARATOR;

            if (index === values.length - 1 && !addFinishValue)
                str += `${value}`;
            else 
                str += `${value}${sep}`;
        });

        return str;
    }

    static matchArrays (values1: any[], values2: any[]): any[] {
        const count1 = values1.length; // 3
        const count2 = values2.length; // 5

        if (count1 === count2) return values2;

        if (count1 < count2) {
            
            return values2.filter((_, index) => index >= count2 - count1);
        }

        return values2;
    }

    private static getMilliseconds(seconds: number): string {
        const s = seconds?.toString() ?? '0';
        // fill 3 with zeros.
        const ms = s.padStart(3, '0');

        return ms;
    }

    private static calculateCount(timeShow: TimeShow): number {

        const { days, hours, minutes, seconds, milliseconds } = timeShow;

        if (days) return 5;
        if (hours) return 4;
        if (minutes) return 3;
        if (seconds) return 2;
        if (milliseconds) return 1;

        return 0;
    }
}