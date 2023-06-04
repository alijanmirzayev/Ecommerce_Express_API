import { Router } from 'express';
import { User } from '../controllers/user.js';

const r = Router();

// GET
r.get('/:id', User.getById)

// POST
r.post('/', User.add)

export default r