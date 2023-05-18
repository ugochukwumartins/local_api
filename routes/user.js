const express= require('express');
const passport = require("passport")
const userController = require('../controller/userController');
const localRouter = express.Router();




  
localRouter.post("/signUp",userController.signup );
localRouter.post("/login",passport.authenticate('headerapikey', { session: false }), userController.login);

module.exports = localRouter;
  