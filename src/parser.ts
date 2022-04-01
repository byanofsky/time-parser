import peg from "pegjs";

const generateNums = (start: number, end: number): string => {
  const doubleDigit = [];
  const singleDigit = [];

  for (let i = start; i <= end; i++) {
    if (i < 10) {
      singleDigit.push(`${i}`);
      doubleDigit.push(`0${i}`);
    } else {
      doubleDigit.push(`${i}`);
    }
  }

  return [...doubleDigit, ...singleDigit].map((r) => `"${r}"`).join(" / ");
};

const hours = generateNums(0, 24);

const minutes = generateNums(0, 59);

const grammar = `
start = hour (":" minute) ? period ?

hour = ${hours}

minute = ${minutes}

period = "am" / "pm"
`;

export const parser = peg.generate(grammar);
