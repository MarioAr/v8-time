
export default class Validation {

    static isNumber(value: number): boolean {
        return typeof value === 'number' && !isNaN(value);
    }

    static isInt(value: number): boolean {
        return Validation.isNumber(value) && Number.isInteger(value);
    }

    static isPositive(value: number): boolean {
        return Validation.isNumber(value) && value > 0;
    }

    static toIntOrZero(value: string): number {
        return Validation.isInt(parseInt(value)) ? parseInt(value) : 0;
    }

    static toFloatOrZero(value: string): number {
        return Validation.isNumber(parseFloat(value)) ? parseFloat(value) : 0;
        // return TimeValidation.isNumber(value) ? value : 0;
    }
}