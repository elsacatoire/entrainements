const sumEven = require('./sumEven')

test('Normal number array', () =>  {
    expect(sumEven([1, 2, 3, 4, 5, 6])).toBe(12)
})

test('Not an array', () =>  {
    expect(sumEven("coucou")).toBe('Not an array')
})

test('Array with strings', () =>  {
    expect(sumEven([1, 'chat', 3, 4, 5, 6])).toBe(10)
})

test('Empty string', () =>  {
    expect(sumEven([])).toBe(0)
})
