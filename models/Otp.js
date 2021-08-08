const { Model, DataTypes, NOW } = require("sequelize");
const db = require("../config/db");
const { v4 } = require("uuid");
const User = require("./User");

class Otp extends Model {}

Otp.init(
	{
		otpId: {
			type: DataTypes.STRING(50),
			primaryKey: true,
		},
		otp: DataTypes.INTEGER,
		expiresIn: DataTypes.INTEGER,
		time: DataTypes.STRING(25)
	},
	{
		sequelize: db,
		modelName: "otp",
		freezeTableName: true,
		timestamps: false,
		hooks: {
			beforeCreate: async (otp) => {
				otp.otpId = v4();
			},
			beforeBulkCreate: async (otps) => {
				otps.forEach((otp) => {
					if (!otp.OtpId) otp.otpId = v4();
				});
			},
		},
	}
);


Otp.belongsTo(User, { foreignKey: "userId" });

Otp.sync()

module.exports = Otp;
