const stateModel = require("../model/stateModel");

exports.createState = async (req, res, next) => {

    try {
            
        
        const state= req.body.state;
        const capital= req.body.capital;
        const slogan= req.body.slogan;
        const senatorial_districts= req.body.senatorial_districts;
        const lgas= req.body.lgas;
        const  landmass= req.body.landmass;
        const population= req.body.population;
        const dialect= req.body.dialect;
        const  latitude= req.body.latitude;
        const longitude= req.body.longitude;
        const  geo_politcal_zone= req.body.geo_politcal_zone;
        const created_date= req.body.created_date;
        const  borders= req.body.borders;
        const State = await stateModel.create({
            state,
            capital,
            slogan,
            senatorial_districts,
            lgas,
            landmass,
            population,
            dialect,
            latitude,
            longitude,
            geo_politcal_zone,
            created_date,
            borders
          });
           
                return res.json({ message: "user login successfully", State });
           }
            catch (error) { 
                (error); 
           } 
  
    }