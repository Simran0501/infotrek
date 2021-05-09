const mysql = require("mysql2");
const db = mysql.createConnection({
  host: "us-cdbr-east-03.cleardb.com",
  user: "b3445114d013ef",
  password: "d10893c6",
  port:"3306"
});

db.connect(function (err) {
  if (err) {
    console.error(err);
  }
});

db.query("CREATE DATABASE IF NOT EXISTS Infotrek_21", function (err, result) {
  if (err) throw err;
});

module.exports = db;
require("../models/registration");