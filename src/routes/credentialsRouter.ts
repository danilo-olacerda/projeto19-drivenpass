import { Router } from 'express';
import validateSchemaMiddleware from '../middlewares/validateSchemaMiddleware';
import * as credentialsController from '../controllers/credentialsController';
import { newCredentialSchema } from '../schemas/newCredentialSchema';
import validateToken from '../middlewares/validateToken';

const router = Router();

router.post("/credentials", validateToken, validateSchemaMiddleware(newCredentialSchema), credentialsController.newCredential);
router.get("/credentials", validateToken, credentialsController.getAllCredentials);
router.get("/credentials/:id", validateToken, credentialsController.getCredentialById);
router.delete("/credentials/:id", validateToken, credentialsController.deleteCredentialById);

export default router;