import { parser } from "./parser";

export const minutesSince = (time: string): number => {
  let tokens;
  try {
    tokens = parser.parse(time);
  } catch (error) {
    console.error("Parse Error", error);
    throw new Error(`InvalidTime: Parse error.`);
  }
  const hoursToken = tokens[0];

  if (hoursToken == null) {
    throw new Error(`InvalidTime: Hour must be defined.`);
  }

  const hours = Number(hoursToken);
  if (hours < 0 || hours > 24) {
    throw new Error(`InvalidTime: Hour out of range.`);
  }

  const minutesToken = tokens[1]?.[1];
  const minutes = minutesToken != null ? Number(minutesToken) : 0;

  if (minutes != null && (minutesToken < 0 || minutesToken > 59)) {
    throw new Error(`InvalidTime: Minute out of range.`);
  }

  const periodToken = tokens[2];

  if (periodToken && hours > 12) {
    throw new Error(`InvalidTime: Hour not allowed for period.`);
  }

  let minutesPastMidnight = 0;

  if (periodToken) {
    minutesPastMidnight = (hours % 12) * 60;
    if (periodToken === "pm") {
      minutesPastMidnight += 12 * 60;
    }
  } else {
    minutesPastMidnight = (hours % 24) * 60;
  }

  minutesPastMidnight += minutes;

  return minutesPastMidnight;
};
