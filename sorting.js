// script to create a list and then sort it

function createRandomList(howManyNb) {
    let finalList = []
    for (let i = 0; i < howManyNb; i++) {
        let randomNb = Math.floor(Math.random() * 100);
        finalList.push(randomNb)
    }
    return finalList
}

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

function sortList(listToSort) {
    for (let i = 0; i < listToSort.length; i++) {
        let elementToCompare = listToSort[i]
        for (let j = 0; j < listToSort.length; j++) {
            let elementToTest = listToSort[j];
            if (elementToCompare > elementToTest) {
                listToSort = moveElement(listToSort, i, j)
                console.log(listToSort);
            }
        }
    }
}
module.exports = sortList;


// main application
/* let randomList = createRandomList(4)
console.log(randomList);

console.log(sortList([3, 1, 2, 4, 5])); */