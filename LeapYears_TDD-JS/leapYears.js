
//    /\  /\ /\ /\                              /\  /\  /\
//   /  \/  \  /  \ elsa_des_bois              /  \/  \/  \
//  /   /    \/    \    fonctions principales /    \   \   \
//    ||  || || ||                              ||  ||  ||
//                      **Leap years TDD**

// ==> importer les fonctions dont on a besoin <==

// ==> déclaration des fonctions <==

function isItALeapYear(year) {
    if (year % 400 == 0) {
        return true
    }
    if(year % 4 == 0 && year % 100 !== 0) {
        return true
    }
    return false
    
}

//    /\  /\ /\ /\                              /\  /\  /\
//   /  \/  \  /  \      Le code s'exécute     /  \/  \/  \
//  /   /    \/    \            ICI  :        /    \   \   \
//    ||  || || ||                              ||  ||  ||


// ==> export des modules <===
module.exports = isItALeapYear