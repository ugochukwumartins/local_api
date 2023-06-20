const stateModel = require("../model/stateModel");

const Cache = require('../config/redisconfi');


exports.getState = async (req, res, next) => {

    try {
        const cacheKey = 'AllStates';

        const cachedState = await Cache.redis.get(cacheKey);

        if (cachedState) {
            // Cache hit
            return res.json({ status: true, order: JSON.parse(cachedState) })
        } else {
            const State = await stateModel.find();


            Cache.redis.setEx(cacheKey, 600, JSON.stringify(State))
            //  Cache.redis.set(cacheKey, JSON.stringify(State));
            return res.json({ message: "user login successfully", State });
        }


    }
    catch (error) {
        (error);
    }

}



exports.getStateByRegion = async (req, res, next) => {
    var State = [];
    try {
        const cacheKey = `AllStatese${req.params.geo_politcal_zone}`;

        const cachedState = await Cache.redis.get(cacheKey);

        if (cachedState) {
            // Cache hit
            return res.json({ status: true, order: JSON.parse(cachedState) })
        } else {
            const States = await stateModel.find({ geo_politcal_zone: req.params.geo_politcal_zone }, 'state');
            States.forEach((value, index) => {
                State.push(value.state);

            })

            Cache.redis.setEx(cacheKey, 600, JSON.stringify(State))
            return res.json({ total_state: State.length, State });


        }
    }
    catch (error) {
        (error);
    }

}

exports.getStateDetailsByRegion = async (req, res, next) => {

    try {
        const cacheKey = `AllStates${req.params.geo_politcal_zone}`;

        const cachedState = await Cache.redis.get(cacheKey);

        if (cachedState) {
            // Cache hit
            return res.json({ status: true, order: JSON.parse(cachedState) })
        } else {
            const State = await stateModel.find({ geo_politcal_zone: req.params.geo_politcal_zone })


            Cache.redis.setEx(cacheKey, 600, JSON.stringify(State))
            return res.json({ State });
        }
    }
    catch (error) {
        (error);
    }

}

exports.getAState = async (req, res, next) => {

    try {
        const cacheKey = `AllStates${req.params.state}`;

        const cachedState = await Cache.redis.get(cacheKey);

        if (cachedState) {
            // Cache hit
            return res.json({ status: true, order: JSON.parse(cachedState) })
        } else {
            const State = await stateModel.findOne({ state: req.params.state })


            Cache.redis.setEx(cacheKey, 600, JSON.stringify(State))
            return res.json({ State });
        }
    }
    catch (error) {
        (error);
    }

}

exports.getAStateByCapital = async (req, res, next) => {

    try {
        const cacheKey = `AllStates${req.params.capital}`;

        const cachedState = await Cache.redis.get(cacheKey);

        if (cachedState) {
            // Cache hit
            return res.json({ status: true, order: JSON.parse(cachedState) })
        } else {
            const State = await stateModel.findOne({ capital: req.params.capital })

            Cache.redis.setEx(cacheKey, 600, JSON.stringify(State))

            return res.json({ State });
        }
    }
    catch (error) {
        (error);
    }

}

exports.getAStateBySlogan = async (req, res, next) => {

    try {
        const cacheKey = `AllStates${req.params.slogan}`;

        const cachedState = await Cache.redis.get(cacheKey);

        if (cachedState) {
            // Cache hit
            return res.json({ status: true, order: JSON.parse(cachedState) })
        } else {
            const State = await stateModel.findOne({ slogan: req.params.slogan })


            Cache.redis.setEx(cacheKey, 600, JSON.stringify(State))
            return res.json({ State });
        }
    }
    catch (error) {
        (error);
    }

}

exports.getAStateByDialect = async (req, res, next) => {

    try {
        const cacheKey = `AllStates${req.params.dialect}`;

        const cachedState = await Cache.redis.get(cacheKey);

        if (cachedState) {
            // Cache hit
            return res.json({ status: true, order: JSON.parse(cachedState) })
        } else {
            const State = await stateModel.find({ dialect: req.params.dialect })

            Cache.redis.setEx(cacheKey, 600, JSON.stringify(State))

            return res.json({ State });
        }
    }
    catch (error) {
        (error);
    }

}


