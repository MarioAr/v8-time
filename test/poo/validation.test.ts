import Validation from "../../src/poo/Validation";

describe('Validation: isPositive', () => {
    it('1 Debe retornar true', () => {
        const res = Validation.isPositive(1);

        expect(res).toBe(true);
    });

    it('0 Debe retornar false', () => {
        const res = Validation.isPositive(0);

        expect(res).toBe(false);
    });

    it('-1 Debe retornar false', () => {
        const res = Validation.isPositive(-1);

        expect(res).toBe(false);
    });

    it('"NaN" Debe retornar false', () => {

        const res = Validation.isPositive(NaN);

        expect(res).toBe(false);
    });

    it('"+Infinity" Debe retornar true', () => {

        const res = Validation.isPositive(Infinity);

        expect(res).toBe(true);
    });

    it('"-Infinity" Debe retornar false', () => {

        const res = Validation.isPositive(-Infinity);

        expect(res).toBe(false);
    });

});

describe('Validation: isInt', () => {
    it('1 Debe retornar true', () => {
        const res = Validation.isInt(1);

        expect(res).toBe(true);
    });

    it('1.1 Debe retornar false', () => {
        const res = Validation.isInt(1.1);

        expect(res).toBe(false);
    });

    it('"NaN" Debe retornar false', () => {
        const res = Validation.isInt(NaN);

        expect(res).toBe(false);
    });

    it('"Infinity" Debe retornar false', () => {
        const res = Validation.isInt(Infinity);

        expect(res).toBe(false);
    });
});

describe('Validation: isNumber', () => {
    it('1 Debe retornar true', () => {
        const res = Validation.isNumber(1);
        
        expect(res).toBe(true);
    });

    it('"NaN" Debe false', () => {
        const res = Validation.isNumber(NaN);
        
        expect(res).toBe(false);
    });
});