import { Router } from 'express';
import * as notesController from '../controllers/notesController';
import validateSchemaMiddleware from '../middlewares/validateSchemaMiddleware';
import validateToken from '../middlewares/validateToken';
import { newNoteSchema } from '../schemas/newNoteSchema';

const router = Router();

router.post("/notes", validateToken, validateSchemaMiddleware(newNoteSchema), notesController.newNote);
router.get("/notes", validateToken, notesController.getAllNotes);
router.get("/notes/:id", validateToken, notesController.getNoteById);
router.delete("/notes/:id", validateToken, notesController.deleteNoteById);

export default router;