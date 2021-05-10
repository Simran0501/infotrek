const express = require("express");
const router = express.Router();
const path= require('path')

const db = require("../utils/db");

db.query("USE heroku_f2eb14710cbdcaa");

router.get('/', function(req, res) {
  res.sendFile( path.resolve('./public/static/index.html') );
});


router.get("/registration", function (request, response) {
    response.render("layout/registration");
  });

  router.post("/auth", function (request, response) {
    var rollno = request.body.rollno;
    var password = request.body.password;
    var name =  request.body.name;
    if (rollno.toString().length==9 && password && name) {
      db.query(
        "select * from  registration WHERE rollno = ?",
        [rollno, password,name],
        function (error, results, fields) {
          if (error) console.log(error);
          else {
           if(results.length>0) {
            response.render("layout/registration", {
              data: "already exists ",
            });
           }
              else
              {
                db.query(
                  "Insert into registration (rollno,password,name) values (?,?,?) ",
                  [ rollno,password,name],
                  function (err) {
                    if (err) throw err;
                    response.render("layout/registration", {
                      data: "success ",
                  })
               
                });
              }  
          }
        }
      );
    } else response.redirect("/registration");
  });


  router.get("/gallery", function (req, res) {
    res.sendFile( path.resolve('./public/static/gallery.html') );
  });

  
router.get('/events', function(req, res) {
  res.sendFile( path.resolve('./public/static/events.html') );
});

router.get('/contact', function(req, res) {
  res.sendFile( path.resolve('./public/static/contact.html') );
});

router.get('/team', function(req, res) {
  res.sendFile( path.resolve('./public/static/team.html') );
});


router.get('/about', function(req, res) {
  res.sendFile( path.resolve('./public/static/about.html') );
});

  module.exports = router;