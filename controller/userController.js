const passport = require("passport");


exports.signup = async (req, res, next) => {
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