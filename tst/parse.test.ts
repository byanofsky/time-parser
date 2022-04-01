import { parser } from "../src/parser";

interface TestCase {
  input: string;
  expected: any[];
}

describe("twelve hour", () => {
  const testCases: TestCase[] = [
    { input: "12:45pm", expected: ["12", [":", "45"], "pm"] },
    { input: "12:45am", expected: ["12", [":", "45"], "am"] },
    { input: "06:45am", expected: ["06", [":", "45"], "am"] },
    { input: "11:45pm", expected: ["11", [":", "45"], "pm"] },
  ];

  testCases.forEach(({ input, expected }) => {
    it(`with input ${input}`, () => {
      expect(parser.parse(input)).toEqual(expected);
    });
  });
});

describe("twentyfour hour", () => {
  const testCases: TestCase[] = [
    { input: "00:45", expected: ["00", [":", "45"], null] },
    { input: "06:45", expected: ["06", [":", "45"], null] },
    { input: "12:45", expected: ["12", [":", "45"], null] },
    { input: "13:45", expected: ["13", [":", "45"], null] },
    { input: "24:45", expected: ["24", [":", "45"], null] },
  ];

  testCases.forEach(({ input, expected }) => {
    it(`with input ${input}`, () => {
      expect(parser.parse(input)).toEqual(expected);
    });
  });
});

describe("minutes", () => {
  const testCases: TestCase[] = [
    { input: "12:00", expected: ["12", [":", "00"], null] },
    { input: "12:01", expected: ["12", [":", "01"], null] },
    { input: "12:30", expected: ["12", [":", "30"], null] },
    { input: "12:59", expected: ["12", [":", "59"], null] },
  ];

  testCases.forEach(({ input, expected }) => {
    it(`with input ${input}`, () => {
      expect(parser.parse(input)).toEqual(expected);
    });
  });
});

describe("without minutes", () => {
  const testCases: TestCase[] = [
    { input: "12", expected: ["12", null, null] },
    { input: "12am", expected: ["12", null, "am"] },
    { input: "12pm", expected: ["12", null, "pm"] },
  ];

  testCases.forEach(({ input, expected }) => {
    it(`with input ${input}`, () => {
      expect(parser.parse(input)).toEqual(expected);
    });
  });
});
