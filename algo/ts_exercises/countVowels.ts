export function countVowels(str: string): number {
    const matches = str.match(/[aeiou]/gi);
    
    return matches ? matches.length : 0;
}
