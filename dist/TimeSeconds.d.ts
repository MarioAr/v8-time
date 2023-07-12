import Time from "./Time";
export default class TimeSeconds extends Time {
    private _separators;
    private _addFinishSeparator;
    constructor(seconds: number);
    get timeFormatted(): string;
    get separators(): string[];
    get addFinishSeparator(): boolean;
    set separators(separators: string[]);
    set addFinishSeparator(value: boolean);
    private timeShowToString;
    private addMultipleSeparator;
    private matchArrays;
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
