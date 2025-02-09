import express from 'express';

import { createProduct, getAllProducts,getProduct,updateProduct,deleteProduct } from '../controllers/productController.js';

const router = express.Router();

//GET ALL PRODUCTS
router.get('/',getAllProducts);

router.get('/:id',getProduct)

//CREATE PRODUCTS
router.post('/',createProduct);

router.put('/:id',updateProduct);

router.delete('/:id',deleteProduct);

export default router;