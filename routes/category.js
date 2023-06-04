import { Router } from 'express';
import { Category } from '../controllers/category.js';

const r = Router();

r.post('/', Category.add)
r.get('/', Category.getAll)

export default r