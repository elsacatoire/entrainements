export function isPalindrome(text: string): boolean {
    if (text.trim() === "") throw new Error("Empty string");

    const cleanText = text
        .toLowerCase()
        .replace(/[^a-z]/g, '');
    return  cleanText === cleanText.split('').reverse().join('')
}
