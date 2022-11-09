const jwt = require("jsonwebtoken");
const path = require("path");
const fs = require("fs");
const {
	AuthConfig: { jwtExpire }
} = require(`../config/${process.env.NODE_ENV}.js`);

//Read Private key in root
const privateKey = fs.readFileSync(path.resolve("./", "jwt.key"));

// Generate JWT token for authentication
exports.generateToken = useInfo =>
	jwt.sign(useInfo, privateKey, {
		algorithm: "RS256",
		expiresIn: jwtExpire
	});

// Ensure authenticity of authorization token
exports.verifyToken = token =>
	jwt.verify(token, privateKey, { algorithms: ["RS256"] });
