const express= require('express');
const passport = require("passport")
const stateController = require('../controller/addStateController');
const stateControllers = require('../controller/stateController');
const stateRouter = express.Router();




  
// stateRouter.post("/ctreate_state",stateController.createState );
//localRouter.post("/login",passport.authenticate('headerapikey', { session: false }), userController.login);


/**
 * @swagger
 * /get_state:
 *   get:
 *     summary: Get all state in Nigeria
 *     description: Retrieve states and local government  data from the server with a single call
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
stateRouter.get("/get_state",passport.authenticate('headerapikey', { session: false }),stateControllers.getState);

/**
 * @swagger
 * /get_stateBySlogan:
 *   get:
 *     summary: Get a state in Nigeria by Slogan
 *     description: Retrieve state and local government  data from the server with a single call
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
stateRouter.get("/get_stateBySlogan",passport.authenticate('headerapikey', { session: false }),stateControllers.getAStateBySlogan);

/**
 * @swagger
 * /get_state_ByDialect:
 *   get:
 *     summary: Get all state in Nigeria by dialect
 *     description: Retrieve state and local government  data from the server with a single call
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
stateRouter.get("/get_state_ByDialect",passport.authenticate('headerapikey', { session: false }),stateControllers.getAStateByDialect);

/**
 * @swagger
 * /get_a_state:
 *   get:
 *     summary: Get a state in Nigeria
 *     description: Retrieve state and local government  data from the server with a single call
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
stateRouter.get("/get_a_state",passport.authenticate('headerapikey', { session: false }),stateControllers.getAState);

/**
 * @swagger
 * /get_a_state_byCapital:
 *   get:
 *     summary: Get a state in Nigeria by capital
 *     description: Retrieve state and local government  data from the server with a single call
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
stateRouter.get("/get_a_state_byCapital",passport.authenticate('headerapikey', { session: false }),stateControllers.getAStateByCapital);

/**
 * @swagger
 * /get_state_by_region:
 *   get:
 *     summary: Get all state in Nigeria by reagin
 *     description: Retrieve states and and number of states  data from the server with a single call
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
stateRouter.get("/get_state_by_region",passport.authenticate('headerapikey', { session: false }),stateControllers.getStateByRegion);

/**
 * @swagger
 *  components:
 *      schema:
 *          State:
 *              type: object
 *              properties:
 *                  id: 
 *                      type: string
 *                  state:
 *                      type: string  
 *                  capital:
 *                      type: string
 *                  slogan: 
 *                      type: string 
 *                  senatorial_districts: 
 *                      type: array
 *                  lgas: 
 *                      type: array,
 *                  landmass: 
 *                      type: string
 *                  population:
 *                      type: string 
 *                  dialect: 
 *                      type: string
 */

/**
 * @swagger
 * /get_state_details_by_region:
 *   get:
 *     summary: Get all state in Nigeria by region
 *     description: Retrieve states and local government  data from the server with a single call
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#components/schema/State'
 */
stateRouter.get("/get_state_details_by_region",passport.authenticate('headerapikey', { session: false }),stateControllers.getStateDetailsByRegion);
module.exports = stateRouter;