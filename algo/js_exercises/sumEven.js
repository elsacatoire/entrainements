function sumEven(arr) {
    if (!Array.isArray(arr)) return 'Not an array';
    return arr.filter((num) => num % 2 === 0).reduce((acc, num) => acc + num, 0);
}
  
module.exports = sumEven
  