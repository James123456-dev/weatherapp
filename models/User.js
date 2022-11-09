const { DataTypes } = require("sequelize");
const { sequelize } = require("../setup/db");

const User = sequelize.define(
	"User",
	{
		User_Id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			autoIncrement: true,
			primaryKey: true
		},
		First_Name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Last_Name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Email: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Password: {
			type: DataTypes.STRING,
			allowNull: false
		}
	},
	{
		timestamps: true
	}
);
User.sync({ alter: true });

module.exports = User;
