const stateModel = require("../model/stateModel");



exports.getState = async (req, res, next) => {

    try {
        const State = await stateModel.find();
       
      
           
                return res.json({ message: "user login successfully", State });
           }
            catch (error) { 
                (error); 
           } 
  
    }



    exports.getStateByRegion = async (req, res, next) => {
var State =[];
        try {
            const States= await stateModel.find({geo_politcal_zone:req.body.geo_politcal_zone},'state').select({
                "_id": 0
              });
         States.forEach((value,index) => {
            State.push( value.state);
           
          })
          
               
                    return res.json({  State });
               }
                catch (error) { 
                    (error); 
               } 
      
        }