import loginController from "./loginController.js";

async function loginpage(req,res){
    res.render("login/login");
}

async function create(req,res){
    const {Name,Is_admin,Email,Password, Password_repeat} = req.body;
    const {error,data} = await loginController.create({Name,Is_admin,Email,Password,Password_repeat});
    if (error) {
        res.render("login/login", { error }); // Pasa el error a la vista para que se muestre
    } else {
        res.redirect("/user");
    }   
}

export {
    loginpage,
    create,
};
export default {
    loginpage,
    create,
};