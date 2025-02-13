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
test('Should throw an error if entry is an empty string', () => {
    expect(() => countVowels('')).toThrow("Empty string");
})

test('We only want words', () => {
    expect(() => countVowels(4554 as unknown as string)).toThrow("Not a word");
  });
