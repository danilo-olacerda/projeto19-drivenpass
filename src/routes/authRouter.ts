import { Router } from 'express';
import validateSchemaMiddleware from '../middlewares/validateSchemaMiddleware';
import * as authController from '../controllers/authController';
import { newUserSchema } from '../schemas/newUserSchema';
import { loginSchema } from '../schemas/loginSchema';

const router = Router();

router.post('/register', validateSchemaMiddleware(newUserSchema), authController.register);
router.post('/login', validateSchemaMiddleware(loginSchema), authController.login);

export default router;