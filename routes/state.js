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
 * /get_stateBySlogan/{slogan}:
 *   get:
 *     summary: Get a state in Nigeria by Slogan
 *     description: Retrieve state and local government  data from the server with a single call
 *     parameters:
 *          - in: path
 *            name: slogan
 *            required: true
 *            description: eg God's Own State please follow the type format
 *            schema:
 *              type: string
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
stateRouter.get("/get_stateBySlogan/:slogan",passport.authenticate('headerapikey', { session: false }),stateControllers.getAStateBySlogan);

/**
 * @swagger
 * /get_state_ByDialect/{dialect}:
 *   get:
 *     summary: Get all state in Nigeria by dialect
 *     description: Retrieve state and local government  data from the server with a single call
 *     parameters:
 *          - in: path
 *            name: dialect
 *            required: true
 *            description:  eg Igbo please follow the type format
 *            schema:
 *              type: string
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
stateRouter.get("/get_state_ByDialect/:dialect",passport.authenticate('headerapikey', { session: false }),stateControllers.getAStateByDialect);

/**
 * @swagger
 * /get_a_state/{state}:
 *   get:
 *     summary: Get a state in Nigeria
 *     description: Retrieve state and local government  data from the server with a single call
 *     parameters:
 *          - in: path
 *            name: state
 *            required: true
 *            description: eg Abia please follow the type format
 *            schema:
 *              type: string
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
stateRouter.get("/get_a_state/:state",passport.authenticate('headerapikey', { session: false }),stateControllers.getAState);

/**
 * @swagger
 * /get_a_state_byCapital/{capital}:
 *   get:
 *     summary: Get a state in Nigeria by capital
 *     description: Retrieve state and local government  data from the server with a single call
 *     parameters:
 *          - in: path
 *            name: capital
 *            required: true
 *            description: eg Ikeja please follow the type format
 *            schema:
 *              type: string
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
stateRouter.get("/get_a_state_byCapital/:capital",passport.authenticate('headerapikey', { session: false }),stateControllers.getAStateByCapital);

/**
 * @swagger
 * /get_state_by_region/{geo_politcal_zone}:
 *   get:
 *     summary: Get all state in Nigeria by reagin
 *     description: Retrieve states and and number of states  data from the server with a single call
 *     parameters:
 *          - in: path
 *            name: geo_politcal_zone
 *            required: true
 *            description: enter your region eg North East please follow the type format
 *            schema:
 *              type: string
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
stateRouter.get("/get_state_by_region/:geo_politcal_zone",passport.authenticate('headerapikey', { session: false }),stateControllers.getStateByRegion);

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
 * /get_state_details_by_region/{geo_politcal_zone}:
 *   get:
 *     summary: Get all state in Nigeria by region
 *     description: Retrieve states and local government  data from the server with a single call
 *     parameters:
 *          - in: path
 *            name: geo_politcal_zone
 *            required: true
 *            description: enter your region eg North East please follow the type format
 *            schema:
 *              type: string
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
stateRouter.get("/get_state_details_by_region/:geo_politcal_zone",passport.authenticate('headerapikey', { session: false }),stateControllers.getStateDetailsByRegion);
module.exports = stateRouter;