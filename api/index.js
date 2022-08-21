const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 4000;
const connection = require("./db/connection");

app.use(
  cors({
    origin: "*",
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/**
 * Get All Items
 *
 * @return response()
 */
app.get("/users", (res) => {
  let sqlQuery = "SELECT * FROM user";

  connection.query(sqlQuery, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

/**
 * Get Single Item
 *
 * @return response()
 */
app.get("/users/:userid", (req, res) => {
  let sqlQuery = "SELECT * FROM user WHERE user_id=" + req.params.userid;

  connection.query(sqlQuery, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

app.listen(port, () => {
  console.log(`Server running on port : ${port}`);
});
