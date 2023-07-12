import ConvertionSeonds from '../../src/converters/ConvertionSeconds';

const DAYS_IN_SECONDS = 86400;
const HOURS_IN_SECONDS = 3600;
const MINUTES_IN_SECONDS = 60;
const MILESIMAS_IN_SECONDS = 0.001;


describe('ConvertionSeonds: convertFromMilesimas', () => {
  it('Debe retornar 0.001', () => {
    const days = ConvertionSeonds.convertFromMilesimas(1);
    const expected = MILESIMAS_IN_SECONDS;
    expect(days).toBe(expected);
  });

  it('Debe retornar 0.001 * 2', () => {
    const days = ConvertionSeonds.convertFromMilesimas(2);
    const expected = MILESIMAS_IN_SECONDS * 2;
    expect(days).toBe(expected);
  });

  // it('Debe retornar MENOR A 0.001 * 2', () => {
  //   const res = ConvertionSeonds.convertFromMilesimas(2.1);
  //   const expected = MILESIMAS_IN_SECONDS * 2;
    
  //   expect(res).toBeLessThan(expected);
  // });
});

describe('ConvertionSeonds: convertFromMinutes', () => {
  it('Debe retornar 60', () => {
    const days = ConvertionSeonds.convertFromMinutes(1);
    const expected = MINUTES_IN_SECONDS;
    expect(days).toBe(expected);
  });

  it('Debe retornar 60 * 2', () => {
    const days = ConvertionSeonds.convertFromMinutes(2);
    const expected = MINUTES_IN_SECONDS * 2;
    expect(days).toBe(expected);
  });

  it('Debe retornar MAYOR A 60 * 2', () => {
    const res = ConvertionSeonds.convertFromMinutes(2.1);
    const expected = MINUTES_IN_SECONDS * 2;
    
    expect(res).toBeGreaterThan(expected);
  });
});

describe('ConvertionSeonds: convertFromHours', () => {
  it('Debe retornar 3600', () => {
    const days = ConvertionSeonds.convertFromHours(1);
    const expected = HOURS_IN_SECONDS;
    expect(days).toBe(expected);
  });

  it('Debe retornar 3600 * 2', () => {
    const days = ConvertionSeonds.convertFromHours(2);
    const expected = HOURS_IN_SECONDS * 2;
    expect(days).toBe(expected);
  });

  it('Debe retornar MAYOR A 3600 * 2', () => {
    const res = ConvertionSeonds.convertFromHours(2.1);
    const expected = HOURS_IN_SECONDS * 2;
    
    expect(res).toBeGreaterThan(expected);
  });

});


describe('ConvertionSeonds: convertFromDays', () => {
  it('Debe retornar 86400', () => {
    const days = ConvertionSeonds.convertFromDays(1);
    const expected = DAYS_IN_SECONDS;
    expect(days).toBe(expected);
  });

  it('Debe retornar MAYOR A 86400', () => {
    const days = ConvertionSeonds.convertFromDays(3);
    const expected = DAYS_IN_SECONDS;
    expect(days).toBeGreaterThan(expected);
  });

  it('Debe retornar CERO', () => {
    const days = ConvertionSeonds.convertFromDays(0);
    const expected = 0;
    expect(days).toBe(expected);
  });
});

