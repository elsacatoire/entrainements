// création du serveur Express
const express = require('express')
const app = express()

// importer les données
const parkings = require('./parkings.json')

// Middleware
app.use(express.json())

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

// définir la route POST pour céer un nouveau parking
app.post('/parkings', (req,res) => {
    parkings.push(req.body)
    res.status(200).json(parkings)
})

// définir la route PUT pour modifier un parking
app.put('/parkings/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let parking = parkings.find(parking => parking.id === id)
    parking.name =req.body.name,
    parking.city =req.body.city,
    parking.type =req.body.type,
    res.status(200).json(parking)})


// quand le serveur se lance
app.listen(8080, () => {
    console.log("Serveur à l'écoute")
})


