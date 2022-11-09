const { DataTypes } = require("sequelize");
const { sequelize } = require("../setup/db");

const User = sequelize.define(
	"Location_History",
	{
		Location_Id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			autoIncrement: true,
			primaryKey: true
		},
		User_Id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Location: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Count: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0
		}
	},
	{
		timestamps: true
	}
);
User.sync({ alter: true });

module.exports = User;
