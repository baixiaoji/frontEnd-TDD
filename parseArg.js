const typeMap = {
  boolean: Boolean,
  number: parseInt,
  string: String,
};
function convertType(input, type) {
  return (typeMap[type] && typeMap[type](input)) || input;
}
function splitString(input, type) {
  return input.split(',').map(item => convertType(item, type));
}

function returnCurrentTypeValue(input, type) {
  if (type.indexOf('[]') >= 0) {
    const arrayItemType = type.replace('[]', '');
    return splitString(input, arrayItemType)
  }
  return convertType(input, type);
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
