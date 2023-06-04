import { Router } from 'express';
import { Basket } from '../controllers/basket';

const r = Router();

// GET
r.get('/:id', Basket.getAllByUserId)

// POST
r.post('/', Basket.add)

export default r