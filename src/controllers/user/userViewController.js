import userController from "./userController.js";

async function getAll(req,res){
    const {error,data} = await userController.getAll();
    res.render("user/userlist",{error,data});
}

async function getById(req,res){
    const id = parseInt(req.params.id);
    console.log("id",id);
    const{error,data} = await userController.getById(id)
    res.render("user/show",{error,user:data});
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
    const {error,data:user}= await userController.getById(id);
    res.render("user/update",{error,user});
} 

async function update(req,res){
    const id = parseInt(req.params.id);
    const {Name,Password} = req.body;
    //const realIsAlive = is_alive === "on" ? 1 : 0;
    const {error,data} = await userController.update(id,{Name,Password});
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