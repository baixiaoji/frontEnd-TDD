function splitString(input) {
  return input.split(',').map(item => parseInt(item));
}
function returnCurrentTypeValue(string, type) {
  const typeMap = {
    boolean: Boolean,
    number: parseInt,
    string: String,
    array: splitString,
  };
  return (typeMap[type] && typeMap[type](string)) || string;
}

function returnCurrentTypeDefaultValue(type) {
  const defaultMap = {
    boolean: true,
    number: 0,
    string: '',
  };
  return defaultMap[type];
}

export default function parseArgs(input, schema) {
  const inputArr = String(input).split(' ');
  const obj = {};
  inputArr.map((item, index) => {
    if (item.indexOf('-') < 0) {
      return;
    }
    const key = item.replace(/-+/g, '');
    const nextItem = inputArr[index + 1] || '';
    obj[key] = !(nextItem.indexOf('-') >= 0) ?
          returnCurrentTypeValue(nextItem, schema[key])
          : returnCurrentTypeDefaultValue(schema[key]);
  });
  return obj;
}
