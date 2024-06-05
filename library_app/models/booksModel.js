const { DataTypes } = require("sequelize");
const sequelize = require("../src/utils/db.js");


const Books = sequelize.define(
    'books',
    {
        code: DataTypes.STRING,
        author: DataTypes.STRING,
        title: DataTypes.INTEGER,
        stock: DataTypes.INTEGER
    }
)

module.exports = Books