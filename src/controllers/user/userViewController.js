import userController from "./userController.js";


async function loginForm(req,res){
    res.render("user/login");
}
async function login(req, res) {
    const { Email, Password } = req.body;
    const { error, data } = await userController.login( Email, Password );

    if (error) {
        res.render("user/login", { error }); // Muestra el error en la vista
    } else {
        req.session.user = data;
        console.log("LA DATA ES:",data)
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

async function updateForm(req,res){
    const id = parseInt(req.params.id);
    const {error,data:artist}= await artistController.getById(id);
    res.render("artist/update",{error,artist});
}

async function update(req,res){
    const id = parseInt(req.params.id);
    const {name,is_alive,birth_date} = req.body;
    const realIsAlive = is_alive === "on" ? 1 : 0;
    const {error,data} = await artistController.update(id,{name,is_alive:realIsAlive,birth_date});
    res.redirect("/artist");
}
export {
    register,
    registerForm,
    login,
    loginForm,
    logout,
    getAll,
    updateForm,
    update
}

export default {
    register,
    registerForm,
    login,
    loginForm,
    logout,
    getAll,
    updateForm,
    update
}