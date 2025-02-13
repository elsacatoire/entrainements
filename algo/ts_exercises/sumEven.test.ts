import { sumEven } from "./sumEven"

test('Normal number array', () =>  {
    expect(sumEven([1, 2, 3, 4, 5, 6])).toBe(12)
})

test('Not an array', () =>  {
    expect(() => sumEven("coucou" as unknown as Array<number>)).toThrow('Not an array')
})

test('Array with strings', () =>  {
    expect(sumEven([1, 'chat' as unknown as number, 3, 4, 5, 6])).toBe(10)
})

test('Empty string', () =>  {
    expect(sumEven([])).toBe(0)
})
