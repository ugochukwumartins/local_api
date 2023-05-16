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
    function(apikey, done) {
      usersModel.findOne({ apikey: apikey }, function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        return done(null, user);
      });
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
        }, async (username, api_keys, done) => { 
            try {
              console.log(username);
              console.log(api_keys);
                 const user = await usersModel.find({email: username });
                  console.log(user);
                   if (!user) { 
                    return done(null, false, { message: "user not found" });
                 }
                  const validated = await user.isValidkey(api_keys); 
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