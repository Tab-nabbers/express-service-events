const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');


app.use(cors());
app.use(bodyParser());
app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const handlebars = require('./handlers');

const PORT = process.env.PORT || 9010;


app.use('/', handlebars);


app.listen(PORT, () => {
    console.log(`Server is starting at PORT ${PORT}`);
});