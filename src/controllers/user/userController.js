const usuarios = [
	{
		"User_id" : 1,
		"Name" : "Anna",
		"Is_admin" : 1,
		"Email" : "anna@example.com",
		"Password" : "contraseña123"
	},
	{
		"User_id" : 2,
		"Name" : "Asier",
		"Is_admin" : 1,
		"Email" : "asier@example.com",
		"Password" : "contraseña456"
	},
	{
		"User_id" : 3,
		"Name" : "Bego",
		"Is_admin" : 1,
		"Email" : "bego@example.com",
		"Password" : "contraseña789"
	},
	{
		"User_id" : 4,
		"Name" : "Luis",
		"Is_admin" : 1,
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
        return {error:"El usuario no existe"};
    }
    return {data:usuario};
}

async function create(userData){
    const {Name,Is_admin,Email,Password} = userData;
    if(!Name){
        return {error:"Los usuarios deben tener nombre!"};
    }
    const maxId = Math.max(...usuarios.map(usuario => usuario.User_id));
    const newId= maxId + 1;
    const newUser = {
        User_id:newId,
        Is_admin,
        Email,
        Password
    };
    usuarios.push(newUser);
    return {data:newUser};
}

async function update(id,userData){
    const {Name,Is_admin,Email,Password} = userData;
    const usuario = usuarios.find(usuario => usuario.User_id === id);
    console.log(usuario)
    if(!usuario){
        return {error:"No se puede modificar un usuario que no existe"};
    }
    if(Name){
        usuario.Name = Name;
    }
    if(Is_admin !== null && Is_admin!== undefined){
        usuario.Is_admin = Is_admin
    }
    if(Email){
        usuario.Email = Email;
    }
    if(Password){
        usuario.Password = Password
    }

    console.log(usuario)
    return {data:usuario};
}

async function remove(id){
    const usuarioIndex = usuarios.findIndex(usuario=>usuario.User_id===id);
    if(usuarioIndex === -1){
        return {error:"no se pueden borrar artistas que no existen"}
    }
    const deletedUser = usuarios.splice(usuarioIndex,1);
    return {data:deletedUser};
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