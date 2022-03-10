const jwtStrategy = require("passpot-jwt").Strategy;
const extractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const User = mongoose.model("users");
const keys = require("../config/keys")

const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey =  keys.secretOrKey

module.exports = passport => {
  passport.use(
    new jwtStrategy(options, (jwt_payload, done) => {
      User.find(jwt_payload.id).then(user => {
        if (user) {
          return done(null, user);
        }
        return done(null, false);
      }).catch(err => console.log(err))
    })
  )
}