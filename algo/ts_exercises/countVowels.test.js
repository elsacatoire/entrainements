const countVowels = require('./countVowels')

// Normal cases
test('Hello has 2 vowels', () => {
    expect(countVowels('hello')).toBe(2);
    expect(countVowels('javaScript')).toBe(3);
});

test('Should not be case sensitive', () => {
    expect(countVowels('Elsa')).toBe(2);
    expect(countVowels('CAT')).toBe(1);
})

// Limit cases
test('Should return "not a string" if entry is not a string', () => {
    expect(countVowels(4567)).toBe("not a string");
    expect(countVowels(['CAT', 'elsa'])).toBe("not a string");
})

test('Should return 0 for an empty string', () => {
    expect(countVowels('')).toBe(0);
})