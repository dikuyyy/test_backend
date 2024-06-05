const {body} = require("express-validator");

const bookValidator = [
    body('code').notEmpty().withMessage('Code is required'),
    body('author').notEmpty().withMessage('Author is required'),
    body('title').notEmpty().withMessage('Title is required'),
    body('stock').notEmpty().withMessage('Stock is required')
]

module.exports = {
    bookValidator
}