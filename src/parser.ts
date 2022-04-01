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

const minutes = generateNums(1, 60);

const grammar = `
start = twelve / twentyfour

twentyfour = twentyfourhour ":" minutes

twentyfourhour = ${twentyfourhours}

twelve = twelvehour ":" minutes period

twelvehour = ${twelvehours}

minutes = ${minutes}

period = "am" / "pm"

number = [0123456789]
`;

export const parser = peg.generate(grammar);
