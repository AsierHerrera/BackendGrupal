import { Router } from "express";

import userViewController from "../../controllers/user/userViewController.js";
import { hasSession } from "../../middleware/authMiddelWare.js";
//añadir hasSEsion en update, updatefrom y remove

const router = Router();

router.get("/",userViewController.getAll);
router.get("/singup",userViewController.registerForm);
router.post("/singup",userViewController.register);
router.get("/login",userViewController.loginForm);
router.post("/login",userViewController.login);
router.post("/logout",userViewController.logout);
router.get("/:id",userViewController.getById);
router.post("/:id/update",userViewController.update);
router.get("/:id/update",userViewController.updateForm);
router.post("/:id/remove",userViewController.remove);


export default router;

