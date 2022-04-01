import { parser } from "../src/parser";

interface TestCase {
  input: string;
  expected: any[];
}

const testCases: TestCase[] = [
  { input: "12:45", expected: ["12", ":", "45"] },
  { input: "12:45pm", expected: ["12", ":", "45", "pm"] },
];

describe("Parser", () => {
  testCases.forEach(({ input, expected }) => {
    it(`with input ${input}`, () => {
      expect(parser.parse(input)).toEqual(expected);
    });
  });
});
