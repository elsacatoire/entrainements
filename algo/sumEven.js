function sumEven(arr) {
    if (!Array.isArray(arr)) return 'Not an array'
    result = 0
    for (num of arr) {
        if (num % 2 === 0 ) {result = result + num}
    }
    return result
}
  
module.exports = sumEven
  