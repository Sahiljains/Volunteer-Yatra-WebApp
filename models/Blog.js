const { Model, DataTypes, NOW } = require("sequelize");
const db = require("../config/db");
const { v4 } = require("uuid");
const User = require("./User");
const TemporaryAdmin = require("./TemporaryAdmin");
// const Blog = require("./Blog");

class Blog extends Model {}

Blog.init(
	{
		blogId: {
			type: DataTypes.STRING(50),
			primaryKey: true,
		},
        title: {
            type: DataTypes.STRING(255),
        },
        body: {
            type: DataTypes.TEXT,
        },
        image: {
            type: DataTypes.TEXT,
        },
        likes: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        views: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        slug: {
            type: DataTypes.STRING(255)
        }
	},
	{
		sequelize: db,
		modelName: "blog",
		freezeTableName: true,
		timestamps: true,
		hooks: {
			beforeCreate: async (blog) => {
				blog.blogId = v4();
			},
			beforeBulkCreate: async (blogs) => {
				blogs.forEach((blog) => {
					if (!blog.blogId) blog.blogId = v4();
				});
			},
		},
	}
);


Blog.belongsTo(TemporaryAdmin, { foreignKey: "tempId" , onDelete: 'CASCADE'});
TemporaryAdmin.hasMany(Blog, {foreignKey: 'tempId'});

Blog.sync()

module.exports = Blog;
