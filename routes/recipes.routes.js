const path = require('path');
const express = require('express');
const router = express.Router();

const {
  getRecipes,
  addRecipe,
  updateRecipe,
  removeRecipe,
} = require('../controllers/recipe.controller');

router
  .get('/:id?', getRecipes)
  .post('/', addRecipe)
  .put('/:id', updateRecipe)
  .delete('/:id', removeRecipe);

module.exports = router;
