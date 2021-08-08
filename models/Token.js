const { Model, DataTypes } = require("sequelize");
const db = require("../config/db");
const { v4 } = require("uuid");
const User = require("./User");

class Token extends Model {}

Token.init(
	// {
	// 	usreId: {
	// 		type: DataTypes.STRING(50),
	// 		primaryKey: true,
	// 	},
	// 	category: DataTypes.STRING(100),
	// },

	{
		tokenId: {
			type: DataTypes.STRING(50),
			primaryKey: true,
		},
		token: DataTypes.STRING(500),
		expireAt: DataTypes.INTEGER,
	},
	{
		sequelize: db,
		modelName: "token",
		freezeTableName: true,
		timestamps: false,
		hooks: {
			beforeCreate: async (token) => {
				token.tokenId = v4();
			},
			beforeBulkCreate: async (tokens) => {
				tokens.forEach((token) => {
					if (!token.tokenId) token.tokenId = v4();
				});
			},
		},
	}
);


Token.belongsTo(User, { foreignKey: "userId" });
// User.hasOne(Token);

Token.sync()

module.exports = Token;
