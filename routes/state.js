const express= require('express');
const passport = require("passport")
const stateController = require('../controller/addStateController');
const stateControllers = require('../controller/stateController');
const stateRouter = express.Router();




  
stateRouter.post("/ctreate_state",stateController.createState );
//localRouter.post("/login",passport.authenticate('headerapikey', { session: false }), userController.login);
stateRouter.get("/get_state",stateControllers.getState);
stateRouter.get("/get_state_by_region",stateControllers.getStateByRegion);
module.exports = stateRouter;