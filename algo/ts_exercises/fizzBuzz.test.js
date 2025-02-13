const fizzBuzz = require('./fizzBuzz')

test('Not a number', () => {
    expect(fizzBuzz("coucou")).toBe("Not a number");
});

test('3', () => {
    expect(fizzBuzz(3)).toEqual(["1", "2", "Fizz"]);
});

test('8', () => {
    expect(fizzBuzz(8)).toEqual(["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8"]);
});

test('16', () => {
    expect(fizzBuzz(16)).toEqual(["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz", "16"]);
});