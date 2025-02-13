export function fizzBuzz(limit: number): Array<string> {
    if (typeof limit !== "number") throw new Error ("Not a number")
    const result = [];
    for (let i=1 ; i <= limit ; i++ ) {
        let output = '';
        if (i % 3 === 0) output += 'Fizz';
        if (i % 5 === 0) output += 'Buzz';
        result.push(output || i.toString())
    }
    return result;
  }  
