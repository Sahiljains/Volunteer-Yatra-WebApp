const { Model, DataTypes } = require('sequelize')
const db = require('../config/db')
const { v4 } = require('uuid')

class Address extends Model {}

Address.init(
  {
    addressId: {
      type: DataTypes.STRING(50),
      primaryKey: true,
    },
    line1: DataTypes.STRING,
    line2: DataTypes.STRING,
    city: DataTypes.STRING,
    pincode: {
      type: DataTypes.STRING(7),
      validate: {
        is: {
          args: /^\d{6}$/,
          msg: 'Please provide a valid pincode',
        },
      },
    },
    state: DataTypes.STRING,
  },
  {
    sequelize: db,
    tableName: 'address',
    freezeTableName: true,
    timestamps: false,
    hooks: {
      beforeCreate: async address => {
        address.addressId = v4()
      },
      beforeBulkCreate: async addresses => {
        addresses.forEach(address => {
          if (!address.addressId) address.addressId = v4()
        })
      },
    },
  }
)

Address.sync()

module.exports = Address
