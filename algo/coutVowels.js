function countVowels(str) {
    if (typeof(str) !== 'string') return "not a string"

    const lowerStr = str.toLowerCase();
    let vowelsCounter = 0
    const vowels = ['a', 'e', 'i', 'o', 'u']

    for (const char of lowerStr ) {
        if (vowels.includes(char)) {
            vowelsCounter ++
        }
   }

   return vowelsCounter
  }

  module.exports = countVowels;
