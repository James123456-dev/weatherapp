module.exports = {
	AuthConfig: {
		jwtExpire: process.env.JWT_EXPIRE,
		jwtCookie: {
			expires: new Date(
				Date.now() + +process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60
			),
			secure: false,
			httpOnly: true
		}
	},
	weatherConfig: {
		apiKey: process.env.WEATHER_API_KEY
	},
	DBConfig: {
		host: process.env.DB_HOST,
		port: process.env.DB_PORT,
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_DATABASE
	}
};
