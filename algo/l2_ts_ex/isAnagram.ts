export  const isAnagram = (words: Array<string>): boolean => {
    if (!Array.isArray(words) || words.length !== 2) throw new Error("Invalid entry")
    const sortedWords = words.map((word) => word.split('').sort().join(''));
    return sortedWords[0] === sortedWords[1];
}