const router = require("express").Router();
const {
	register,
	resetpassword,
	login,
	getCurrentUser
} = require("../controllers/auth");

router.post("/login", login);
router.post("/register", register);
router.post("/reset_password", resetpassword);

module.exports = router;
