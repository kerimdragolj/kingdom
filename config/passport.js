const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/user');
const database = require('../config/database');

module.exports = (passport) => {
    let opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
    opts.secretOrKey = database.secret;
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
        User.getUserById(jwt_payload._doc._id, (err, user) => {
            console.log(jwt_payload._doc._id);
            if(err) {
                return done(err, false);
            }

            if(user) {
                return done(null, user);
            } else {
                return done(null,false);
            }
        });
    }));
};
