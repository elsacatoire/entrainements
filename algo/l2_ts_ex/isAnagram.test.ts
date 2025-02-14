import { isAnagram } from "./isAnagram";

test("A valid anagram", () => {
    expect(isAnagram(['car', 'arc'])).toBeTruthy()
})

test("An anagram with different cases", () => {
    expect(isAnagram(['Car', 'aRc'])).toBeTruthy()
});

test("An anagram with spaces", () => {
    expect(isAnagram([' list en', '  silent'])).toBeTruthy()
});

test("An invalid anagram", () => {
    expect(isAnagram(['tree', 'love'])).toBeFalsy()
})

test("Not an array", () => {
    expect(() => isAnagram('mouhahah' as unknown as Array<string>)).toThrow('Invalid entry')
})

test("Invalid array length", () => {
    expect(() => isAnagram([])).toThrow('Invalid entry')
})

test("Empty strings", () => {
    expect(() => isAnagram(['', ''])).toThrow('Invalid entry')
});