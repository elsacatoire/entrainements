
function findMax(arr) {
    if (!Array.isArray(arr)){
        return "not an array";
    }

    if (arr.length === 0) {
        return "empty array"
    }
    let max = arr[0]
    for (num of arr) {
        if (max < num){
            max = num
        }
    }

    return max
  }
  
  module.exports = findMax
  