const book = require('../../models/booksModel');
const {validationResult} = require('express-validator');

module.exports = {
    get: async (req, res) => {
        try {
            const data = await book.findAll();
            const response = {
                status: 'ok',
                data
            }

            res.status(201).json(response)
        } catch (error) {
            console.error("Error fetching users:", error);
            res.status(500).json({message: "Error fetching users from db"});
        }
    },
    post: async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({message: errors.array()});
            }

            const { code, author, title, stock } = req.body;
            const newBook = await book.create({code, author, title, stock});
            const response = {
                status: 'ok',
                data: newBook
            }
            res.status(201).json(response);
        } catch (error) {
            console.error("Error create users:", error);
            res.status(500).json({message: "Error create users from db"});
        }
    }
}