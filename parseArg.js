const map = {
  boolean: JSON.parse,
  number: parseInt,
  string: String,
};

function parseArray(type, value) {
  type = type.replace('[]', '');
  return value.split(',').map(item => (map[type] && map[type](item)));
}

function returnCurrentTypeValue(ArgsTypeObj, value = '') {
  const {type, default: defaultValue} = ArgsTypeObj;

  let currentValue = type.indexOf('[]') >= 0 ? parseArray(type, value, defaultValue)
            : (map[type] && map[type](value));

  return currentValue !== '' ? currentValue : defaultValue;
}

function isArg(item = '') {
  return item.indexOf('-') >= 0;
}

export default function parseArgs(string, argType) {
  const argArray = string.split(' ');
  const result = {};
  argArray.forEach((item, index) => {
    if (isArg(item)) {
      const key = item.replace(/-+/g, '');
      result[key] = isArg(argArray[index + 1]) ? argType[key].default
          : returnCurrentTypeValue(argType[key], argArray[index + 1]);
    }
  });

  return result;
}
