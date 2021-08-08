const { Sequelize } = require('sequelize')

const { DB_HOST, DB_NAME, DB_USERNAME, DB_PASSWORD, DB_PORT } = process.env

const db = new Sequelize({
  dialect: 'mysql',
  host: DB_HOST,
  database: DB_NAME,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  port: DB_PORT,
  define: {
    charset: 'utf8',
    dialectOptions: {
      collate: 'utf8_general_ci',
    },
    timestamps: true,
  },
  timezone: "+05:30",
})

db.authenticate()
  .then(() => {
    console.log('DB connected successfully.'.brightYellow.bold)
  })
  .catch(err => {
    console.error(`Unable to connect to the database:${err}`.red.bold)
  })

module.exports = db
