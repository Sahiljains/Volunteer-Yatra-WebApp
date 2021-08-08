const { Model, DataTypes, NOW } = require("sequelize");
const db = require("../config/db");
const { v4 } = require("uuid");
const User = require("./User");
const Blog = require("./Blog");

class Comment extends Model {}

Comment.init(
	{
		commentId: {
			type: DataTypes.STRING(50),
			primaryKey: true,
		},
		commentDescription: DataTypes.TEXT,
	},
	{
		sequelize: db,
		modelName: "comment",
		freezeTableName: true,
		timestamps: true,
		hooks: {
			beforeCreate: async (comment) => {
				comment.commentId = v4();
			},
			beforeBulkCreate: async (comments) => {
				comments.forEach((comment) => {
					if (!comment.commentId) comment.commentId = v4();
				});
			},
		},
	}
);


Comment.belongsTo(User, { foreignKey: "userId" , onDelete: 'CASCADE'});
User.hasMany(Comment, {foreignKey: 'userId'});

Comment.belongsTo(Blog, { foreignKey: "blogId", onDelete: 'CASCADE' });
Blog.hasMany(Comment, {foreignKey: 'blogId'});

Comment.sync()

module.exports = Comment;
