// getting dependencies
const express = require("express");
require("dotenv").config();

const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const logger = require("morgan");
const mongoose = require("mongoose");

const app = express();

// getting the enviroment variables
const port = process.env.PORT || 9002;
mongo_uri = process.env.MONGO_URI;

// database connect and models

// custom middlewares
app.use(bodyParser.json());
app.use(logger("tiny"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(cookieParser());
app.use(
  cors({
    origin: "*",
    optionsSuccessStatus: 200,
  })
);

// database connect and models
const connectDb = require("./connectDB/connectDB");
connectDb(mongo_uri);

//  Route paths
const signupRoute = require("./routes/signup");
const loginRoute = require("./routes/login");

// getting Routes
app.use("/api/signup", signupRoute);
app.use("/api/login", loginRoute);

// utils or plugin for adding collections to the database;
// const dbUpdate = require("./utils/DB")
// dbUpdate();
/**
 * for app production
 */

if (process.env.NODE_ENV === "production") {
  app.use(express.static(__dirname + "/public/"));

  // handling client page routing
  app.get(/.*/, (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
  });
}

// exporting the app.
module.exports = app;
