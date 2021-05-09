

var db = require("../utils/db");

db.query("use heroku_73120ef8fb3d1db");

db.query(
  "CREATE TABLE IF NOT EXISTS registration (rollno int PRIMARY KEY ,password varchar (50),name varchar (50))",
  function (err, result) {
    if (err) throw err;
  }
);