import { Router } from "express";

import userViewController from "../../controllers/user/userViewController.js";

const router = Router();


router.get("/singup",userViewController.registerForm);
router.post("/singup",userViewController.register);
router.get("/login",userViewController.loginForm);
router.post("/login",userViewController.login);
router.get("/",userViewController.getAll);
router.post("/logout",userViewController.logout);
router.get("/:id/update",userViewController.updateForm);
router.post("/:id",userViewController.update);



export default router;

