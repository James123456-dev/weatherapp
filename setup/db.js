const {
	DBConfig: { host, port, username, password, database }
} = require("../config");

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
	`postgres://${username}:${password}@${host}:5432/${database}`,
	{ logging: false }
);

const connectDB = () => {
	sequelize
		.authenticate()
		.then(conn => console.log("DB connection successful"))
		.catch(err => console.log("Error connecting to DB", err));
};

module.exports = { sequelize, connectDB };
