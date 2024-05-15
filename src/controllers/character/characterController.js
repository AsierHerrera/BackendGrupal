
import characterModel from "../../models/characterModel.js";
import raceModel from "../../models/raceModel.js";
import mapModel from "../../models/mapModel.js";
import weaponModel from "../../models/weaponModel.js";
import { Op } from "sequelize";


async function getAll(id) {
    try {
        const personajes = await characterModel.findAll({ 
            include:["arma","mapa","raza"], 
            where: { 
                [Op.or]: [
                    {User_id: id },
                    {
                        [Op.and]: [
                            { User_id: null },
                            { Hostile: 0 }
                        ]
                    }
                ]
            } 
        });        
        console.log(personajes)
        return { data: personajes };
    }
    catch (error) {
        console.error(error);
        return { error: error };
    }
}

async function getAllEnemy(id) {
    try {
        const enemies = await characterModel.findAll({ 
            include: ["arma", "mapa", "raza"],
            where: { Hostile: 1 } 
        }); 
               
        //console.log(enemies)
        return { data: enemies };
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
        const personaje = await characterModel.findByPk(id, {include:["arma","mapa","raza"], });
        //console.log(personaje)
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

async function getByIdEnemy(id) {
    try {
        const personaje = await characterModel.findByPk(id, {include:["arma","mapa","raza"], });
        //console.log(personaje)
        if (!personaje) {
            return { error: "El artista no existe" };
        }
        return { data2: personaje };
    }
    catch (error) {
        console.error(error);
        return { error };
    }
}


async function create(userData) {
    try {
        userData.Life_points = 100;
        userData.Hostile = 0;        
        const newCharacter = await characterModel.create(userData);
         //console.log("newCharacter:", newCharacter)
        return { data: newCharacter, error: null }; 
    } catch (error) {
        console.error(error);
        return {error}
    }
}
// async function update(id, userData) {
//     try {
//         const personaje = await characterModel.update(characterData,{where: {Character_id:id}});
//         return {data:personaje};
//     } catch (error) {
//         console.error(error);
//         return {error}
//     }
   
// }


async function remove(id) {
    try {
        const character = await characterModel.findByPk(id);
        await character.destroy();
        return {data:character};
    } catch (error) {
        console.error(error);
        return{error}
    }
    
}


export {
    getAll,
    getAllEnemy,
    getById,
    getByIdEnemy,
    getWeaponByRace,
    getMapByRace,
    getRaceIdByCharacterId,
    getweaponIdByCharacterId,
    getMapIdByCharacterId,
    create,
    // update,
    remove
};


export default {
    getAll,
    getAllEnemy,
    getWeaponByRace,
    getMapByRace,
    getRaceIdByCharacterId,
    getweaponIdByCharacterId,
    getMapIdByCharacterId,
    getById,
    getByIdEnemy,
    create,
    // update,
    remove
};