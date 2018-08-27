const express = require('express');
const router = express.Router();

const {
    retrieveEvents,
    getVenuesById,
    getEventById
} = require('./events');


router.get('/', (req, res) => {
    res.json({
        type: 'events'
    })
});

router.get('/search/events', retrieveEvents);
router.get('/venues/:id', getVenuesById);
router.get('/event/:id', getEventById);


module.exports = router;