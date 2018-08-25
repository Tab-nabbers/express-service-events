const express = require('express');
const router = express.Router();

const {
    retrieveEvents
} = require('./events');


router.get('/search/events', retrieveEvents);


module.exports = router;