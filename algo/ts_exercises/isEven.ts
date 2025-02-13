export function isEven(num: number) {
  if (typeof num !== 'number') throw new Error ('Invalid number')
  return typeof num === 'number' && num % 2 === 0;
}
