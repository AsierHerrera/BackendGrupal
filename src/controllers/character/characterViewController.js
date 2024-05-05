import characterController from "./characterController.js";

async function getAll (req, res){
    const {error,data} = await characterController.getAll();
    res.render("character/list", {error,data});
}

async function getById(req,res){
    const id = parseInt(req.params.id);
    const{error,data} = await characterController.getById(id);
    res.render("character/show", {error,data});
}

async function createForm (req,res){
    res.render("character/new");
}

async function create(req, res){
    //conts (Name, Race, Hostile, Race_id) = req.body
    const {Name, Race, Hostile, Race_id} = req.query;
    const{error,data} = await characterController.create({Name, Race, Hostile, Race_id});
    res.redirect("/character");
}

async function updateForm (req,res){
    const id= req.params.id;
    const character = await characterController.getById(id);
    res.render("character/update",{character});
}

async function update(req, res){
    const id = parseInt(req.params.id);
    const {Name, Race, Hostile, Race_id} = req.query;
    const{error,data} = await characterController.update(id,{Name, Race, Hostile, Race_id});
    res.redirect("/character");
}

async function remove(req, res){
    const id = parseInt(req.params.id);
    const{error,data} = await characterController.remove(id);
    res.redirect("/character");

}

export {
    getAll,
    getById,
    createForm,
    create,
    updateForm,
    update,
    remove
};

export default{
    getAll,
    getById,
    createForm,
    create,
    updateForm,
    update,
    remove
}