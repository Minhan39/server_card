let express = require("express");
const data = require("./database");
let app = express();
let port = process.env.PORT || 3000;

app.listen(port);

app.route("/").get((req, res) => {
  res.json(data);
});

console.log("RESTful API server started on: http://localhost:" + port);
