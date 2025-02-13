export function isPalindrome(text: string): boolean {
    if (typeof text !== "string") throw new Error("Not a word");
    if (text.trim() === "") throw new Error("Empty string");

    const cleanText = text
        .toLowerCase()
        .replace(/[^a-z]/g, '');
    return  cleanText === cleanText.split('').reverse().join('')
}
