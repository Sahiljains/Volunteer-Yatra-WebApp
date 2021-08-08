const { Model, DataTypes, NOW } = require("sequelize");
const db = require("../config/db");
const { v4 } = require("uuid");
const Places = require("./Places");

class PlaceImage extends Model {}

PlaceImage.init(
	{
		placeImageId: {
			type: DataTypes.STRING(50),
			primaryKey: true,
		},
		placeImagePic: DataTypes.STRING
	},
	{
		sequelize: db,
		modelName: "placeImage",
		freezeTableName: true,
		timestamps: false,
		hooks: {
			beforeCreate: async (placeImage) => {
				placeImage.placeImageId = v4();
			},
			beforeBulkCreate: async (placeImages) => {
				placeImages.forEach((placeImage) => {
					if (!placeImage.placeImageId) placeImage.placeImageId = v4();
				});
			},
		},
	}
);


PlaceImage.belongsTo(Places, { foreignKey: "placeId" , onDelete: 'CASCADE'});
// Places.hasMany(PlaceImage)

PlaceImage.sync()

module.exports = PlaceImage;
