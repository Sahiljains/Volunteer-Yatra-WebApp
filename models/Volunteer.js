const { Model, DataTypes } = require("sequelize");
const db = require("../config/db");
const { v4 } = require("uuid");
const User = require("./User");

class Volunteer extends Model {}

Volunteer.init(
	{
		volunteerId: {
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
        hooks: {
			beforeCreate: async (volunteer) => {
				volunteer.volunteerId = v4();
			},
			beforeBulkCreate: async (volunteers) => {
				volunteers.forEach((volunteer) => {
					if (!volunteer.volunteerId) volunteer.volunteerId = v4();
				});
			},
		},
	}
);

Volunteer.belongsTo(User, { foreignKey: "userId" });
User.hasOne(Volunteer, {foreignKey: 'userId'});

Volunteer.sync()

module.exports = Volunteer;
