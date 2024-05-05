import { Router } from "express";

//import userRouter from "./user/userRouter.js";
import userViewRouter from "./user/userViewRouter.js";
import characterRouter from "./characterRouter.js";
import weaponRouter from "./weaponRouter.js";
import raceRouter from "./raceRouter.js";
import mapRouter from "./mapRouter.js";
import loginViewRouter from "./login/loginViewRouter.js"
import singupViewRouter from "./sing_up/singupViewRouter.js"


const router = Router();

router.get ("/", (req,res)=>{
    res.render("layout");
})

router.get("/search",(req,res)=>{
    const {q,name} = req.query;
    res.send(`mostrando resultados busqueda'${q}'con el nombre ${name}`)
})

router.get("/form",(req,res)=>{
    const formString = `
    <form action="/search" method="get">
        <label for="q">pregunta</label>
        <input type="text" name="q" id="q">
        <button type="submit">enviar</button>
    </form> 
    `
    res.send(formString);   
})

router.use ("/user", userViewRouter);
router.use("/character", characterRouter);
router.use("/weapon", weaponRouter);
router.use("/race", raceRouter);
router.use("/map", mapRouter);
router.use("/login", loginViewRouter)
router.use("/singup", singupViewRouter)

export default router;