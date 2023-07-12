export default class Validation {
    static isNumber(value: number): boolean;
    static isInt(value: number): boolean;
    static isPositive(value: number): boolean;
    static toIntOrZero(value: string): number;
    static toFloatOrZero(value: string): number;
}
