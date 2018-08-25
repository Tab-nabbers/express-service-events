function formatEventsBriteData(events) {
    let results = [];

    for (let i = 0; i < events.length; i++) {
        delete events[i].capacity_is_custom;
        delete events[i].currency;
        delete events[i].online_event;
        delete events[i].source;
        delete events[i].show_pick_a_seat;
        delete events[i].shareable;
        delete events[i].tx_time_limit;
        delete events[i].description.html;

        results.push(events[i]);
    }
    return results;
}

module.exports = {
    formatEventsBriteData
}