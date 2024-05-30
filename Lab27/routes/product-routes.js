const express = require('express');
const router = express.Router();
const productController = require('../controllers/product-controller');

router.get('/find/:id', productController.getProduct);
router.get('/list', productController.listProducts);
router.post('/create', productController.createProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;