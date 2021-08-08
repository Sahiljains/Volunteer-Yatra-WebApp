const { Model, DataTypes } = require("sequelize");
const db = require("../config/db");
const { v4 } = require("uuid");
const User = require("./User");

class Host extends Model {}

Host.init(
	{
		hostId: {
			type: DataTypes.STRING(50),
			primaryKey: true,
		},
		category: DataTypes.STRING(100),
	},
	{
		sequelize: db,
		tableName: "host",
		freezeTableName: true,
		timestamps: false,
	}
);

Host.belongsTo(User, { foreignKey: "userId" });
// User.hasOne()

Host.sync()

module.exports = Host;
