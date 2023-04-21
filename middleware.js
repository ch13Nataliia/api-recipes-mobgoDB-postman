const express = require('express');
const cors = require('cors');

module.exports = function (app) {
  app.use(express.static('public'));

  app.use(express.json());
  app.use(
    cors({
      origin: '*',
    }),
  );
  // const recipes = [];

  // app.get('/api/v1/recipes', (req, res) => {
  //   res.status(200).json(recipes);
  // });

  // app.post('/api/v1/recipes', (req, res) => {
  //   recipes.push(req.body);
  //   res.sendStatus(201);
  // });
};
