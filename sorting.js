// script to create a list and then sort it

function createRandomList(howManyNb) {
    let finalList = []
    for (let i = 0; i < howManyNb; i++) {
        let randomNb = Math.floor(Math.random() * 100);
        finalList.push(randomNb)
    }
    return finalList
}


// main application
let randomList = createRandomList(4)
console.log(randomList);