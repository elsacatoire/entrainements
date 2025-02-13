function isEven(number) {
  return typeof number === 'number' && number % 2 === 0;
}
  
module.exports = isEven;