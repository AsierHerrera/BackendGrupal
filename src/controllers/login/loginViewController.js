import loginController from "./loginController.js";

async function loginpage(req,res){
    res.render("login/login");
}

export {
    loginpage,
};
export default {
    loginpage,
};