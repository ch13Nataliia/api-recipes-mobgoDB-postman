const Recipe = require('../models/recipe.model');

exports.getRecipes = async (req, res) => {
  let query = {};
  if (req.params.id) {
    query._id = req.params.id;
  }
  try {
    const recipes = await Recipe.find(query);
    res.status(200).json(recipes);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.addRecipe = async (req, res) => {
  const recipeData = req.body;
  console.log('recipeData', recipeData);
  try {
    const newRecipe = new Recipe(recipeData);
    const result = await newRecipe.save();
    res.status(201).json(result);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.updateRecipe = async (req, res) => {
  try {
    const result = await Recipe.updateOne({ _id: req.params.id }, req.body);
    if (result.n === 0) return res.sendStatus(404);
    res.sendStatus(200);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.removeRecipe = async (req, res) => {
  try {
    const result = await Recipe.deleteOne({ _id: req.params.id });
    if (result.n === 0) return res.sendStatus(404);
    res.sendStatus(204).json(result);
  } catch (err) {
    res.status(500).send(err);
  }
};
