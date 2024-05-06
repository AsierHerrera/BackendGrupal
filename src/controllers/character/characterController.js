const personajes = [
    {
        "Character_id": 1,
        "Name": "Aragorn",
        "Hostile": false,
        "Race_id": 1 // los elfos id nº1 por ejemplo
    },

    {
        "Character_id": 2,
        "Name": "Legolas",
        "Hostile": false,
        "Race_id": 2 // los elfos id nº2 por ejemplo
    }
]
async function getAll(){
    return {data:personajes};
    //return "Mostramos todos los personajes";
}

async function getById(id){
    const character = personajes.find(character=>character.Character_id === id);
    if (!character){
        return {error: "El personaje no exite"};
    }
    return{data:character};

    //return `Mostramos el personaje con id ${id}`;
}
async function create(userData){
    const {Name, Hostile, Race_id} = userData;
    if(!Name){
        return{error: "los personajes tienen que tener nombre"};
    }
    const maxId = Math.max(...personajes.map(character => character.Character_id));
    const newId = maxId +1;
    const newCharacter ={
        Character_id:newId,
        Name,
        Hostile,
        Race_id,
    }
    personajes.push(newCharacter);
    return{data:newCharacter};

   // return `Los datos para el personaje nuevo son: nombre:${Name}, raza: ${Race}, id del arma : ${Hostile}, mapa ${Race_id}`;
}
async function update(id,userData){
    const {Name,Race, Character_id, Hostile, Race_id} = userData;
    const character= personajes.find(character=>character.Character_id === id);
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
    const characterIndex = personajes.findIndex(character=>character.Character_id === id);
    if( characterIndex === -1){
        return {error: "No se puede borrar el personaje que no existe"}
    }
    const deleteChacter = personajes.splice(characterIndex,1);
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