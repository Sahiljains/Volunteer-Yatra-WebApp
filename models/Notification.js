const { Model, DataTypes, NOW } = require("sequelize");
const db = require("../config/db");
const { v4 } = require("uuid");
const User = require("./User");


class Notification extends Model {}

Notification.init(
	{
		notificationId: {
			type: DataTypes.STRING(50),
			primaryKey: true,
		},
		userId: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
        name:{
            type: DataTypes.STRING(255),
			allowNull: false,
        },
        type: {
			type: DataTypes.STRING(50),
			allowNull: false,
		},
		role: {
			type: DataTypes.STRING(50),
			allowNull: false,
			validate: {
				isAlpha: {
					msg: "Please provide a single word role",
				},
				isIn: {
					args: [["Admin", "Yatri", "Host"]],
					msg: "Please provide valid role such as Yatri or Host",
				},
			},
		},
	},
	{
		sequelize: db,
		modelName: "notification",
		freezeTableName: true,
		timestamps: true,
		hooks: {
			beforeCreate: async (notification) => {
				notification.notificationId = v4();
			},
			beforeBulkCreate: async (notifications) => {
				notifications.forEach((notification) => {
					if (!notification.notificationId) notification.notificationId = v4();
				});
			},
		},
	}
);

Notification.sync();

module.exports = Notification;
