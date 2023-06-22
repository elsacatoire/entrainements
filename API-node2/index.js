/* 
elsa_des_bois création un API avec NodeJS
22 06 2023 Ada Tech School
on commence par créer un serveur local host
*/

/* création du serveur Express */
const express = require('express')
const app = express()

/* IMPORT des fichiers */
// importer les données de la ressource parkings
const parkings = require('./parkings.json')
// importer les données de la ressources reservations
const reservations = require('./reservations')
// Middleware
app.use(express.json())


/* --- DEFINITION des routes pour la ressource parkings --- */
// définir la route GET pour obtenir tous les parkings
app.get('/parkings', (req,res) => {
    res.status(200).json(parkings)
})

// définir la route GET pour obtenir un parking grace à son id
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

// définir la route DELETE pour supprimer un parking
app.delete('/parkings/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let parking = parkings.find(parking => parking.id === id)
    parkings.splice(parkings.indexOf(parking),1)
    res.status(200).json(parkings)})


    /* --- DEFINITION des routes pour la ressource reservations --- */
// définir la route GET pour tous les parkings

// définir la route GET pour un parking avec son id

// définir la route POST pour céer un nouveau parking

// définir la route PUT pour modifier un parking

// définir la route DELETE pour supprimer un parking



/* --- Quand le serveur se lance --- */
app.listen(8080, () => {
    console.log("Serveur à l'écoute")
})


