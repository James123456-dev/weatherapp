const {
	DBConfig: { host, port, username, password, database }
} = require(`../config/${process.env.NODE_ENV}.js`);

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
	`postgres://${username}:${password}@${host}:${port}}/${database}`,
	{ logging: false }
);

const connectDB = () => {
	sequelize
		.authenticate()
		.then(conn => console.log("DB connection successful"))
		.catch(err => console.log("Error connecting to DB", err));
};

module.exports = { sequelize, connectDB };
