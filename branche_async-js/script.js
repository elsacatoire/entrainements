
// on fourni une quote positive à chaque connexion


// fonction qui récupère la quote via une API

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function fetchPositivQuote() {
    const randomIndex = getRandomNumber(1,100);
    const positivQuotes = 'https://type.fit/api/quotes'
    const responseQuote = await fetch(positivQuotes)
    const dataQuote = await responseQuote.json()
    console.log(dataQuote[randomIndex].text);
    console.log(dataQuote[randomIndex].author);
}

// fonction qui récupère une quote
function getInputValue() {
    var input = document.getElementById('myInput').value;
    alert(input);
}




// fonction qui va récuprérer les quotes des usagers
/* async function postPositivQuote() {
    const inputQuote = 
} */







// simulation, la personne se connecte run :
//fetchPositivQuote()