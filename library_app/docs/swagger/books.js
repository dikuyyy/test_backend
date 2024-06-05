/**
 * @swagger
 * /api/book:
 *   get:
 *     tags: [Book]
 *     summary: Retrieve a list of books
 *     description: Fetches all books from the database.
 *     responses:
 *       200:
 *         description: A list of books.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: ok
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 1
 *                       title:
 *                         type: string
 *                         example: "Book Title"
 *                       author:
 *                         type: string
 *                         example: "Author Name"
 *                       publishedDate:
 *                         type: string
 *                         format: date
 *                         example: "2020-01-01"
 *       500:
 *         description: Error fetching books from the database.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Error fetching users from db
 */

/**
 * @swagger
 * /api/book/create:
 *   post:
 *     tags: [Book]
 *     summary: Create a new book
 *     description: Adds a new book to the database.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *                 example: "B001"
 *               author:
 *                 type: string
 *                 example: "Author Name"
 *               title:
 *                 type: string
 *                 example: "Book Title"
 *               stock:
 *                 type: integer
 *                 example: 10
 *     responses:
 *       201:
 *         description: Book created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: ok
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *                     code:
 *                       type: string
 *                       example: "B001"
 *                     author:
 *                       type: string
 *                       example: "Author Name"
 *                     title:
 *                       type: string
 *                       example: "Book Title"
 *                     stock:
 *                       type: integer
 *                       example: 10
 *       400:
 *         description: Validation error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       msg:
 *                         type: string
 *                         example: "Invalid value"
 *                       param:
 *                         type: string
 *                         example: "title"
 *                       location:
 *                         type: string
 *                         example: "body"
 *       500:
 *         description: Error creating book in the database
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Error create users from db"
 */

/**
 * @swagger
 * /api/book/borrow:
 *   post:
 *     tags:
 *       - Book
 *     summary: Borrow a book
 *     description: Allows a member to borrow a book if certain conditions are met, such as availability, member status, and penalty checks.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - book_code
 *               - member_id
 *               - borrow_date
 *               - due_date
 *             properties:
 *               book_code:
 *                 type: string
 *                 description: The unique code of the book to borrow.
 *                 example: "B1001"
 *               member_id:
 *                 type: integer
 *                 description: The ID of the member who is borrowing the book.
 *                 example: 1
 *               borrow_date:
 *                 type: string
 *                 format: date
 *                 description: The date when the book is borrowed.
 *                 example: "2024-06-01"
 *               due_date:
 *                 type: string
 *                 format: date
 *                 description: The expected return date of the book.
 *                 example: "2024-06-15"
 *     responses:
 *       200:
 *         description: Book borrowed successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Book borrowed successfully"
 *       400:
 *         description: Error due to user input or rule violation.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Member cannot borrow more than 2 books"
 *       500:
 *         description: Internal server error when trying to borrow a book.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Error creating book from db"
 */

/**
 * @swagger
 * /api/book/return-book:
 *   post:
 *     tags:
 *       - Book
 *     summary: Return a borrowed book
 *     description: Handles the return of a borrowed book and updates inventory and penalties if applicable.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - borrow_id
 *               - return_date
 *             properties:
 *               borrow_id:
 *                 type: integer
 *                 description: The ID of the borrowed book record.
 *                 example: 1
 *               return_date:
 *                 type: string
 *                 format: date
 *                 description: The date on which the book is returned.
 *                 example: "2024-06-20"
 *     responses:
 *       200:
 *         description: Book returned successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Buku dengan id: 1 telah berhasil di kembalikan"
 *       400:
 *         description: Validation error or book already returned.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Buku sebelumnya telah di kembalikan"
 *       404:
 *         description: No borrow record found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "No borrow record found with the given borrow_id"
 *       500:
 *         description: Internal server error when attempting to return the book.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Error returning book"
 */