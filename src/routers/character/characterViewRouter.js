import { Router } from "express";

import characterViewController from "../../controllers/character/characterViewController.js";
import { hasSession } from "../../middleware/authMiddelWare.js"

const router = Router();


router.get("/",hasSession,characterViewController.getAll);
router.get("/enemyList",characterViewController.getAllEnemy);

router.get("/raza",characterViewController.createFormRace);
router.get("/armas",characterViewController.createFormWeapon);
router.get("/mapa",characterViewController.createFormMaps);
router.post("/create",characterViewController.create);
router.get("/:id",characterViewController.getById);
// router.get("/:id/update",characterViewController.updateForm);
// router.post("/:id",characterViewController.update);
//router.delete("/:id",characterViewController.remove);
router.post("/:id/",characterViewController.remove);




export default router;

