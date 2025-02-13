function isPalindrome(text) {
    if (typeof text !== "string") return "Not a word";
    if (text.length < 1 ) return "Empty string";

    const cleanText = text
        .toLocaleLowerCase()
        .replace(/[^a-z]/g, '');
    return  cleanText === cleanText.split('').reverse().join('')
  }

  module.exports = isPalindrome;