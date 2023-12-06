import { Router } from "express";
import suggestion from "../controller/suggestion.controller.js";
import latlongController from "../controller/latlong.controller.js";

const router = Router();

// places suggestion
router.get('/suggestion', suggestion.get);

//places coordinates
router.get('/latlong', latlongController.get)

export default router;