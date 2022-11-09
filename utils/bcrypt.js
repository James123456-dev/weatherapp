const bcrypt = require("bcryptjs");
const saltRounds = 10;

// Encrypt Passwords
exports.encryptPassword = async password => {
	// Generate random string(salt)
	const salt = await bcrypt.genSalt(saltRounds);

	// Encrypt user password with salt
	return await bcrypt.hash(password, salt);
};

// Validate / campare entered password with encrypted on in db
exports.comparePassword = async (password, hash) =>
	await bcrypt.compare(password, hash);
