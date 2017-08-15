const express = require("express");
const path = require("path");
const mustacheExpress = require("mustache-express");
const port = process.env.PORT || 8000;
const data = require("../repository/data");

const app = express();

app.engine("mustache", mustacheExpress());
app.set("views", "./views");
app.set("view engine", "mustache");

app.use(express.static(path.join(__dirname, "/dailyproject/public")));

app.get("/directory", function(req, res) {});

app.listen(port, function() {
  console.log(`server is running on port ${port}!`);
});
