import parseString from './parseString';

describe('parseString Kata', function() {
  it('should return obj when input is args string', function() {
    expect(parseString('-l true -p 8080 -d /user/log')).toEqual({
      l: 'true',
      p: '8080',
      d: '/user/log'
    })
  });

});
it('should return obj when input args string some is empty', function() {
  expect(parseString('-l -p 8080 -d /user/log')).toEqual({
    l: '',
    p: '8080',
    d: '/user/log'
  })
});
