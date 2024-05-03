
async function getAll(){
    return "Mostramos todos los personajes";
}

async function getById(id){
    return `Mostramos el personaje con id ${id}`;
}
async function create(userData){
    const {name,Race, Weapon_id, Map_id} = userData;
    return `Los datos para el personaje nuevo son: nombre:${name}, raza: ${Race}, id del arma : ${Weapon_id}, mapa ${Map_id}`;
}
async function update(id,userData){
    const {name,Race, Character_id, Weapon_id, Map_id} = userData;
    return `Los nuevos datos para el personaje con id ${id} son: nombre:${name}, raza: ${Race}, id del arma : ${Weapon_id}, mapa ${Map_id}`;
}

async function remove(id){
    return `Borramos el personaje con id ${id}`;
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