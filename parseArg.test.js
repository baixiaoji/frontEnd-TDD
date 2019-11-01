import parseArgs from './parseArg';

describe('parseArgs kata', function() {
  const schema = {l: 'boolean', p: 'number', d: 'string'};
  it('should return current type obj when input args string', function() {
    const args = parseArgs('-l true -p 8080 -d /usr/logs', schema);
    expect(args).toEqual({l: true, p: 8080, d: '/usr/logs'});
  });

  it('should return obj that contain default value', function() {
    const args = parseArgs('-l -p -d', schema);
    expect(args).toEqual({l: true, p: 0, d: ''})
  });

  it('should return current type obj when schema add new type', function() {
    const inputString = '--l 1,2,3,4,5';
    const schema = {l: 'number[]'};
    expect(parseArgs(inputString, schema)).toEqual({
      l: [1,2,3,4,5]
    })
  });

  it('should return current type obj when schema add new type', function() {
    const inputString = '--l 1,2,3,4,5';
    const schema = {l: 'string[]'};
    expect(parseArgs(inputString, schema)).toEqual({
      l: ['1','2','3','4','5']
    })
  });
});
