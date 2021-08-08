const { Model, DataTypes } = require("sequelize");
const { v4 } = require("uuid");
const brcrpt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const db = require("../config/db");
const Address = require("./Address");

class User extends Model {}

User.init(
	{
		userId: {
			type: DataTypes.STRING(50),
			primaryKey: true,
		},
		mobileNo: {
			type: DataTypes.STRING(13),
			allowNull: true,
			unique: true,
			validate: {
				is: {
					args: /^([0]|\+91)[6-9]\d{9}$/,
					msg: "Please provide a valid mobile number",
				},
			},
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			validate: {
				is: {
					args: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
					msg: "Please provide a valid email",
				},
			},
		},
		firstName: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		lastName: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		password: {
			type: DataTypes.STRING,
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
		bio: {
			type: DataTypes.STRING
		},
		age: {
			type: DataTypes.INTEGER
		},
		username: {
			type: DataTypes.STRING(10),
			// defaultValue: 'test123',
			unique: true,
			// validate: {
			//   is: {
			//     args: /^[a-zA-Z0-9._]*$/,
			//     msg: 'Invalid username! Try again',
			//   },
			// },
		},
		gender: {
			type: DataTypes.STRING(15),
			validate: {
				isIn: {
					args: [["Male", "Female", "Others"]],
					msg: "Please provide a correct gender",
				},
			},
		},
		dob: DataTypes.DATEONLY,
		aadhar: {
			type: DataTypes.STRING(20),
			validate: {
				is: {
					args: /^\d{12}$/,
					msg: "Please provide a valid aadhar card number",
				},
			},
		},
		aadharPic: DataTypes.STRING,
		profilePic: DataTypes.STRING,
		google_id: {
			type: DataTypes.STRING,
		},
		google_access_token: DataTypes.STRING,
		fb_id: {
			type: DataTypes.STRING,
		},
		fb_access_token: DataTypes.STRING,
	},
	{
		sequelize: db,
		modelName: "user",
		freezeTableName: true,
		paranoid: true,
		timestamps: true,
		hooks: {
			beforeCreate: async (user) => {
				user.userId = v4();
			},
			beforeBulkCreate: async (users) => {
				users.forEach((user) => {
					if (!user.userId) user.userId = v4();
				});
			},
		},
		defaultScope: {
			attributes: { exclude: ["password"] },
		},
		scopes: {
			withPwd: {
				attributes: { include: ["password"] },
			},
		},
	}
);

// Hash and store password
User.beforeSave(async function (user) {
	try {
		// console.log('User from models: ',user)
		const salt = await brcrpt.genSalt(10);
		// console.log('Password is ', user.password)
		user.password = await brcrpt.hash(user.password, salt);
	} catch (error) {
		console.log(error.message)
	}
});

User.beforeUpdate(async (user) => {
	try {
		// console.log('User from models: ',user)
		const salt = await brcrpt.genSalt(10);
		// console.log('Password is ', user.password);
		user.password = await brcrpt.hash(user.previous.password , salt);
	} catch (error) {
		console.log(error.message)
	}
});

User.beforeBulkUpdate(async(user) => {
		try {
			// console.log('User from models: ',user)
			const salt = await brcrpt.genSalt(10);
			// console.log('Password is ', user);
			user.attributes.password = await brcrpt.hash(user.attributes.password , salt);
		} catch (error) {
			console.log(error.message)
		}
})

// Compare Password Instance method
User.prototype.comparePassword = async function (enteredPassword) {
	return await brcrpt.compare(enteredPassword, this.password);
};
// var s = new Date();
// // console.log(s)
// s.setMinutes(s.getMinutes() + 60);
// Get User signed token for response
User.prototype.getJWTSignedToken = function () {
	return jwt.sign(
		{
			userId: this.userId,
			role: this.role,
		},
		process.env.JWT_SECRET,
		{
			expiresIn: "24h",
			// expiresIn: process.env.JWT_EXPIRES_IN,
			// expiresIn: Math.floor(Date.now()),
			// expiresIn: s.getMilliseconds(),
		}
	);
};

User.belongsTo(Address, { foreignKey: "addressId" });
Address.hasMany(User, { foreignKey: "addressId" });

User.sync()

module.exports = User;
