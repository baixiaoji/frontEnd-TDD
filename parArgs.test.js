import parseArg from './parseArg'

describe('parseArg Kata', function() {
  let argType = {}
  beforeAll(() => {
    argType = {
      l: {
        type: 'boolean',
        default: false,
      },
      p: {
        type: 'number',
        default: 9090,
      },
      d: {
        type: 'string',
        default: '',
      }
    };
  })
  afterAll(() => {
    argType = null;
  })
  it('should return obj when input the command input', function() {
    expect(parseArg('-l false -p 8080 -d /user/log', argType)).toEqual({
      l: false,
      p: 8080,
      d: '/user/log'
    })
  });

  it('should return obj when input the command input using default value', function() {
    expect(parseArg('-l -p -d', argType)).toEqual({
      l: false,
      p: 9090,
      d: ''
    })
  });

  it('should return obj when input command input allow list', function() {
    Object.assign(argType, {
      l: {
        type: 'number[]',
        default: [],
      }
    });
    expect(parseArg('-l 1,2,34,4', argType)).toEqual({
      l: [1,2,34,4]
    })
  });
});
