const express = require("express");
const moment = require("moment");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const userRoute = require("./routes/user");
const stateRoute = require("./routes/state");
const Cache = require('./config/redisconfi');
const passport = require("passport");
const rateLimit = require ("express-rate-limit")
const swagger = require ("./utils/swagger")
const { connectToDb } = require("./db");

const jwt = require("jsonwebtoken");
require("dotenv").config();
require("./services/auth")

const app = express();

// app.use((req, res, next) => {
// 	res.header('Access-Control-Allow-Origin', '*');
// 	res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
// 	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
// 	next();
//   });
app.use(passport.initialize());


require("dotenv").config();

const PORT = process.env.PORT;
let User;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
const limiter = rateLimit({
	windowMs: 1440 * 60 * 1000, // 15 minutes
	max: 100, 
	standardHeaders: true, 
	legacyHeaders: false, 
})

app.use(limiter);

app.use(userRoute);
app.use(stateRoute)
connectToDb();

Cache.connect()
app.listen(PORT, () => {
    console.log("Listening on port, ", PORT);
	swagger.swaggerDocs(app,PORT)
  });
  
  module.exports = app;