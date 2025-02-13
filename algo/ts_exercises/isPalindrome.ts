function isPalindrome(text) {
    if (typeof text !== "string" || text.trim() === "") return "Invalid word";

    const cleanText = text
        .toLowerCase()
        .replace(/[^a-z]/g, '');
    return  cleanText === cleanText.split('').reverse().join('')
}
module.exports = isPalindrome;