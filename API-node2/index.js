

// création du serveur Express
const express = require('express')
const app = express()
// importer les données
const parkings = require('./parkings.json')

// définir la route GET pour tous les parkings
app.get('/parkings', (req,res) => {
    res.status(200).json(parkings)
})

// définir la route GET pour un parking avec son id
app.get('/parkings/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const parking = parkings.find(parking => parking.id === id)
    res.status(200).json(parking)
})

// quand le serveur se lance
app.listen(8080, () => {
    console.log("Serveur à l'écoute")
})
