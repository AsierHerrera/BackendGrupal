import userModel from "../../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

async function getAll() {
    try {
        const users = await userModel.findAll();
        return { data: users };
    }
    catch (error) {
        console.error(error);
        return { error: error };
    }
}

async function getById(id) {
    try {
        const user = await userModel.findByPk(id);
        if (!user) {
            return { error: "El user no existe" };
        }
        return { data: user };
    }
    catch (error) {
        console.error(error);
        return { error };
    }

}

async function getByEmail(Email){
    try {
        const user = await userModel.findOne({where:{Email:Email}})
        return {data:user};
    } catch (error) {
        console.error(error);
        return {error};
    }
}

async function create(userData) {
    try {
        const newuser = await userModel.create(userData);
        console.log("new user",newuser);
        return {data:newuser};
    } catch (error) {
        console.error(error);
        return {error}
    }
}

async function register(userData) {
    const {Name, Is_admin, Email, Password, Password_repeat} = userData;
    try {
        if(!Email || !Password || !Password_repeat){
            return res.render("user/register",{error:"falta email o contraseña"});
        }
        if(Password !== Password_repeat){
            return res.render("user/register",{error:"las contraseñas no coinciden"});
        }
        const {data:oldUser} = await userController.getByEmail(Email);
        console.log("old user",oldUser)
        if(oldUser){
            return res.render("user/register",{error:"el usuario ya existe"});
        }
        const hash = await bcrypt.hash(Password,10);
        const maxId = await userModel.findOne({ order: [['User_Id', 'DESC']] });
        const newId = maxId + 1;
        const nuevoUser = {
            Name,
            User_id: newId,
            Is_admin: 0,
            Email,
            Password:hash
        }
        const newUser = await create(nuevoUser);

    } catch (error) {
        console.error(error);
    }
}

async function login(userData) {
    const {Email,Password} = userData;
    try {
        if(!Email || !Password ){
            return res.render("user/login",{error:"falta Email o contraseña"});
        }
        const {data:oldUser} = await userController.getByEmail(Email);
        if(!oldUser){
            return res.render("user/login",{error:"la combinación de usuario y contraseña es errónea"});
        }
        const result = await bcrypt.compare(Password,oldUser.Password);
        if(result){
            req.session.user = {Email,id:oldUser.user_id};
            res.redirect("/character");
        }
        else{
            res.render("user/login",{error:"la combinación de usuario y contraseña es errónea"})
        }
    } catch (error) {
        console.error(error);
        res.render("user/login",{error:"Ha habido un error en el login"})
    }
}


async function update(id, userData) {
    try {
        const newuser = await userModel.update(userData,
            {
                where: 
                {
                    user_id:id
                }
            }
        );
        return {data:newuser};
    } catch (error) {
        console.error(error);
        return {error}
    }
   
}

async function remove(id) {
    try {
        const result = await userModel.remove(id);
        return {data:result};
    } catch (error) {
        console.error(error);
    }
    
}

export {
    getAll,
    getById,
    getByEmail,
    login,
    register,
    create,
    update,
    remove
};


export default {
    getAll,
    getById,
    getByEmail,
    login,
    register,
    create,
    update,
    remove
};