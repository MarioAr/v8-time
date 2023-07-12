import SecondsConvertion from "./converters/ConvertionSeconds";
import Time from "./Time";
import { TimeShow } from "./poo/Types";
import TimeValidation from "./poo/Validation";


/**
 * Recibe el tiempo en formato string y lo transforma a segundos.
 */
export default class TimeRaw extends Time {

    constructor(rawTime: string) {
        super();
        this._rawTime = rawTime;
        
        this.transformRawTimeToSeconds();
    }
    
    //#region Privates
    private transformRawTimeToSeconds(): void {
        const t = this.convertStingToArray(this._rawTime);
        
        let [d, h, m, s, dd] = t;
        const lista = ['0', '0', '0', '0', '0'];
        
        if (s) lista[3] = s;
        if (m) lista[2] = m;
        if (h) lista[1] = h;
        if (d) lista[0] = d;
        
        if (dd) {
            if (dd.length > 3) {
                dd = dd.slice(0, 3);
                lista[4] = dd;
            } else if (dd.length === 3) {
                lista[4] = dd;
            } else {
                // Move arrays elements to the left and keep size.
                lista[4] = '0';
                lista[3] = dd;
                lista[2] = s;
                lista[1] = m;
                lista[0] = h;
            }
        }
        
        const numbers = lista.map(n => TimeValidation.toIntOrZero(n));

        const rta = SecondsConvertion.convertArrayToSeconds(numbers);

        this.setSeconds(rta);
    }

    private convertStingToArray(str: string): string[] { 
        // TODO: Refactor this, make too much things.
        // TODO: Pasar la regex a una constante.
        let list = str.replace(/(\D+)/g, '-').split('-');

        // get the las five elements
        list = list.filter(n => n !== '').slice(-5);
        
        const partes = list.map(n => TimeValidation.toIntOrZero(n));
        
        //complete with 0 if necesary in the array start
        if (partes.length < 5) {
            const dif = 5 - partes.length;
            const ceros = new Array(dif).fill('0');
            // partes = [...ceros, ...partes];
            list = [...ceros, ...list];
        }
        
        return list;
    }

    //#endregion

}