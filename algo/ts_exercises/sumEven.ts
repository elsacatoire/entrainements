export function sumEven(arr: Array<number>): number {
    if (!Array.isArray(arr)) throw new Error ('Not an array');
    return arr.filter((num) => num % 2 === 0).reduce((acc, num) => acc + num, 0);
}
