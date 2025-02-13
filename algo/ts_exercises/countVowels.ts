export function countVowels(str: string): number {
    if (typeof str !=="string") throw new Error ('Not a word')
    if (str.trim() === "") throw new Error("Empty string");
    const matches = str.match(/[aeiou]/gi);
    
    return matches ? matches.length : 0;
}
