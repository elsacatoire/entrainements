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

test("divisible by 100 but not 400", () => {
    const result = isItALeapYear(1800)
    expect(result).toBeFalsy()
})


//    /\  /\ /\ /\                              /\  /\  /\
//   /  \/  \  /  \      Le code s'exécute     /  \/  \/  \
//  /   /    \/    \            ICI  :        /    \   \   \
//    ||  || || ||                              ||  ||  ||


// ==> export des modules <===