const express = require('express');
const app = express();

const handlebars = require('./handlers');

const PORT = process.env.PORT || 9010;


app.use('/', handlebars);


app.listen(PORT, () => {
    console.log(`Server is starting at PORT ${PORT}`);
});