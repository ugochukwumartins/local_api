const passport = require("passport");
const keygen = require('../utils/utilsfile')
const usersModel = require("../model/userModel");




exports.signup = async (req, res, next) => {


    // try {
             
    //     //const user_type= req.body.user_type;
    //     const   email= req.body.email;
    //     const  password = req.body.password;
    //   const  user_name= req.body.user_name;
    //    const api_key =  keygen.tokenGen();
    //     const user = await usersModel.create({
    //       email,
    //       password,
    //       user_name,
    //       api_key,
    //     });
    //     return res.json({ status: true, message: "this is a blog",  user });
    //   } catch (error) {
    //     res.json({ status: false, message: error , error });
        
    //   }
passport.authenticate("signup", async (erro, user, info)=>{
    try{
console.log(user);
if(erro){
    res.send(erro.message);

    return next(erro);
}
if(!user){
    res.send(erro.message);

    return next(erro);
}
req.login(user, {session :false}, async (error)=>{
    if(error) return next(error);
    console.log(user);

})
res.send(user.api_key)
    }
    catch(e){
        res.send(e.message)
    } 
})(req, res, next);
}

exports.login = async (req, res, next) => {
    passport.authenticate('signup', async (erro, user, info)=>{
        try{
    console.log(user);
    if(erro){
        res.send(erro.message);
    
        return next(erro);
    }
    if(!user){
        res.send(erro.message);
    
        return next(erro);
    }
    req.login(user, {session :false}, async (error)=>{
        if(error) return next(error);
        console.log(user);
    
    })
    res.send(user.api_key)
        }
        catch(e){
            res.send(e.message)
        } 
    })(req, res, next);
    }