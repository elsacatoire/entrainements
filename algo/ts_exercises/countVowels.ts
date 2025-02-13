function countVowels(str) {
    if (typeof(str) !== 'string') return "not a string"
    const matches = str.match(/[aeiou]/gi);
    
    return matches ? matches.length : 0;
}

module.exports = countVowels;
