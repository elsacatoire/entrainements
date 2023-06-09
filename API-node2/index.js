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

/** * Import MongoClient & connexion à la DB */
const MongoClient = require('mongodb').MongoClient;const url = 'mongodb://localhost:27017'
const dbName = 'parkingApi'
let db
MongoClient.connect(url, function(err, client) {
    console.log("Connected successfully to server")
    db = client.db(dbName);})

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
// définir la route GET pour obtenir toutes les réservations d'un parkings
app.get('/parkings/:parkingId/reservations', (req, res) => {
    const parkingId = req.params.parkingId
    const parkingReservations = reservations.filter(reservation => reservation.parkingId === Number(parkingId))
    res.json(parkingReservations)
})

// définir la route GET pour obtenir une réservation en particulier
app.get('/parkings/:parkingId/reservations/:reservationId', (req, res) => {
    const parkingId = req.params.parkingId
    const reservationId = req.params.reservationId
    // recherche de la réservation spécifique
    const reservation = reservations.find(reservation => reservation.parkingId === Number(parkingId) && reservation.id === Number(reservationId))

    if (reservation) {
        res.json(reservation)
    } else {
        res.status(404).json({
            message: 'Reservation non trouvée'
        })
    }
})

// définir la route POST pour céer une nouvelle réservation
app.post('/parkings/:parkingId/reservations', (req, res) => {
    const parkingId = req.params.parkingId
    const { clientName } = req.body
    // génération d'un nouvel identifiant pour la réservation
    const newReservationId = reservations.length + 1

    // Création de la nouvelle réservation
    const newReservation = {
    id: newReservationId,
    parkingId: Number(parkingId),
    clientName: clientName
    }

    // ajout de la réservation dans la liste des reservtaions
    reservations.push(newReservation)
    res.status(201).json(newReservation)
})

// définir la route PUT pour modifier une réservation
app.put('/parkings/:parkingId/reservations/:reservationId', (req,res) => {
    const parkingId = req.params.parkingId
    const reservationId = req.params.reservationId
    const {
        parking,
        parkingId: newParkingId,
        city,
        clientName,
        vehicle,
        licensePlate,
        checkin,
        checkout
    } = req.body

    // recherche de la réservation à modifier
    const reservation = reservations.find(
        (reservation) => 
        reservation.parkingId === Number(parkingId) && 
        reservation.id === Number(reservationId)
        )
    
        if (reservation) {
            // Mise à jour du nom de la réservation
            reservation.parking = req.body.parking
            reservation.parkingId = req.body.newParkingId
            reservation.city = req.body.city
            reservation.clientName = req.body.clientName
            reservation.vehicle = req.body.vehicle
            reservation.licensePlate = req.body.licensePlate
            reservation.checkin = req.body.checkin
            reservation.checkout = req.body.checkout

            res.json(reservation);
        } else {
            res.status(404).json({ message: 'Réservation non trouvée' });
        }
    })

// définir la route DELETE pour supprimer une réservation
app.delete('/parkings/:parkingId/reservations/:reservationId', (req,res) => {
    const parkingId = req.params.parkingId
    const reservationId = req.params.reservationId

    // recherche de la réservation à supprimer
    const reservationIndex = reservations.findIndex(
        (reservation) => 
        reservation.parkingId === Number(parkingId) && 
        reservation.id === Number(reservationId)
        )
    
        if(reservationId !== -1) {
            // suppression de la réservation de la liste
            const deleteReservation = reservations.splice(reservationIndex, 1)
            res.json(deleteReservation[0])
        } else {
            res.status(404).json({message : 'Réservation non trouvée'})
        }
})


/* --- Quand le serveur se lance --- */
app.listen(8080, () => {
    console.log("Serveur à l'écoute")
})
