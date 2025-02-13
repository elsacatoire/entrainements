import { reverseString } from './reverseString'

// Normal cases
test('How do you say hello in verlan ?', () => {
    expect(reverseString('hello')).toBe('olleh');
});

test('test a sentence', () => {
    expect(reverseString("J'aime bien faire du kayak.")).toBe(".kayak ud eriaf neib emia'J");
});

// Limit
test('Not a string', () => {
    expect(() => reverseString(56789 as unknown as string)).toThrow('Invalid string')
})