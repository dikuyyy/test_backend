const {DataTypes} = require("sequelize");
const sequelize = require("../src/utils/db.js");


const borrow = sequelize.define(
    'borrowings',
    {
        book_id: DataTypes.INTEGER,
        member_id: DataTypes.INTEGER,
        borrow_date: DataTypes.DATE,
        due_date: DataTypes.DATE,
        return_date: DataTypes.DATE,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    }
)

module.exports = borrow