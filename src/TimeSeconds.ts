import Time from "./Time";
import Constants from "./converters/Constants";

export default class TimeSeconds extends Time {
    private _separators: string[] = Constants.INITIALS;
    private _addFinishSeparator: boolean = !false;
    
    constructor(seconds: number) {
        super();
        this._seconds = seconds;
    }

    //#region Getters and Setters
    get timeFormatted(): string {
        return this.timeShowToString();
    }

    get separators(): string[] {
        return this._separators;
    }

    get addFinishSeparator(): boolean {
        return this._addFinishSeparator;
    }

    set separators(separators: string[]) {
        this._separators = separators;
    }

    set addFinishSeparator(value: boolean) {
        this._addFinishSeparator = value;
    }
    //#endregion

    //#region Privates
    private timeShowToString(): string {
        // const _separators = this._separators ?? Constants.INITIALS;
        
        const { days, hours, minutes, seconds, milliseconds, count } = this.timeShow;
        // Lo hago a mano para que no haya errores en caso de que cambie TimeShow.
        const list = [days, hours, minutes, seconds, milliseconds].map(t => t.toString());
        const mili = list[4];

        // TODO Hacer esto para todos los valores (minutos y segundos).
        // complete left zero to fill 3.
        list[4] = mili.length === 1 ? `00${mili}` : mili.length === 2 ? `0${mili}` : mili;

        // complete letf zero to fill 2.
        list[3] = list[3].length === 1 ? `0${list[3]}` : list[3];

        // complete left zero to fill 2.
        list[2] = list[2].length === 1 ? `0${list[2]}` : list[2];
        
        // Ajusto tamano de la lista a valores validos.
        const filterList = list.filter((_, index) => index >= list.length - count);        
        
        return this.addMultipleSeparator(filterList); //, this._separators, this._addFinishSeparator);
    }

    private addMultipleSeparator(values: number[] | string[]) { //, separator: string [], addFinishValue?: boolean): string {
        let str = '';
        
        const separator = this._separators ?? Constants.INITIALS;
        if (!Array.isArray(separator)) return '';
        
        const separatorMatched = this.matchArrays(values, separator);
        
        values.forEach((value, index) => {
            const sep = separatorMatched[index] ?? (separator[0] ?? Constants.SEPARATOR); // TODO: Lo recibo por prop???.

            if (index === values.length - 1 && !this._addFinishSeparator)
                str += `${value}`;
            else 
                str += `${value}${sep}`;
        });

        return str;
    }

    private matchArrays (values1: any[], values2: any[]): any[] {
        const count1 = values1.length; // 3
        const count2 = values2.length; // 5

        if (count1 === count2) return values2;

        if (count1 < count2) {
            
            return values2.filter((_, index) => index >= count2 - count1);
        }

        return values2;
    }
    //#endregion
}

/**
1
4
2
8888888
LUCIO RAMPI
PAULITA RAMPI
JULI RAMPI







 */