import characterController from "./characterController.js";
import raceModel from "../../models/raceModel.js";


async function getAll (req, res){
    const id = req.session.user.user_id
    //console.log("EL ID ES:", id)
    const {error,data} = await characterController.getAll(id);
    res.render("character/list", {error,data});
}

async function getAllEnemy(req, res) {
    const id = req.session.user.user_id
    const character = req.query.Character_id
    console.log("EL ALIADO ES:", character)
    const {error,data} = await characterController.getAllEnemy(id);
    res.render("character/enemyList", {error,data,character});
}

async function startGame(req, res) {
    /*
    const character = req.query.Character_id
    console.log("EL ALIADO ES:", character)
    const enemy = req.query.enemy_id
    console.log("EL ENEMIGO ES:", enemy)
    res.render("character/juego", {character,enemy});
    */

    const id = parseInt(req.query.Character_id);

    const {error,data} = await characterController.getById(id);
    console.log("Data: ", data); 
    res.render("character/juego", {error,data});

    /*

    ////
    const playerID = parseInt(req.params.Character_id);
    const enemyID = parseInt(req.params.enemy_id);

    const{error_player,data_player} = await characterController.getById(playerID);
    const{error_enemy,data_enemy} = await characterController.getById(enemyID);

    console.log(data_player);
    console.log(data_enemy);
    res.render("character/juego", {error_player,character:data_player,error_enemy,enemy:data_enemy});
    */
   
}

async function getById(req,res){
    const id = parseInt(req.params.id);
    const{error,data} = await characterController.getById(id);
    const racename = await characterController.getRaceIdByCharacterId(id)
    const weaponName = await characterController.getweaponIdByCharacterId(id)
    const mapName = await characterController.getMapIdByCharacterId(id)

    //console.log("El nombre asociado a la raza es:", racename)    
    res.render("character/show", {error,character:data,racename,weaponName,mapName});
}

async function createFormRace (req,res){
    const razas = await raceModel.findAll();
    //console.log("Las razas son:", razas)
    res.render("character/raza", {razas});
}

async function createFormWeapon (req,res){
    const race = req.query.Race_id
    const armas = await characterController.getWeaponByRace(race)
    //console.log("Las armas son:",armas)    
    res.render("character/armas",{race, armas});
}

async function createFormMaps (req,res){
    const race = req.query.Race_id
    const weapon = req.query.Weapon_id
    const mapas = await characterController.getMapByRace(race)
    res.render("character/mapa",{race,weapon, mapas});
}

async function create(req, res){
    const {Name, Life_points, Hostile, Race_id, Map_id, Weapon_id} = req.body;
    const User_id = req.session.user.user_id
    //console.log("EL USUARIO ES:",User_id)
    //const {Name, Life_points, Hostile, Race_id, Map_id, Weapon_id} = req.query;
    const{error,data} = await characterController.create({Name, Life_points, Hostile, Race_id, Map_id, Weapon_id, User_id});
    res.redirect("/character");
}

// async function updateForm (req,res){
//     const id= req.params.id;
//     const character = await characterController.getById(id);
//     res.render("character/update",{character});
// }

//  async function update(req, res){
//     const id = parseInt(req.params.id);
//     const {Name, Hostile, Race_id} = req.query;
//     const{error,data} = await characterController.update(id,{Name, Hostile, Race_id});
//     res.redirect("/character");
// }


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
    getAllEnemy,
    getById,
    createFormRace,
    createFormWeapon,
    createFormMaps,
    create,
    // updateForm,
    // update,
    remove,
    crearpage,
    startGame
};

export default{
    getAll,
    getAllEnemy,
    getById,
    createFormRace,
    createFormWeapon,
    createFormMaps,
    create,
    // updateForm,
    // update,
    remove,
    crearpage,
    startGame
}