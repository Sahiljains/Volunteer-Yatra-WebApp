const { Model, DataTypes } = require('sequelize')

const db = require('../config/db')
const User = require('./User')

class Verification extends Model {}

Verification.init(
  {
    isVerified: {
      type: DataTypes.TINYINT(1),
      defaultValue: 0,
    },
    isEmail: {
      type: DataTypes.TINYINT(1),
      defaultValue: 0,
    },
    isAadhar: {
      type: DataTypes.TINYINT(1),
      defaultValue: 0,
    },
    isGoogleAuth: {
      type: DataTypes.TINYINT(1),
      defaultValue: 0,
    },
    isFacebookAuth: {
      type: DataTypes.TINYINT(1),
      defaultValue: 0,
    },
  },
  {
    sequelize: db,
    modelName: 'verification',
    freezeTableName: true,
    timestamps: false,
  }
)

Verification.removeAttribute('id')

Verification.belongsTo(User, { foreignKey: 'userId', onDelete: 'CASCADE' })
User.hasOne(Verification, { foreignKey: 'userId' })

Verification.sync()

module.exports = Verification
