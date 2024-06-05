const member = require('../../models/memberModel')
const borrow = require('../../models/borrowsModel');

module.exports = {
    get: async (req,res) => {
        try {
            const getMember = await member.findAll();
            const data = await Promise.all(getMember.map(async (item) => {
                const getBorrowed = await borrow.findAll({
                    where: {
                        member_id: item.id
                    }
                });

                return {
                    ...item.dataValues,
                    total_borrowed: getBorrowed.length,
                    book_borrowed: getBorrowed
                };
            }));

            const response = {
                status: 'ok',
                message: 'fetching member successfully',
                data
            }

            return res.status(201).json(response);

        } catch(error) {
            console.error("Error fetching member book:", error);
            res.status(500).json({message: "Error fetching member from db"});
        }
    }
}