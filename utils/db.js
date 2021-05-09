const mysql = require("mysql2");
const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "root",
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