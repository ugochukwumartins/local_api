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
            const States= await stateModel.find({geo_politcal_zone:req.body.geo_politcal_zone},'state');
         States.forEach((value,index) => {
            State.push( value.state);
           
          })
          
               
                    return res.json({ total_state: State.length , State });
               }
                catch (error) { 
                    (error); 
               } 
      
        }

        exports.getStateDetailsByRegion = async (req, res, next) => {
           
                    try {
                        const State= await stateModel.find({geo_politcal_zone:req.body.geo_politcal_zone})
                   
                      
                           
                                return res.json({  State });
                           }
                            catch (error) { 
                                (error); 
                           } 
                  
                    }

                    exports.getAState = async (req, res, next) => {
           
                        try {
                            const State= await stateModel.findOne({state:req.body.state})
                       
                          
                               
                                    return res.json({  State });
                               }
                                catch (error) { 
                                    (error); 
                               } 
                      
                        }

                        exports.getAStateByCapital = async (req, res, next) => {
           
                            try {
                                const State= await stateModel.findOne({capital:req.body.capital})
                           
                              
                                   
                                        return res.json({  State });
                                   }
                                    catch (error) { 
                                        (error); 
                                   } 
                          
                            }

                            exports.getAStateBySlogan = async (req, res, next) => {
           
                                try {
                                    const State= await stateModel.findOne({slogan:req.body.slogan})
                               
                                  
                                       
                                            return res.json({  State });
                                       }
                                        catch (error) { 
                                            (error); 
                                       } 
                              
                                }

                                exports.getAStateByDialect = async (req, res, next) => {
           
                                    try {
                                        const State= await stateModel.find({dialect:req.body.dialect})
                                   
                                        
                                           
                                                return res.json({  State });
                                           }
                                            catch (error) { 
                                                (error); 
                                           } 
                                  
                                    }
           

                                    