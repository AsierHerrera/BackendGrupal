const usuarios = [
	{
		"User_id" : 1,
		"Name" : "Anna",
		"Licence" : 1,
		"Email" : "anna@example.com",
		"Password" : "contraseña123"
	},
	{
		"User_id" : 2,
		"Name" : "Asier",
		"Licence" : 1,
		"Email" : "asier@example.com",
		"Password" : "contraseña456"
	},
	{
		"User_id" : 3,
		"Name" : "Bego",
		"Licence" : 1,
		"Email" : "bego@example.com",
		"Password" : "contraseña789"
	},
	{
		"User_id" : 4,
		"Name" : "Luis",
		"Licence" : 1,
		"Email" : "luis@example.com",
		"Password" : "contraseña101112"
	}
];

async function getAll(){
    return {data:usuarios}
}

async function getById(id){
    const usuario = usuarios.find(usuario => usuario.User_id === id);
    if(!usuario){
        return {error:"El artista no existe"};
    }
    return {data:usuario};
}

async function create(userData){
    const {Name,Licence,Email,Password} = userData;
    if(!Name){
        return {error:"Los usuarios deben tener nombre!"};
    }
    const maxId = Math.max(...usuarios.map(usuario => usuario.User_id));
    const newId= maxId + 1;
    const newUser = {
        User_id:newId,
        Licence,
        Email,
        Password
    };
    usuarios.push(newUser);
    return {data:newUser};
}

async function update(id,userData){
    const {Name,Licence,Email,Password} = userData;
    const usuario = usuarios.find(usuario => usuario.User_id === id);
    if(!usuario){
        return {error:"El usuario no existe"};
    }
    if(Name){
        artist.Name = Name;
    }
    if(is_alive !== null && is_alive!== undefined){
        artist.is_alive=is_alive
    }
    if(name){
        artist.name = name;
    }
    return {data:artist};
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