const { DataTypes } = require("sequelize");
const sequelize = require("../src/utils/db.js");


const Books = sequelize.define(
    'members',
    {
        code: DataTypes.STRING,
        name: DataTypes.STRING,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    }
)

module.exports = Books