import { isEven } from './isEven'

// Test ,umbers
test('An even number', () => {
    expect(isEven(4)).toBe(true);
});

test('An odd number', () => {
    expect(isEven(7)).toBe(false);
});

// Limit test cases
test('A string', () => {
    expect(() => isEven('hello' as unknown as number)).toThrow('Invalid number');
});

test('Zero', () => {
    expect(isEven(0)).toBe(true)
});

test('A decimal', () => {
    expect(isEven(4.2)).toBe(false)
});

test('Negative numbers', () => {
    expect(isEven(-4)).toBe(true);
    expect(isEven(-7)).toBe(false);
})