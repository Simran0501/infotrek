
const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const session = require("cookie-session");
const compression = require("compression");


const router = require("./router/routes");


const app = express();

app.set("views", path.join(__dirname, "/views/"));
app.engine(
  "handlebars",
  exphbs({
    extname: ".hbs",
    defaultLayout: "registration",
    layoutsDir: __dirname + "/views/layouts/",
    challengesDir: __dirname + "/views/static/",
  })
);

app.set("view engine", "hbs");

app.use(express.static(__dirname + "/public"));

const cors = require("cors");

require("dotenv").config({ path: "./configure.env" });

app.use(
  session({
    secret: "Keep it secret",
    name: "uniqueSessionID",
    resave: true,
    saveUninitialized: false,
  })
);
app.use(compression());

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(cors());
app.use(router);




app.listen(process.env.PORT, () => {
  console.log("Welcome to INFOTREK.....");
});

