
// Api qui va me fournir mes quotes

const positivQuotes = 'https://www.affirmations.dev/'

const responseQuote = await fetch(positivQuotes)
const dataQuote = await responseQuote.json()

console.log(dataQuote);