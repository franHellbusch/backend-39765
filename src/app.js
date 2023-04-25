const express = require('express');
const router = require('./routes');
const errorHandler = require('./middlewares/errorHandler');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', router);

app.use(errorHandler);

module.exports = app;
