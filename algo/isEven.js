function isEven(number) {
    if (number === undefined) {
      return false
    }
    if (typeof number !== 'number') {
      return false
    }
    if ((number % 2) !== 0) {
      return false
    }

    return true
  }
  
  module.exports = isEven;