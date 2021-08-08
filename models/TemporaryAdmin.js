const { Model, DataTypes, NOW } = require("sequelize");
const db = require("../config/db");
const { v4 } = require("uuid");
const User = require("./User");
// const Blog = require("./Blog");

class TemporaryAdmin extends Model {}

TemporaryAdmin.init(
	{
		tempId: {
			type: DataTypes.STRING(50),
			primaryKey: true,
		},
        name: {
            type: DataTypes.STRING(255),
        },
        phoneNo: {
            type: DataTypes.STRING(13),
        }
	},
	{
		sequelize: db,
		modelName: "temporaryAdmin",
		freezeTableName: true,
		timestamps: false,
		hooks: {
			beforeCreate: async (temporaryAdmin) => {
				temporaryAdmin.tempId = v4();
			},
			beforeBulkCreate: async (temporaryAdmins) => {
				temporaryAdmins.forEach((temporaryAdmin) => {
					if (!temporaryAdmin.tempId) temporaryAdmin.tempId = v4();
				});
			},
		},
	}
);


TemporaryAdmin.belongsTo(User, { foreignKey: "userId", onDelete: "CASCADE" })
// TemporaryAdmin.belongsTo(User, { foreignKey: "userId" , onDelete: 'CASCADE'});
User.hasOne(TemporaryAdmin, {foreignKey: 'userId'});

TemporaryAdmin.sync()

module.exports = TemporaryAdmin;
