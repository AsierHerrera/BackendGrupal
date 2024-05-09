import userControllerDanel from "./userControllerDanel.js";


async function registerForm(req,res){
    res.render("singup/singup");
}
async function register(req,res) {
    const {Name, Is_admin, Email, Password, Password_repeat} = req.body;
    try {
        const {error,data} = await userControllerDanel.register({Name, Is_admin, Email, Password, Password_repeat})

        res.redirect("/user/userlist");
    } catch (error) {
        console.error(error);
        res.render("singup/singup",{error:"ha habido un error en el registro"})
    }
}
async function loginForm(req,res){
    res.render("user/login");
}
async function login(req, res) {
    const { Email, Password } = req.body;
    const { error, data } = await userControllerDanel.login({ Email, Password });

    if (error) {
        res.render("user/login", { error }); // Muestra el error en la vista
    } else {
        res.redirect("/user"); // Redirige al usuario a la página de inicio después de iniciar sesión
    }
}
async function logout(req,res){
    req.session.user = null;
    res.redirect("/character");
}

async function getAll(req,res){
    const {data:users} = await userControllerDanel.getAll();
    res.json(users);
}
export {
    register,
    registerForm,
    login,
    loginForm,
    logout,
    getAll
}

export default {
    register,
    registerForm,
    login,
    loginForm,
    logout,
    getAll
}