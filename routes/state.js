const express= require('express');
const passport = require("passport")
const stateController = require('../controller/addStateController');
const stateControllers = require('../controller/stateController');
const stateRouter = express.Router();




  
stateRouter.post("/ctreate_state",stateController.createState );
//localRouter.post("/login",passport.authenticate('headerapikey', { session: false }), userController.login);
stateRouter.get("/get_state",passport.authenticate('headerapikey', { session: false }),stateControllers.getState);
stateRouter.get("/get_stateBySlogan",passport.authenticate('headerapikey', { session: false }),stateControllers.getAStateBySlogan);
stateRouter.get("/get_state_ByDialect",passport.authenticate('headerapikey', { session: false }),stateControllers.getAStateByDialect);
stateRouter.get("/get_a_state",passport.authenticate('headerapikey', { session: false }),stateControllers.getAState);
stateRouter.get("/get_a_state_byCapital",passport.authenticate('headerapikey', { session: false }),stateControllers.getAStateByCapital);
stateRouter.get("/get_state_by_region",passport.authenticate('headerapikey', { session: false }),stateControllers.getStateByRegion);
stateRouter.get("/get_state_details_by_region",passport.authenticate('headerapikey', { session: false }),stateControllers.getStateDetailsByRegion);
module.exports = stateRouter;