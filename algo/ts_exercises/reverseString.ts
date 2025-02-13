export function reverseString(str: string): string {
  if(typeof str !== 'string') throw new Error ('Invalid string')
  return  str.split('').reverse().join('');
}
