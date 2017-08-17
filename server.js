const express = require("express");
const path = require("path");
const mustacheExpress = require("mustache-express");
const port = process.env.PORT || 8000;
const data = require("./data");

const app = express();

app.engine("mustache", mustacheExpress());
app.set("views", "./views");
app.set("view engine", "mustache");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index", data);
});

app.get("/profile/:id", (req, res) => {
  let requestedUserId = parseInt(req.params.id);
  //parse the data for this now
  let userPage = data.users.find(user => user.id === requestedUserId);

  res.render("profile", userPage);
});

app.listen(port, function() {
  console.log(`server is running on port ${port}!`);
});
