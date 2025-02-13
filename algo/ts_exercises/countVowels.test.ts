import { countVowels } from "./countVowels";

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
test('Should return 0 for an empty string', () => {
    expect(countVowels('')).toBe(0);
})