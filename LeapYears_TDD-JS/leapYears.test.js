//    /\  /\ /\ /\                              /\  /\  /\
//   /  \/  \  /  \ elsa_des_bois              /  \/  \/  \
//  /   /    \/    \    tests unitaire        /    \   \   \
//    ||  || || ||                              ||  ||  ||
//                      **Leap years TDD**

// ==> importer les fonctions dont on a besoin <==
const isItALeapYear = require("./leapYears")

// ==> déclaration des fonctions de test <==

test("easy case 2000", () => {
    const result = isItALeapYear(2000)
    expect(result).toBeTruthy()
})

test("easy case 400", () => {
    const result = isItALeapYear(400)
    expect(result).toBeTruthy()
})

const testCaseNot400 = [
    [1700, false],
    [1800, false],
    [1900, false],
    [2100, false],
    [2000, true],
]

test.each(testCaseNot400)('not 100', (annee, expectedResult) => {
    const result = isItALeapYear(annee)
    expect(result).toBe(expectedResult)
})

const testCase4not100 = [
    [2008, true],
    [2012, true],
    [2016, true],
]

test.each(testCase4not100)('4 not 100', (annee, expectedResult) => {
    const result = isItALeapYear(annee)
    expect(result).toBe(expectedResult)
})

const testCaseNot4 = [
    [2017, false],
    [2018, false],
    [2019, false],
]
test.each(testCaseNot4)('not 4', (annee, expectedResult) => {
    const result = isItALeapYear(annee)
    expect(result).toBe(expectedResult)
})



//    /\  /\ /\ /\                              /\  /\  /\
//   /  \/  \  /  \      Le code s'exécute     /  \/  \/  \
//  /   /    \/    \            ICI  :        /    \   \   \
//    ||  || || ||                              ||  ||  ||


// ==> export des modules <===