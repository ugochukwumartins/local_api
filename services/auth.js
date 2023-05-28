const passport = require("passport");
const localStrtegy = require("passport-local").Strategy;
const usersModel = require("../model/userModel");
const HeaderAPIKeyStrategy = require('passport-headerapikey').HeaderAPIKeyStrategy
const keygen = require('../utils/utilsfile')



// passport.use(
 // const jwtStrategy = require("passport-jwt").Strategy;
//const extractJwt = require("passport-jwt").ExtractJwt;
//     new jwtStrategy(
//       {
//         secretOrKey: process.env.JWT_SECRETE,
//         jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(),
//       },
//       async (token, done) => {
//         try {
//           return done(null, token.user);
//         } catch (error) {
//           done(error);
//         }
//       }
//     )
//   );

 
    
  passport.use(
    new HeaderAPIKeyStrategy(
    { 
      header: 'Authorization',
     prefix: 'Api-Key ' 
    },
    false,
   async function(apikey, done) {
    try {
      // console.log(apikey)
      //hni2mrwvexq4grq40z8ki1isu7qm13
   const user=  await usersModel.findOne({api_key: apikey })
     return done(null, user);
    }catch (error) {
      done(error);
    }
    
    }
  ));

  passport.use(
    "signup",
    new localStrtegy(
        {
            usernameField: "email",
            passwordField: "password",
            passReqToCallback: true,
        },
        async (req, email, password, done) => {
            try {
             
              //const user_type= req.body.user_type;
            const  user_name= req.body.user_name;
             const api_key =  keygen.tokenGen();
              const user = await usersModel.create({
                email,
                password,
                user_name,
                api_key,
              });
              return done(null, user);
            } catch (error) {
              console.log(error)
              done(error);
            }
          }
        
    )
  )

  passport.use( 
    "login", 
    new localStrtegy(
         { usernameField: "username",
          passwordField: "password", 
        }, async (username, req, password,done) => { 
            try {
            
             const usermail= req.body.email;
                 const user =  usersModel.find({email: usermail });
                 
                 let api_keys = req.header("x-api-key");
                  console.log(user);
                   if (!user) { 
                    return done(null, false, { message: "user not found" });
                 }
                  const validated = await user.isValidPasswor(api_keys); 
                  if (!validated) {
                     return done(null, false, { message: "wrong api_key" });
                     }
                    return done(null, user, { message: "user login successfully" });
                }
                 catch (error) { 
                    done(error); 
                } 
            } 
            )
            );