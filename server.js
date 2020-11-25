const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
require('dotenv').config();

const routes = require('./routes/routes');

const app = express();
app.use(cors());
const port = process.env.PORT || 3001;

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/api/1', routes);

app.listen(port, () => {
    console.log(`App listening at https://chat-node-pa.herokuapp.com/:${port}`)
});

module.exports = app;