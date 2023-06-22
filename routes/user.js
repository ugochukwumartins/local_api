const express= require('express');
const passport = require("passport")
const userController = require('../controller/userController');
const localRouter = express.Router();

/**
 * @swagger
 *  components:
 *      schema:
 *          User:
 *              type: object
 *              properties:
 *                  email: 
 *                      type: string
 *                  password:
 *                      type: string  
 *                  user_name:
 *                      type: string
 */


// /**
//  * @swagger
//  * /signUp:
//  *   post:
//  *     summary: Get all state in Nigeria by region after registration
//  *     description: sign up to be able to get your api keys 
//  *     requestBody:
//  *            required: true
//  *            content:
//  *              application/json:
//  *                schema:
//  *                   $ref: '#components/schema/User'
//  */
localRouter.post("/signUp",userController.signup );
localRouter.post("/login",passport.authenticate('headerapikey', { session: false }), userController.login);

module.exports = localRouter;
  