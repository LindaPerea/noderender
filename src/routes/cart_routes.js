const {Router} = require('express');
const {addProductAtCart} = require('../controllers/cart.controllers');

const router = Router();

/**
 * @openapi
 * /api/v1/cart/{id}:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: add product at cart
 *     tags: [Cart]
 *     parameters:
 *       in: cart
 *       name: id
 *       required: true
 *       schema:
 *         type: integer
 *         minimun: 1
 *         description: user id
 *     requestBody:
 *       description: required fields to add product to cart
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schema/addProductToCart'
 *     responses:
 *       200:
 *         description: post
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: add product to cart
 *       400:
 *         description: validation error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: something wrong
 */


router.post('/:id', addProductAtCart);


module.exports = router;