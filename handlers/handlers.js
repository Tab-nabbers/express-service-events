const express = require('express');
const router = express.Router();

const {
    retrieveEvents
} = require('./events');


router.get('/', (req, res) => {
    res.json({
        type: 'events'
    })
});
router.get('/search/events', retrieveEvents);


module.exports = router;