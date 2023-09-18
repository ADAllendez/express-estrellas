import { Router } from "express";
import { getEstrellaController } from "../controller/getEstrella.controller";
import { getEstrellaId } from "../controller/getEstrellaId.controller";
import { createEstrella } from "../controller/createEstrella.controller";

export const router = Router();

router.get('/', getEstrellaController);

router.get('/:id', getEstrellaId);

router.post('/', createEstrella);

export default router;