const { Router } = require("express");
const { addProducts, getProducts } = require("../controllers/products.controllers");

const router = Router();


/**
 * @openapi
 * /api/v1/products:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: create a new product into the app
 *     tags: [Product]
 *     requestBody:
 *       description: required fields to add a new product
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schema/addProducts'
 *     responses:
 *       201:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: product add
 *       400:
 *         description: not created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: something wrong
 */


router.post('/', addProducts);
router.get('/', getProducts);

module.exports = router; 