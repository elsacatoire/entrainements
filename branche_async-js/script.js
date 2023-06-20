
// on fourni une quote positive à chaque connexion


// fonction qui récupère la quote via une API

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function fetchPositivQuote() {
    const randomIndex = getRandomNumber(0,100);
    const positivQuotes = 'https://type.fit/api/quotes';
    const responseQuote = await fetch(positivQuotes);
    const dataQuote = await responseQuote.json();
    const quoteText = dataQuote[randomIndex].text;
    const quoteAuthor = dataQuote[randomIndex].author;
    console.log(quoteText);
    console.log(quoteAuthor);

    // affiche sur la page HTML
    document.getElementById('quoteText').textContent = quoteText;
    document.getElementById('quoteAuthor').textContent= quoteAuthor;
}

// fonction qui récupère une quote
function getInputValue() {
    var input = document.getElementById('myInput').value;
    console.log(input);

    // consevrer l'input en objet
    const inputObject = {
        quote : getInputValue
    };

    // convertir l'objet en JSON
    const jsonInput = JSON.stringify(inputObject);

    // stocker la valeur JSON dans le fichier local
    localStorage.setItem('newQuotes.json', jsonInput)
    
    
    
    fetch('newQuotes.json', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: jsonInput
    })
    .then(response => {
        if (response.ok) {
            console.log('data envoyées');
        } else {
            console.log('erreur');
        }
    })
    .catch(error => {
        console.log('erreur', error);
    })
}