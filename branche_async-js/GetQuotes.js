
// on fourni une quote positive à chaque connexion


//fonction qui récupère la quote via une API
async function fetchPositivQuote() {
    const positivQuotes = 'https://www.affirmations.dev/'

    const responseQuote = await fetch(positivQuotes)
    const dataQuote = await responseQuote.json()

    console.log(dataQuote.affirmation);
}

function getInputValue() {
    const input = document.getElementById('#myInput');
    const value = input.value;
    console.log(value);
}


// fonction qui va récuprérer les quotes des usagers
/* async function postPositivQuote() {
    const inputQuote = 
} */







// simulation, la personne se connecte run :
fetchPositivQuote()