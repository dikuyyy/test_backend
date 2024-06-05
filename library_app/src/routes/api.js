const express = require('express');
const router = express.Router();
const {check} = require('express-validator');
const bookController = require('../controllers/BookController');
const borrowController = require('../controllers/BorrowController');
const memberController = require('../controllers/MemberController');
const {bookValidator} = require('../../src/validator/BookValidator')
const {postBorrowValidator} = require("../validator/BorrowValidator");

router.get('/book', (req, res) => {
    bookController.get(req, res)
});

router.post('/book/create', bookValidator, (req, res) => {
    bookController.post(req, res)
});
router.get('/book/borrow/', (req, res) => {
    borrowController.get(req, res)
});
router.post('/book/borrow/create', postBorrowValidator, (req, res) => {
    borrowController.post(req, res);
})
router.post('/book/return-book', (req, res) => {
    borrowController.returnBook(req, res)
});
router.get('/member', (req, res) => {
    memberController.get(req, res);
})

module.exports = router;