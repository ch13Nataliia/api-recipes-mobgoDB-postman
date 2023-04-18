const mongoose = require("mongoose");

const {
  Schema
} = mongoose;

const RecipeSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
     type: String,
    required: true,
},
author: {
    type: String,
    required: true,
  },
});

const Recipe = mongoose.model("Recipe", RecipeSchema);

module.exports = Recipe;