const passport = require("passport");
const keygen = require('../utils/utilsfile')
const usersModel = require("../model/userModel");




exports.signup = async (req, res, next) => {


passport.authenticate("signup", async (erro, user, info)=>{
    try{
console.log(user);
if(erro){

    res.json({ message: erro.message })
    return next(erro);
}
if(!user){
   
    res.json({ message: erro.message })
    return next(erro);
}
req.login(user, {session :false}, async (error)=>{
    if(error) return next(error);
    res.json({ message: user.api_key});

})
//res.sendStatus(200);
//res.json({ message: user.api_key, statusCode:res.sendStatus(200)});
//res.send(user.api_key)
    }
    catch(e){
        res.send(e.message)
    } 
})(req, res, next);
}

exports.login = async (req, res, next) => {

    try {
            
        const usermail= req.body.email;
            const user = await usersModel.findOne({email: usermail });
            
            var api_keyss = req.header("Authorization");
            const api_keys = api_keyss.replace('Api-Key ', '')
             console.log(user);
             console.log(api_keys);
              if (!user) { 
               return res.json({  message: "user not found" });
            }
            console.log( user.api_key)
           
             const validated = await usersModel.findOne({api_key: api_keys}); 
             if (!validated) {
                return res.json({ message: "wrong api_key" });
                }
                return res.json({ message: "user login successfully" });
           }
            catch (error) { 
                (error); 
           } 
    // passport.authenticate('signup', async (erro, user, info)=>{
    //     try{
    // console.log(user);
    // if(erro){
       
    //     res.json({ message: erro.message })
    //     return next(erro);
    // }
    // if(!user){
    //     res.json({ message: erro.message })
    //     return next(erro);
    // }
    // req.login(user, {session :false}, async (error)=>{
    //     if(error) return next(error);
    //     console.log(user);
    
    // })
   
    // res.json({ message: user.api_key })
    //     }
    //     catch(e){
    //         res.json({ message: e.message })
    //     } 
    // })(req, res, next);
    }