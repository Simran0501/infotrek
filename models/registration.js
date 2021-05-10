

var db = require("../utils/db");

db.query("use heroku_f2eb14710cbdcaa");

db.query(
  "CREATE TABLE IF NOT EXISTS registration (rollno int PRIMARY KEY ,password varchar (50),name varchar (50))",
  function (err, result) {
    if (err) console.log(err);
  }
);