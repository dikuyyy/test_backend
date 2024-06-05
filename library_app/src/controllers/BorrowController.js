const borrow = require('../../models/borrowsModel');
const book = require('../../models/booksModel');
const penalty = require('../../models/penaltiesModel')
const {validationResult} = require('express-validator');
const sequelize = require('../../src/utils/db.js')
module.exports = {
    post: async (req, res) => {
        const transaction = await sequelize.transaction();
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({message: errors.array()});
            }
            const {book_code, member_id, borrow_date, due_date} = req.body;
            const books = await book.findOne({
                where: {code: book_code}
            });

            const getAllBorrowedByMember = await borrow.findAll({
                where: {member_id}
            })

            const totalBorrowedBook = getAllBorrowedByMember.reduce((acc, item) => {
                if (item.return_date == null) {
                    return acc + 1;
                }
            }, 0)

            const penalties = await penalty.findOne({
                where: {member_id},
                order: [
                    ['createdAt', 'DESC']
                ]
            })

            if (totalBorrowedBook >= 2) {
                return res.status(400).json({message: 'Member tidak dapat meminjam lebih dari 2 buku'});
            }

            if (books.stock === 0) {
                return res.status(400).json({message: 'Persediaan kosong'})
            }

            if(penalties) {
                const end_date = penalties.end_date;
                const today = new Date();
                if(today <= end_date) {
                    return res.status(400).json({message: 'Anda tidak bisa meminjam buku karena sedang mendapatkan penalty sampai tanggal ' + end_date()});
                }
            }

            await borrow.create(
                {book_id: books.id, member_id: member_id, borrow_date: borrow_date, due_date: due_date}, {transaction})

            const [affectedRows] = await book.update(
                {stock: books.stock - 1},
                {
                    where: {id: books.id}
                }, {transaction}
            )

            if (affectedRows === 0) {
                return res.status(404).json({message: "No book record found with the given book_id"});
            }

            await (await transaction).commit();
            return res.status(200).json({message: "Book borrowed successfully"});
        } catch (error) {
            console.error("Error fetching borrowed book:", error);
            await transaction.rollback();
            res.status(500).json({message: "Error creating book from db"});
        }
    },
    get: async (req, res) => {
        try {
            const borrows = borrow.findAll()
            const response = {
                status: 'ok',
                data: borrows
            }

            res.status(201).json(response)
        } catch (error) {
            console.error("Error fetching borrowed book:", error);
            res.status(500).json({message: "Error fetching borrowed book from db"});
        }
    },
    returnBook: async (req, res) => {
        const transaction = await sequelize.transaction();
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({message: errors.array()});
            }

            const {borrow_id, return_date} = req.body;
            const borrowedRecord = await borrow.findOne(
                {where: {id: borrow_id}}
            );

            if (borrowedRecord.return_date !== null) {
                return res.status(400).json({message: "Buku sebelumnya telah di kembalikan"});
            }

            const [affectedRows] = await borrow.update(
                {return_date: return_date},
                {where: {id: borrow_id}}
                , {transaction}
            );

            let time_interval = new Date(return_date) - borrowedRecord.createdAt;
            const day = 24 * 60 * 60 * 1000;
            time_interval = time_interval / day;

            if(time_interval > 7) {
                const start_date = new Date(return_date);
                const end_date = new Date(start_date);
                end_date.setDate(start_date.getDate() + 3);
                await penalty.create({member_id: borrowedRecord.member_id, start_date, end_date }, {transaction})
            }

            if (affectedRows === 0) {
                return res.status(404).json({message: "No borrow record found with the given borrow_id"});
            }

            await (await transaction).commit();
            return res.status(200).json({message: "Buku dengan id: " + borrow_id + " telah berhasil di kembalikan"});
        } catch (error) {
            await transaction.rollback();
            console.error("Error returning book:", error);
            res.status(500).json({message: "Error returning book"});
        }
    }
}