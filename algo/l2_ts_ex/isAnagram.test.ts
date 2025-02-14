import { isAnagram } from "./isAnagram";

test("A valid anagram", () => {
    expect(isAnagram(['car', 'arc'])).toBeTruthy()
})

test("An invalid anagram", () => {
    expect(isAnagram(['tree', 'love'])).toBeFalsy()
})

test("Not an array", () => {
    expect(() => isAnagram('mouhahah' as unknown as Array<string>)).toThrow('Invalid entry')
})

test("Invali array", () => {
    expect(() => isAnagram([])).toThrow('Invalid entry')
})
