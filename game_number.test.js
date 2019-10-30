import GameNumber from './game_number.js';

describe('testing GameNumber', function() {
  it('should return Fizz when input division by 3', function() {
    expect(GameNumber(3)).toBe('Fizz');
  });
  it('should return Buzz when input division by 5', function() {
    expect(GameNumber(5)).toBe('Buzz');
  });
  it('should return FizzBuzz when input division by 15', function() {
    expect(GameNumber(15)).toBe('FizzBuzz');
  });
  it('should return input when input is not division by above number', function() {
    expect(GameNumber(4)).toBe(4);
  });
});
