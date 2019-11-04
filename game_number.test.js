import gameNumber from './game_number';

describe('gameNumber kata', function() {
  it('should return Fizz when input division by 3', function() {
    expect(gameNumber(3)).toBe('Fizz');
    expect(gameNumber(6)).toBe('Fizz');
    expect(gameNumber(9)).toBe('Fizz');
  });

  it('should return Buzz when input division by 5', function() {
    expect(gameNumber(5)).toBe('Buzz');
    expect(gameNumber(10)).toBe('Buzz');
  });

  it('should return FizzBuzz when input divsion both by 3 and 5', function() {
    expect(gameNumber(15)).toBe('FizzBuzz');
    expect(gameNumber(30)).toBe('FizzBuzz');
  });
  it('should return itself when input is not division above number', function() {
    expect(gameNumber(2)).toBe(2);
    expect(gameNumber(11)).toBe(11);
  });
});
