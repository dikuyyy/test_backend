const {DataTypes} = require("sequelize");
const sequelize = require("../src/utils/db.js");


const penalties = sequelize.define(
    'penalties',
    {
        member_id: DataTypes.INTEGER,
        start_date: DataTypes.DATE,
        end_date: DataTypes.DATE,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    }
)

module.exports = penalties