const path = require("path");

module.exports = function (app) {
  const API_ENDPOINT = "/api";
  const API_VERSION = "v1";

  app.use(`${API_ENDPOINT}/${API_VERSION}/recipes`, require("./recipes.routes"));


  app.all("*", (req, res) => {
    res.sendStatus(404);
  });
}; 