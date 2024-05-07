import characterController from "./characterController.js";

async function getAll (req, res){
    const {error,data} = await characterController.getAll();
    res.render("character/list", {error,data});
}

async function getById(req,res){
    const id = parseInt(req.params.id);
    const{error,data} = await characterController.getById(id);
    res.render("character/show", {error,character:data});
}

async function createFormRace (req,res){
    res.render("character/raza");
}

async function createFormWeapon (req,res){
    const race = req.query.race
    res.render("character/armas",{race});
}

async function createFormMaps (req,res){
    const race = req.query.race
    const weapon = req.query.weapon
    res.render("character/mapa",{race,weapon});
}


async function create(req, res){
    //conts (Name, Hostile, Race_id) = req.body
    const {Name, Hostile, Race_id} = req.query;
    const{error,data} = await characterController.create({Name, Hostile, Race_id});
    res.redirect("/character");
}

async function updateForm (req,res){
    const id= req.params.id;
    const character = await characterController.getById(id);
    res.render("character/update",{character});
}

async function update(req, res){
    const id = parseInt(req.params.id);
    const {Name, Hostile, Race_id} = req.query;
    const{error,data} = await characterController.update(id,{Name, Hostile, Race_id});
    res.redirect("/character");
}

async function remove(req, res){
    const id = parseInt(req.params.id);
    const{error,data} = await characterController.remove(id);
    res.redirect("/character");

}

async function crearpage(req,res){
    res.render("login/login");
}

export {
    getAll,
    getById,
    createFormRace,
    createFormWeapon,
    createFormMaps,
    create,
    updateForm,
    update,
    remove,
    crearpage
};

export default{
    getAll,
    getById,
    createFormRace,
    createFormWeapon,
    createFormMaps,
    create,
    updateForm,
    update,
    remove,
    crearpage
}