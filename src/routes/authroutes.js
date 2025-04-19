import { Router } from 'express';

import { validate, registerSchema, loginSchema } from '../middleware/validate.js';
import { protect } from '../middleware/auth.js';
import { getMe, login, register } from '../controllers/authcontroller.js';
import UserUpdate from '../controllers/usercontroller.js';
import UserDelete from '../controllers/usercontroller.js';

const router = Router();

router.post('/register', validate(registerSchema), register);
router.post('/login', validate(loginSchema), login);
router.put('/:id',UserUpdate);
router.get('/me', protect, getMe);


export default router;

