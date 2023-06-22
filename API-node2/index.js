// création du serveur Express
const express = require('express')
const app = express()

// définir la route GET
app.get('/parkings', (req,res) => {
    res.send("Liste des parkings")
})
app.listen(8080, () => {
    console.log("Serveur à l'écoute")
})
