import { Router } from 'express';
import { Product } from '../controllers/product.js';

const r = Router();

// GET
r.get('/:categoryId', Product.getProductByCategoryId);

// POST
r.post('/', Product.add);

// PUT
r.put('/:id', Product.editById);

// DELETE
r.delete('/:id', Product.deleteById);

export default r