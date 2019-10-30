export default function gameNumber(input) {
  function isDivisionBy(number) {
    return input % number === 0;
  }
  let result = '';
  if (isDivisionBy(3)) result += 'Fizz';
  if (isDivisionBy(5)) result += 'Buzz';
  if (result === '') result = input;
  return result;
}
