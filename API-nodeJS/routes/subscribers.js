const express = require('express')
const router = express.Router()
const Subscriber = require('../models/subscriber')

// Getting all
router.get('/', async (req, res) => {
    try {
        const subscribers = await Subscriber.find()
        res.json(subscribers)

    } catch (err) {
        res.status(500).json({ message : err.message })

    }
})

// Getting one
router.get('/:id', async (req, res) => {

})
// Creating one
router.post('/', (req, res) => {

})
// Updating one
router.patch('/', (req, res) => {

})
// Deleting one
router.delete('/:id', (req, res) => {

})

module.exports = router