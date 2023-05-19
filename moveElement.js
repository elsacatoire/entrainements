// script to create a list and then sort it

function moveElement(srcList, indexFrom, indexTo) {
    if (indexFrom < indexTo) {
        elementToMove = srcList[indexFrom]
        let modifiedList = []
        let before = srcList.slice(0, indexFrom)
        let between = srcList.slice(indexFrom + 1, indexTo)
        modifiedList = before.concat(between)
        modifiedList.push(elementToMove)
        let after = srcList.slice(indexTo)
        modifiedList = modifiedList.concat(after)
        return modifiedList
    } else {
        return console.log('error : order of exchange not supported');
    }
}
module.exports = moveElement;

