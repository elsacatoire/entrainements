import { isPalindrome } from './isPalindrome'

test('Kayak is a plaindrome!', () => {
    expect(isPalindrome('kayak')).toBe(true);
})

test('elsa is sadly not a palindrome', () => {
    expect(isPalindrome('elsa')).toBe(false);
})

test('Should not be case sensitive', () => {
    expect(isPalindrome('Ressasser')).toBe(true);
})

test('Une phrase peut être un palindrome', () => {
    expect(isPalindrome('La mariée ira mal')).toBe(true);
})

test('We only want words', () => {
    expect(() => isPalindrome(4554 as unknown as string)).toThrow("Not a word");
  });

test('Empty string should throw error', () => {
  expect(() => isPalindrome('')).toThrow("Empty string");
})
