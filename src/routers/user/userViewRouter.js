import { Router } from "express";

import userViewControllerDanel from "../../controllers/userDanel/userViewControllerDanel.js";

const router = Router();


router.get("/singup",userViewControllerDanel.registerForm);
router.post("/singup",userViewControllerDanel.register);
router.get("/login",userViewControllerDanel.loginForm);
router.post("/login",userViewControllerDanel.login);
router.get("/character",userViewControllerDanel.getAll);
router.post("/logout",userViewControllerDanel.logout);



export default router;

