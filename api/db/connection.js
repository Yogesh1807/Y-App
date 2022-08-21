const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "test",
});

connection.connect(function (err) {
  if (err) throw err;
  else console.log("Connected");
});

module.exports = connection;
