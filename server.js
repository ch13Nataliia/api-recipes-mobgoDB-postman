const express = require('express');
const setupMiddleware = require('./middleware');


const app = express();
setupMiddleware(app);

module.exports = app;
