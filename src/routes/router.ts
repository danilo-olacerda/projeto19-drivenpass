import { Router } from 'express';
import authRouter from './authRouter';
import credentialsRouter from './credentialsRouter';
import notesRouter from './notesRouter';
import cardsRouter from './cardsRouter';
import networksRouter from './networksRouter';

const router = Router();

router.use(authRouter);
router.use(credentialsRouter);
router.use(notesRouter);
router.use(cardsRouter);
router.use(networksRouter);

export default router;