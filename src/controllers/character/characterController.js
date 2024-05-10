/* const character = [
    {
        "Character_id": 1,
        "Name": "Aragorn",
        "Life_points": 100,
        "Hostile": false,
        "Race_id": 1 // los elfos id nº1 por ejemplo
    },

    {
        "Character_id": 2,
        "Name": "Legolas",
        "Life_points": 100,
        "Hostile": false,
        "Race_id": 2 // los elfos id nº2 por ejemplo
    }
] */

import characterModel from "../../models/characterModel.js";
import raceModel from "../../models/raceModel.js";
import mapModel from "../../models/mapModel.js";
import weaponModel from "../../models/weaponModel.js";

async function getAll() {
    try {
        const personajes = await characterModel.findAll({include:["arma","mapa","raza"]});
        return { data: personajes };
    }
    catch (error) {
        console.error(error);
        return { error: error };
    }
}

async function getRaceIdByCharacterId(Character_id) {
    const name = await characterModel.findOne({ where: { Character_id: Character_id } }); 
    const race = getRaceNameByRaceId(name.Race_id)
    return race
}

async function getRaceNameByRaceId(Race_id) {
    try {
        const race = await raceModel.findOne({ where: { Race_id: Race_id } });      
        if (race) {
            return race.Name;
        } 
    } catch (error) {
        console.error("Error al obtener el nombre de la raza:", error);
        return null; // Manejar el error devolviendo un valor predeterminado
    }
}

async function getweaponIdByCharacterId(Character_id) {
    const name = await characterModel.findOne({ where: { Character_id: Character_id } }); 
    const weapon = getWeaponNameByWeaponId(name.Weapon_id)
    return weapon
}

async function getWeaponNameByWeaponId(Weapon_id) {
    try {
        const weapon = await weaponModel.findOne({ where: { Weapon_id: Weapon_id } });      
        if (weapon) {
            return weapon.Name;
        } 
    } catch (error) {
        console.error("Error al obtener el nombre de la raza:", error);
        return null; // Manejar el error devolviendo un valor predeterminado
    }
}

async function getMapIdByCharacterId(Character_id) {
    const name = await characterModel.findOne({ where: { Character_id: Character_id } }); 
    const race = getMapNameByMapId(name.Map_id)
    return race
}

async function getMapNameByMapId(Map_id) {
    try {
        const map = await mapModel.findOne({ where: { Map_id: Map_id } });      
        if (map) {
            return map.Name;
        } 
    } catch (error) {
        console.error("Error al obtener el nombre de la raza:", error);
        return null; // Manejar el error devolviendo un valor predeterminado
    }
}

async function getWeaponByRace(Race_id) {
    const armas = await weaponModel.findAll({where:{Race_id:Race_id}});
    //const armasPorRaza = armas.filter(arma => arma.Race_id == Race_id)
    return armas
}

async function getMapByRace(Race_id) {
    const mapas = await mapModel.findAll({where:{Race_id:Race_id}});
    console.log(mapas)
    //const armasPorRaza = armas.filter(arma => arma.Race_id == Race_id)
    return mapas
}
async function getById(id) {
    try {
        const personaje = await characterModel.findByPk(id);
        console.log(personaje)
        if (!personaje) {
            return { error: "El artista no existe" };
        }
        return { data: personaje };
    }
    catch (error) {
        console.error(error);
        return { error };
    }

}


/* async function getAll(){
    return {data:character};
    //return "Mostramos todos los character";
}

async function getById(id){
    const character = character.find(character=>character.Character_id === id);
    if (!character){
        return {error: "El personaje no exite"};
    }
    return{data:character};

    //return `Mostramos el personaje con id ${id}`;
} */
async function create(userData) {
    try {
        userData.Life_points = 100;
        userData.Hostile = 0;
        const newCharacter = await characterModel.create(userData);
         console.log("newCharacter:", newCharacter)
        return { data: newCharacter, error: null }; 
    } catch (error) {
        console.error(error);
        return {error}
    }
}


async function update(id,userData){
    const {Name,Race, Character_id, Hostile, Race_id} = userData;
    const character= character.find(character=>character.Character_id === id);
    if (!character){
        return {error: "El personaje no se puede modificar, no existe"};
    }
    if(Name){
        character.Name = Name;
    }
    if(Character_id){
        character.Character_id = Character_id
    }
    if(Hostile != null & Hostile != undefined){
        character.Hostile = Hostile
    }
    if(Race_id){
        character.Race_id = map.Race_id
    }
    return{data:character};

    //return `Los nuevos datos para el personaje con id ${id} son: nombre:${Name}, raza: ${Race}, id del arma : ${Hostile}, mapa ${Race_id}`;
}

async function remove(id){
    const characterIndex = character.findIndex(character=>character.Character_id === id);
    if( characterIndex === -1){
        return {error: "No se puede borrar el personaje que no existe"}
    }
    const deleteChacter = character.splice(characterIndex,1);
    return {data:deleteChacter};
   // return `Borramos el personaje con id ${id}`;
}

export {
    getAll,
    getById,
    getWeaponByRace,
    getMapByRace,
    getRaceIdByCharacterId,
    getweaponIdByCharacterId,
    getMapIdByCharacterId,
    create,
    update,
    remove
};


export default {
    getAll,
    getWeaponByRace,
    getMapByRace,
    getRaceIdByCharacterId,
    getweaponIdByCharacterId,
    getMapIdByCharacterId,
    getById,
    create,
    update,
    remove
};