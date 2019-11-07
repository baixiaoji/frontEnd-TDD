import parseString from './parseString';
import schemaParse from './schema';

export default function parseArgs(string, schema) {
  const inputObj = parseString(string);
  return schemaParse(inputObj, schema);
}
