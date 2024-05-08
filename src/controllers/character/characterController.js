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
/* import raceModel from "../../models/raceModel.js";
import mapModel from "../../models/mapModel.js";
import weaponModel from "../../models/weaponModel.js"; */
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

async function getById(id) {
    try {
        const artist = await artistModel.findByPk(id);
        if (!artist) {
            return { error: "El artista no existe" };
        }
        return { data: artist };
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
        const newCharacter = await characterModel.create(userData);
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
    create,
    update,
    remove
};


export default {
    getAll,
    getById,
    create,
    update,
    remove
};