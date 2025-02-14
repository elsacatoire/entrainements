export  const isAnagram = (words: Array<string>): boolean => {
    if (!Array.isArray(words) || words.length !== 2 || words.some(w => typeof w !== 'string' || w.trim() === '') ) {
        throw new Error("Invalid entry")
    }
 
    const normalize = (word: string) => word
                                                                .toLowerCase()
                                                                .replace(/\s+/g, '')
                                                                .split('')
                                                                .sort()
                                                                .join('');
    const [first, second] = words.map(normalize)
    return first === second;
}