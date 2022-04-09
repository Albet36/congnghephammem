const authLogin = require("../app/controllers/authLogin");
const template = require("../app/controllers/template");
const middlewareAuth = require("../middleware/auth");
function routes(app){
    app.get("/home", middlewareAuth.requireAuth,   template.home);
    app.get("/employee/add-employee", middlewareAuth.requireAuth, template.addEmployee);
    app.post("/employee/edit-employee/:id", middlewareAuth.requireAuth, template.editEmployee);
    app.post("/employee/staff-details/:id", middlewareAuth.requireAuth, template.staff_details);
    app.get("/employee", middlewareAuth.requireAuth, template.listEmployee);
    app.get("/employee/time-keeping", middlewareAuth.requireAuth, template.timeKeeping);
    app.get("/employee/money",template.money);
    app.get("/profile", middlewareAuth.requireAuth, template.profile);
    // calender
    app.get("/calender", middlewareAuth.requireAuth, template.calender);
    // login & register
    // cv
    app.get("/cv", middlewareAuth.requireAuth, template.cv);
    app.get("/list-cv", middlewareAuth.requireAuth, template.listcv);
    app.get("/login", template.login);
    app.get("/register",  template.register);
    //logout acc
    app.get("/logout", authLogin.logoutAcc);
}
module.exports = routes;