const Recipe = require("../models/recipe/recipe.model");

exports.getRecipes = function (req, res) {
  let query = {};
  if (req.params.id) {
    query._id = req.params.id;
  }
  Recipe.find(query).exec((err, recipes) => {
    if (err) return errorHandler(res, err);
    return res.status(200).json(recipes);
  });
};

exports.addRecipe = function (req, res) {
  const recipeData = req.body;
  console.log("recipeData", recipeData);
  const newRecipe = new Recipe(recipeData);
  newRecipe.save((err, recipe) => {
    if (err) return errorHandler(res, err);
    return res.status(201).json(recipe);
  });
};

exports.updateRecipe = function (req, res) {
  Recipe.updateOne({ _id: req.params.id }, req.body, function (err) {
    if (err) return errorHandler(res, err);
    res.sendStatus(200);
  });
};

exports.removeRecipe = function (req, res) {
  Recipe.deleteOne({ _id: req.params.id }, function (err) {
    if (err) return errorHandler(res, err);
    res.sendStatus(204);
  });
};
