# time-parser

Simple parser that, given a time, returns the minutes past midnight.

This is a project from "The Pragmatic Programmer".

## Example

```typescript
minutesSince("12:00am"); // => 0
minutesSince("03:01am"); // => 181

// Handles 24 hour clock times
minutesSince("13:00"); // => 780
```
