import { Router } from "express";

import userRouter from "../routers/userRouter.js";
import characterRouter from "./characterRouter.js";


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

router.use ("/user", userRouter);
router.use ("/character", characterRouter);

export default router;