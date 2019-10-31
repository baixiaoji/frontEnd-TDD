import gameNumber from './game_number';

describe('GameNumber kata', function() {
  it('should return Fizz when input division by 3', function() {
    expect(gameNumber(3)).toBe('Fizz');
  });
  it('should return Buzz when input division by 5', function() {
    expect(gameNumber(5)).toBe('Buzz');
  });
  it('should return FizzBuzz when input division by 15', function() {
    expect(gameNumber(15)).toBe('FizzBuzz');
  });
  it('should return input itself when input is not division by above number', function() {
    expect(gameNumber(22)).toBe(22);
  });
});
