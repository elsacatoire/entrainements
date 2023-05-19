const moveElement = require('./moveElement');

function sortList(listToSort) {
    let listSize = listToSort.length
    //compare from
    for (let compareID = 0; compareID < listSize - 1; compareID++) {
        let elementToCompare = listToSort[compareID]
        //compare to
        for (let testID = 1; testID < listSize; testID++) {
            let elementToTest = listToSort[testID];
            if (elementToCompare >= elementToTest) {
                console.log("keep going");
                if (testID == listSize - 1) {
                    listToSort = moveElement(listToSort, compareID, testID + 1)
                    break
                }
            } else {
                listToSort = moveElement(listToSort, compareID, testID)

            }
        }
    }
    return listToSort
}
module.exports = sortList;
