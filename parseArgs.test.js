import parseArgs from './parseArgs';

describe('parseArg kata', function() {
  it('should return current obj when input string and schema', function() {
    const inputString = '-l -p 8080 -d 1,2,3,4';
    const schema = {
      l: {type: 'bool', default: false},
      p: {type: 'num', default: 9999},
      d: {type: 'num[]', default: []}
    }
    expect(parseArgs(inputString, schema)).toEqual({
      l: false,
      p: 8080,
      d: [1,2,3,4]
    })
  });
});
