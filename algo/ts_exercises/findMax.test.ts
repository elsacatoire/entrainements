import { findMax } from './findMax'

test('Normal number list', () => {
    expect(findMax([4, 7, 1, 9, 2])).toBe(9)
});

test('Only one element array', () => {
    expect(findMax([5])).toBe(5)
});

test('Empty array', () => {
    expect(() => findMax([])).toThrow("Invalid array")
});

test('Not an array', () => {
    expect(() => findMax('coucou' as unknown as Array<number>)).toThrow("Invalid array")
});

test('Negative numbers', () => {
    expect(findMax([-4, -7, -1,- 9, -2])).toBe(-1)
});

test('Decimals', () => {
    expect(findMax([4.7, 1.2, 3.9])).toBe(4.7)
});