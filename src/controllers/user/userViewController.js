import userController from "./userController.js";


async function loginForm(req,res){
    res.render("user/login");
}
async function login(req, res) {
    const { Email, Password } = req.body;
    const { error, data } = await userController.login({ Email, Password });

    if (error) {
        res.render("user/login", { error }); // Muestra el error en la vista
    } else {
        res.redirect("/user"); // Redirige al usuario a la página de inicio después de iniciar sesión
    }
}

async function registerForm(req,res){
    res.render("user/singup");
}
async function register(req,res) {
    const {Name, Is_Admin, Email, Password, Password_repeat} = req.body;
    try {
        
        const nuevouser = await userController.registerUser({Name, Is_Admin, Email, Password, Password_repeat})
        console.log(nuevouser)
        res.redirect("/user");
    } catch (error) {
        console.error(error);
        res.render("user/singup",{error})
    }
}

async function logout(req,res){
    req.session.user = null;
    res.redirect("/character");
}

async function getAll(req,res){
    const {error,data} = await userController.getAll();
    res.render("user/userlist",{error,data});;
}

async function updateForm(req, res) {
        const id = parseInt(req.params.id);
        const { error, data: user } = await userController.getById(id);
        res.render("user/userupdate",{error,user});

}

async function update(req, res) {
    try {
        const id = parseInt(req.params.id);
        const { Name, Is_Admin, Email, Password, Password_repeat } = req.body;
        const realIsAlive = Is_Admin === newUser.Is_Admin ? true : false;
        const { error, data } = await userController.update(id, { Name, Is_Admin, Email, Password, Password_repeat });
        if (error) {
            res.status(500).send("Error al actualizar usuario");
        } else {
            res.redirect("/user");
        }
    } catch (error) {
         res.status(500).send("Error interno del servidor");
    }
}


async function remove(req,res){
    const id = parseInt(req.params.id);
    const {error,data} = await userController.remove(id);
    res.redirect("/user");
}
export {
    register,
    registerForm,
    login,
    loginForm,
    logout,
    getAll,
    updateForm,
    update,
    remove
}

export default {
    register,
    registerForm,
    login,
    loginForm,
    logout,
    getAll,
    updateForm,
    update,
    remove
}