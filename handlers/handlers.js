const express = require('express');
const router = express.Router();

const {
    retrieveEvents,
    getVenuesById
} = require('./events');


router.get('/', (req, res) => {
    res.json({
        type: 'events'
    })
});

router.get('/search/events', retrieveEvents);
router.get('/venues/:id', getVenuesById);


module.exports = router;