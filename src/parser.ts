import peg from "pegjs";

const generateNums = (start: number, end: number): string => {
  const results = [];

  for (let i = start; i <= end; i++) {
    let result;
    if (i < 10) {
      result = `0${i}`;
    } else {
      result = `${i}`;
    }
    results.push(`"${result}"`);
  }

  return results.join(" / ");
};

const twentyfourhours = generateNums(0, 24);

const twelvehours = generateNums(1, 12);

const minutes = generateNums(0, 59);

const grammar = `
start = twelve / twentyfour

twelve = twelvehour minutepart ? period

twelvehour = ${twelvehours}

twentyfour = twentyfourhour minutepart ?

twentyfourhour = ${twentyfourhours}

minutepart = ":" minute

minute = ${minutes}

period = "am" / "pm"
`;

export const parser = peg.generate(grammar);
