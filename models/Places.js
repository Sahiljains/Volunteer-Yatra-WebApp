const { Model, DataTypes } = require("sequelize");
const db = require("../config/db");
const { v4 } = require("uuid");
const Host = require("./Host");
const Address = require("./Address");

class Places extends Model {}

Places.init(
	{
		placeId: {
			type: DataTypes.STRING(50),
			primaryKey: true,
		},
		placeName: {
			type: DataTypes.STRING(100),
			allowNull: false,
		},
		positionDescription: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		category: {
			type: DataTypes.STRING(100),
		},
		volunteerCount: {
			type: DataTypes.INTEGER(10),
		},
		duration: {
			type: DataTypes.STRING(255),
		},
		perks: {
			type: DataTypes.STRING(255),
			// allowNull: false,
		},
	},
	{
		sequelize: db,
		tableName: "places",
		freezeTableName: true,
		timestamps: true,
		hooks: {
			beforeCreate: async (place) => {
				place.placeId = v4();
			},
			beforeBulkCreate: async (places) => {
				places.forEach((place) => {
					if (!place.placeId) place.placeId = v4();
				});
			},
		},
	}
);

Places.belongsTo(Host, { foreignKey: "hostId" });

Places.belongsTo(Address, { foreignKey: "addressId" })

Places.sync()

module.exports = Places;
