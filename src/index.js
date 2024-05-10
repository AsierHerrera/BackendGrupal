import express from "express";
import dotenv from "dotenv";
import router from "./routers/router.js";
import session from "express-session";

dotenv.config();

const sessionData = {
    secret: process.env.SESSION_SECRET,
    resave:true,
    saveUninitialized:true,
}

const app= express();
app.use(session(sessionData));
app.use(express.static("public")); // nos permite mostrar archivos en la carpeta public


app.set ("views", "./src/views");
app.set ("view engine", "pug");

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/",router);


app.listen(3000,()=>{
    console.log("el servidor en marcha"+process.env.APP_PORT);

})