const express= require('express');
const passport = require("passport")
const userController = require('../controller/userController');
const localRouter = express.Router();




  /**
 * @swagger
 * /signUp:
 *   post:
 *     summary: Sign Up to be able to get ur api key
 *     description: Sign Up to be able to get ur api key to Retrieve states and local government  data from the server with a single call
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Response message
 */
localRouter.post("/signUp",userController.signup );
localRouter.post("/login",passport.authenticate('headerapikey', { session: false }), userController.login);

module.exports = localRouter;
  