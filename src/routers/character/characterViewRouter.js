import { Router } from "express";

import characterViewController from "../../controllers/character/characterViewController.js";

const router = Router();


router.get("/",characterViewController.getAll);

router.get("/raza",characterViewController.createFormRace);
router.get("/armas",characterViewController.createFormWeapon);
router.get("/mapa",characterViewController.createFormMaps);

router.post("/",characterViewController.create);
router.get("/:id",characterViewController.getById);
router.get("/:id/update",characterViewController.updateForm);
router.post("/:id",characterViewController.update);
//router.delete("/:id",characterViewController.remove);
router.post("/:id/remove",characterViewController.remove);



export default router;

