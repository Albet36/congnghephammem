const Api = require("../controllers/Api");
const authLogin = require("../controllers/authLogin");
function api(app) {
    app.post("/employee",Api.createEmployee); 
    app.put("/employee/:id",Api.editEmployee);
    app.delete("/employee/:id",Api.deleteEmployee);
    app.post("/account",authLogin.checkAcc);
    app.post("/register",authLogin.register);
   
}
module.exports = api;