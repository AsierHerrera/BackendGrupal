import { Router } from "express";

import userRouter from "../routers/userRouter.js";

const router = Router();


router.use("/user",userRouter);

export default router;