function fizzBuzz(limit) {
    if (typeof limit !== "number") return "Not a number"
    const result = [];
    for (let i=1 ; i <= limit ; i++ ) {
        if (i % 15 === 0) {
            result.push('FizzBuzz') 
        } else if (i % 5 === 0) {
            result.push('Buzz')
        } else if (i % 3 === 0) {
            result.push('Fizz')
        } else {result.push(i.toString())}
    }
    return result
  }  

  module.exports = fizzBuzz