import { minutesSince } from "../src/minutes-since";

interface TestCase {
  input: string;
  expected: number;
}

describe("hours", () => {
  const testCases: TestCase[] = [
    { input: "00:00", expected: 0 },
    { input: "24:00", expected: 0 },
    { input: "01:00", expected: 60 },
    { input: "12:00", expected: 720 },
    { input: "13:00", expected: 780 },
    { input: "23:00", expected: 1380 },
    { input: "12:00am", expected: 0 },
    { input: "01:00am", expected: 60 },
    { input: "12:00pm", expected: 720 },
    { input: "1:00pm", expected: 780 },
    { input: "11:00pm", expected: 1380 },
  ];

  testCases.forEach(({ input, expected }) => {
    it(`with input ${input}`, () => {
      expect(minutesSince(input)).toEqual(expected);
    });
  });
});

describe("minutes", () => {
  const testCases: TestCase[] = [
    { input: "03:01", expected: 181 },
    { input: "03:01am", expected: 181 },
    { input: "03:35", expected: 215 },
    { input: "03:35am", expected: 215 },
  ];

  testCases.forEach(({ input, expected }) => {
    it(`with input ${input}`, () => {
      expect(minutesSince(input)).toEqual(expected);
    });
  });
});

describe("error cases", () => {
  const testCases = [
    { input: "25:01" },
    { input: ":01am" },
    { input: "13:35pm" },
    { input: "13:60" },
  ];

  testCases.forEach(({ input }) => {
    it(`with input ${input}`, () => {
      expect(() => minutesSince(input)).toThrow(/InvalidTime/);
    });
  });
});
