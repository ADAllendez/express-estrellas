import { Router } from "express";
import { getEstrellaController } from "../controller/getEstrella.controller";
import { getEstrellaId } from "../controller/getEstrellaId.controller";
import { createEstrella } from "../controller/createEstrella.controller";
import { logger } from "../middleware/logger.middleware";

export const router = Router();

router.get('/', logger,getEstrellaController);

router.get('/:id', getEstrellaId);

router.post('/', createEstrella);

export default router;