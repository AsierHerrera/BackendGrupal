
async function getAll(){
    return "Mostramos todos los usuarios";
}

async function getById(id){
    return `Mostramos el usuario con id ${id}`;
}
async function create(userData){
    const {name,licence,email,password} = userData;
    return `Los datos para el usuario nuevo son: nombre:${name}, tipo de usuario: ${licence}, correo electronico: ${email}, contraseña ${password}`;
}
async function update(id,userData){
    const {name,licence,email,password} = userData;
    //const birth_date = artistData.birth_date;
    return `Los nuevos datos para el usuario con id ${id} son: nombre:${name}, tipo de usuario: ${licence}, correo electronico: ${email}, contraseña ${password}`;
}

async function remove(id){
    return `Borramos el usuario con id ${id}`;
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