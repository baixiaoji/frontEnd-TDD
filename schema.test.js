import schemaParse from './schema';

describe('schema kata', function() {
  it('should return current type obj when input obj and schema', function() {
    const obj = {
      l: 'true',
      p: '8080',
      d: '/user/log'
    }
    const schema = {
      l: {type: 'bool', default: true},
      p: {type: 'num', default: 0},
      d: {type: 'str', default: ''},
    }
    expect(schemaParse(obj,schema)).toEqual({
      l: true,
      p: 8080,
      d: '/user/log'
    })
  });
  it('should return current type value has default value obj when input obj and schema', function() {
    const obj = {
      l: '',
      p: '8080',
      d: '/user/log'
    }
    const schema = {
      l: {type: 'bool', default: false},
      p: {type: 'num', default: 0},
      d: {type: 'str', default: ''},
    }
    expect(schemaParse(obj,schema)).toEqual({
      l: false,
      p: 8080,
      d: '/user/log'
    })
  });

  it('should return array type value when schema has array type', function() {
    const obj = {l: '1,2,3,4,5'};
    const schema = {l: {type: 'num[]'}};
    expect(schemaParse(obj, schema)).toEqual({
      l: [1,2,3,4,5],
    })
  });
});
