import { Router } from 'express';
import authRouter from './authRouter';
import credentialsRouter from './credentialsRouter';
import notesRouter from './notesRouter';
import cardsRouter from './cardsRouter';
import networksRouter from './networksRouter';
import documentsRouter from './documentsRouter';

const router = Router();

router.use(authRouter);
router.use(credentialsRouter);
router.use(notesRouter);
router.use(cardsRouter);
router.use(networksRouter);
router.use(documentsRouter);

export default router;