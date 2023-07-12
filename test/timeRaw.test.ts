import TimeRaw from "../src/TimeRaw";

describe('TimeRaw: "1-12-321" ', () => {

    const raw = "1-12-321";

    it(`${raw} prop: seconds => 72.321`, () => {
        const time = new TimeRaw(raw);

        const expected = 72.321;
        expect(time.seconds).toBe(expected);
    });

    it(`${raw} prop: miliseconds => 72.321 * 1000`, () => {
        const time = new TimeRaw(raw);

        const expected = 72.321 * 1000;
        expect(time.miliseconds).toBe(expected);
    });

    it(`${raw} prop: rawTime => toHaveProperty('count')`, () => {
        const time = new TimeRaw(raw);

        expect(time.rawTime).toBe(raw);
    });

    it(`${raw} prop: timeShow => instance of TimeShow`, () => {
        const time = new TimeRaw(raw);

        expect(time.timeShow).toHaveProperty('count');
    });

    it(`${raw} prop: timeShow => day = 0`, () => {
        const time = new TimeRaw(raw);

        const expected = 0;
        expect(time.timeShow.days).toBe(expected);
    });

    it(`${raw} prop: timeShow => hours = 0`, () => {
        const time = new TimeRaw(raw);

        const expected = 0;
        expect(time.timeShow.hours).toBe(expected);
    });

    it(`${raw} prop: timeShow => minutes = 1`, () => {
        const time = new TimeRaw(raw);

        const expected = 1;
        expect(time.timeShow.minutes).toBe(expected);
    });

    it(`${raw} prop: timeShow => seconds = 12`, () => {
        const time = new TimeRaw(raw);

        const expected = 12;
        expect(time.timeShow.seconds).toBe(expected);
    });

    it(`${raw} prop: timeShow => miliseconds = 321`, () => {
        const time = new TimeRaw(raw);

        const expected = 321;
        expect(time.timeShow.miliseconds).toBe(expected);
    });



}); 