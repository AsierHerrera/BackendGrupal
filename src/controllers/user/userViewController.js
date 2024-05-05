import userController from "./userController.js";

async function getAll(req,res){
    const {error,data} = await userController.getAll();
    res.render("user/userlist",{error,data});
}

async function getById(req,res){
    const id = parseInt(req.params.id);
    console.log("id",id);
    const{error,data} = await userController.getById(id)
    res.render("user/usershow",{error,usuario:data});
}

async function createForm(req,res){
    res.render("user/new"); //Aqui en vez de new deberia ser el login
}

async function create(req,res){
    const {Name,Is_admin,Email,Password} = req.body;
    //const {Name,Is_admin,Email,Password} = req.query;
    const {error,data} = await userController.create({Name,Is_admin,Email,Password});
    //res.json({error,data});
    res.redirect("/user");
}
async function updateForm(req,res){
    const id = parseInt(req.params.id);
    const {error,data:usuario}= await userController.getById(id);
    res.render("user/userupdate",{error,usuario});
}

async function update(req,res){
    const id = parseInt(req.params.id);
    const {Name,Is_admin,Email,Password} = req.body;
    const realIsAdmin = Is_admin === "on" ? 1 : 0;
    const {error,data} = await userController.update(id,{Name,Is_admin:realIsAdmin,Email,Password});
    res.redirect("/user");
}

async function remove(req,res){
    const id = parseInt(req.params.id);
    const {error,data} = await userController.remove(id);
    res.redirect("/user");
}



export {
    getAll,
    getById,
    create,
    createForm,
    update,
    updateForm,
    remove
}

export default {
    getAll,
    getById,
    create,
    createForm,
    update,
    updateForm,
    remove
}