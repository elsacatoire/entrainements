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

function sortList(ListToSort) {
    for (let i = 0; i < ListToSort.length; i++) {
        const element = array[i];

    }
}


// main application
let randomList = createRandomList(4)
console.log(randomList);

console.log(moveElement([1, 2, 3, 4, 5, 6], 1, 3));