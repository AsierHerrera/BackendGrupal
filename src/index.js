import express from "express";
import dotenv from "dotenv";

import router from "./routers/router.js";

dotenv.config();

const app= express();
app.use(express.static("public")); // nos permite mostrar archivos en la carpeta public

app.set ("views", "./src/views");
app.set ("view engine", "pug");

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/",router);

app.listen(3000,()=>{
    console.log("servidor en marcha"+process.env.APP_PORT);
})