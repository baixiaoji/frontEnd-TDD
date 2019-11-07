export default function parseString(input) {
  const inputArr = input.split(' ');

  const result = {};

  inputArr.map((item, index) => {
    if (item.indexOf('-') >= 0 ) {
      const key = item.slice(1);
      const nextItem = inputArr[index + 1];
      result[key] = nextItem.indexOf('-') >= 0 ? '' : nextItem;
    }
  });
  return result;
}
