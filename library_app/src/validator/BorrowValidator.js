const {body} = require("express-validator");

const postBorrowValidator = [
    body('book_code').notEmpty().withMessage('Code is required'),
    body('member_id').notEmpty().withMessage('Author is required'),
    body('borrow_date').notEmpty().withMessage('Title is required'),
    body('due_date').notEmpty().withMessage('Stock is required')
]

module.exports = {
    postBorrowValidator
}