import { Router } from 'express';
import validateSchemaMiddleware from '../middlewares/validateSchemaMiddleware';
import validateToken from '../middlewares/validateToken';
import { newNetworkSchema } from '../schemas/newNetworkSchema';
import * as networksController from '../controllers/networksController';

const router = Router();

router.post("/networks", validateToken, validateSchemaMiddleware(newNetworkSchema), networksController.newNetwork);
router.get("/networks", validateToken, networksController.getAllNetworks);
router.get("/networks/:id", validateToken, networksController.getNetworkById);
router.delete("/networks/:id", validateToken, networksController.deleteNetworkById);

export default router;