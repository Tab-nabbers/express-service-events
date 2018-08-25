const axios = require('axios');
const _ = require('lodash');
const { formatEventsBriteData } = require('./format/formatEventBrite');

const retrieveEvents = async (req, res) => {
    const value = req.params.q;

    try {
        const response = await axios({
            url: `https://www.eventbriteapi.com/v3/events/search?q=${value}`,
            method: 'GET',
            headers: {
                'Authorization': 'Bearer N2A6M2NFJFNS3JNORWIX'
            }
        });

        if (_.isEmpty(response.data.events)) {
            throw new Error('No events found!');
        }

        const filterEvents = formatEventsBriteData(response.data.events);

        res.json({
            events: filterEvents
        });
    } catch (error) {
        res.status(404).json(error);
    }
};


module.exports = {
    retrieveEvents
};