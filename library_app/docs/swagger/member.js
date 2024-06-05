/**
 * @swagger
 * /api/member:
 *   get:
 *     tags:
 *       - Member
 *     summary: Retrieve all members with their borrowed books
 *     description: Fetches a list of all members along with details of the books they have borrowed.
 *     responses:
 *       201:
 *         description: A list of members with their borrowed books.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: ok
 *                 message:
 *                   type: string
 *                   example: "fetching member successfully"
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                       name:
 *                         type: string
 *                       email:
 *                         type: string
 *                       total_borrowed:
 *                         type: integer
 *                         description: "Total number of books borrowed by the member"
 *                       book_borrowed:
 *                         type: array
 *                         items:
 *                           type: object
 *                           properties:
 *                             id:
 *                               type: integer
 *                             book_id:
 *                               type: integer
 *                             borrow_date:
 *                               type: string
 *                               format: date
 *                             due_date:
 *                               type: string
 *                               format: date
 *                             return_date:
 *                               type: string
 *                               format: date
 *                               nullable: true
 *                             status:
 *                               type: string
 *                               description: "Status of the borrowed book"
 *       500:
 *         description: Error fetching member from database.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Error fetching member from db"
 */
