const express = require("express");
const moment = require("moment");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const userRoute = require("./routes/user");
const passport = require("passport");
const { connectToDb } = require("./db");

const jwt = require("jsonwebtoken");
require("dotenv").config();

const app = express();

app.use(passport.initialize());

require("dotenv").config();

const PORT = process.env.PORT;
let User;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use(userRoute);

connectToDb();


app.listen(PORT, () => {
    console.log("Listening on port, ", PORT);
  });
  
  module.exports = app;