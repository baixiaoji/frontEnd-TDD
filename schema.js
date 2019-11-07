function returnCurrentType(value, type, defaultValue) {
  const convertMap = {
    bool: JSON.parse,
    num: parseInt,
    str: String,
  };
  return value ? convertMap[type] && convertMap[type](value) : defaultValue;
}

function getCurrentTypeValue(value, typeObj) {
  const {type, default:defaultValue} = typeObj;

  if (type.indexOf('[]') >= 0) {
    const arrayItemType = type.replace('[]', '');
    return value.split(',').map(item => returnCurrentType(item, arrayItemType, defaultValue));
  }
  return returnCurrentType(value, type, defaultValue);
}

export default function schemaParse(obj, schema) {
  const keyList = Object.keys(obj);
  const result = {};

  keyList.map(key => {
    const typeObj = schema[key];
    result[key] = getCurrentTypeValue(obj[key], typeObj);
  })
  return result;
}
