import { Router } from 'express';
import validateSchemaMiddleware from '../middlewares/validateSchemaMiddleware';
import * as documentsController from '../controllers/documentsController';
import { newDocumentSchema } from '../schemas/newDocumentSchema';
import validateToken from '../middlewares/validateToken';

const router = Router();

router.post("/documents", validateToken, validateSchemaMiddleware(newDocumentSchema), documentsController.newDocument);
router.get("/documents", validateToken, documentsController.getAllDocuments);
router.get("/documents/:id", validateToken, documentsController.getDocumentById);
router.delete("/documents/:id", validateToken, documentsController.deleteDocumentById);

export default router;