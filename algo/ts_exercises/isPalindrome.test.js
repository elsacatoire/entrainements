const isPalindrome = require('./isPalindrome')

test('Kayak is a plaindrome!', () => {
    expect(isPalindrome('kayak')).toBe(true);
})

test('elsa is sadly not a palindrome', () => {
    expect(isPalindrome('elsa')).toBe(false);
})

test('We only want words', () => {
    expect(isPalindrome(4554)).toBe('Not a word');
})

test('Empty string should return false', () => {
    expect(isPalindrome('')).toBe('Empty string');
})

test('Should not be case sensitive', () => {
    expect(isPalindrome('Ressasser')).toBe(true);
})

test('Une phrase peut être un palindrome', () => {
    expect(isPalindrome('La mariée ira mal')).toBe(true);
})