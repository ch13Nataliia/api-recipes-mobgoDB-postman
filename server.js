const express = require('express');
const setupMiddleware = require('./middleware');


const app = express();
setupMiddleware(app);
require('./db')

module.exports = app;
