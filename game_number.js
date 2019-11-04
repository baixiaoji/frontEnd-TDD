function isDivisionBy(input, number) {
  return input % number === 0;
}

export default function gameNumber(input) {
  let result = '';
  if (isDivisionBy(input,3)) result += 'Fizz';
  if (isDivisionBy(input, 5)) result += 'Buzz';
  if (result === '') result = input;
  return result;
}
