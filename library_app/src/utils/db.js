require('dotenv/config');
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: process.env.DB_CONNECTION,
        logging: process.env.NODE_ENV === 'dev' ? (...msg) => console.log(...msg) : false
    }
)

module.exports = sequelize