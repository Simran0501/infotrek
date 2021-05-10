const mysql = require("mysql2");
const db = mysql.createConnection({
  host: "us-cdbr-east-03.cleardb.com",
  user: "b2842440789e6a",
  password: "47877e70",
  port:"3306"
});

db.connect(function (err) {
  if (err) {
    console.error(err);
  }
});



module.exports = db;
require("../models/registration");