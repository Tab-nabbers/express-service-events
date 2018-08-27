const axios = require('axios');
const host = 'https://www.eventbriteapi.com/v3';

const retrieveEvents =  (req, res) => {
    const resource = '/events/search';
    const value = req.query.q || 'javascript';
    
    let params = `?q=${value}&categories=102`;

    if (req.query.latitude) {
        params += `&location.latitude=${req.query.latitude}`;
    }

    if (req.query.longitude) {
        params += `&location.longitude=${req.query.latitude}`;
    }

    axios({
        url: `${host}${resource}${params}`,
        method: 'GET',
        headers: {
            'Authorization': 'Bearer N2A6M2NFJFNS3JNORWIX'
        }
    })
    .then((response) => {
        res.json({
            ...response.data
        });
    })
    .catch((error) => res.status(501).json(error));

};



const getVenuesById = (req, res) => {
    const id = req.params.id;

    axios({
        url: `https://www.eventbriteapi.com/v3/venues/${id}`,
        method: 'GET',
        headers: {
            'Authorization': 'Bearer N2A6M2NFJFNS3JNORWIX'
        }
    })
    .then((response) => {
        res.json({
            ...response.data
        });
    })
    .catch((error) => {
        res.status(404).json(error);
    });

    
};


const getEventById = (req, res) => {

    const id = req.params.id;

    axios({
        url: `https://www.eventbriteapi.com/v3/events/${id}`,
        method: 'GET',
        headers: {
            'Authorization': 'Bearer N2A6M2NFJFNS3JNORWIX'
        }
    })
    .then((response) => {
        res.json({
            ...response.data
        });
    })
    .catch((error) => {
        res.status(404).json(error);
    })
};

module.exports = {
    retrieveEvents,
    getVenuesById,
    getEventById
};