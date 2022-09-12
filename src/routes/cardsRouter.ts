import { Router } from 'express';
import validateSchemaMiddleware from '../middlewares/validateSchemaMiddleware';
import validateToken from '../middlewares/validateToken';
import { newCardSchema } from '../schemas/newCardSchema';
import * as cardsController from '../controllers/cardsController';

const router = Router();

router.post("/cards", validateToken, validateSchemaMiddleware(newCardSchema), cardsController.newCard);
router.get("/cards", validateToken, cardsController.getAllCards);
router.get("/cards/:id", validateToken, cardsController.getCardById);
router.delete("/cards/:id", validateToken, cardsController.deleteCardById);

export default router;