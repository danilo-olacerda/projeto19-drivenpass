import { Router } from 'express';
import authRouter from './authRouter';
import credentialsRouter from './credentialsRouter';
import notesRouter from './notesRouter';
import cardsRouter from './cardsRouter';

const router = Router();

router.use(authRouter);
router.use(credentialsRouter);
router.use(notesRouter);
router.use(cardsRouter);

export default router;