const passport = require("passport");
const fs = require("fs");
const path = require("path");
const JwtStrategy = require("passport-jwt").Strategy,
	ExtractJwt = require("passport-jwt").ExtractJwt;

const opts = {};

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = fs.readFileSync(path.resolve("./", "jwt.key"));

passport.use(
	new JwtStrategy(opts, function (jwt_payload, done) {
		User.findOne({ id: jwt_payload.sub }, function (err, user) {
			if (err) {
				return done(err, false);
			}
			if (user) {
				return done(null, user);
			} else {
				return done(null, false);
				// or you could create a new account
			}
		});
	})
);

module.exports = passport;
