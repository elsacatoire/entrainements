
function findMax(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return "Invalid array";
    return Math.max(...arr)
}
  
module.exports = findMax
  