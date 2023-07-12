import TimeSeconds from "../src/TimeSeconds";

let seconds = 72.321;

describe('Class timeSeconds' , () => {

    it ('should return 72.321 when seconds is called', () => {
        const time = new TimeSeconds(seconds);
        expect(time.seconds).toBe(72.321);
    });

    it ('should return 72321 when miliseconds is called', () => {
        const time = new TimeSeconds(seconds);
        expect(time. miliseconds).toBe(72321);
    });

    it ('should return "" when rawTime id called', () => {
        const time = new TimeSeconds(seconds);
        expect(time.rawTime).toBe("");
    });

    let expectedFormatted = "1' 12'' 321ms";
    it (`should return "${expectedFormatted}" when timeFormatted id called`, () => {
        const time = new TimeSeconds(seconds);
        expect(time.timeFormatted).toBe(expectedFormatted);
    });
});

describe('Class timeSeconds Setters', () => {

    it ('should return true when addFinishSeparator is setted', () => {
        const time = new TimeSeconds(seconds);
        time.addFinishSeparator = true;
        expect(time.addFinishSeparator).toBe(true);
    });

    let expectedFormatted = "1x12x321";

    it (`should return "${expectedFormatted}" when separators is setted`, () => {
        const time = new TimeSeconds(seconds);
        time.separators = ['x'];
        time.addFinishSeparator = !true;

        expect(time.timeFormatted).toBe(expectedFormatted);
    });

    it (`should return "['x']" when separators is setted`, () => {
        const time = new TimeSeconds(seconds);
        time.separators = ['x'];
        

        expect(time.separators).toBe(time.separators);
    });
});