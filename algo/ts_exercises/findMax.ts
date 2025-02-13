
export function findMax(arr: Array<number>): number {
    if (!Array.isArray(arr) || arr.length === 0 ) throw new Error("Invalid array");
    return Math.max(...arr)
}
