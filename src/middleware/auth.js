const account = require("../app/models/account");

module.exports.requireAuth = function (req,res,next) {
    if(!req.cookies.userId){
       res.redirect("/login");
       return;
    }
 
    const user =  account.findOne({id: req.cookies.userId});
    if(!user){
        res.redirect("/login");
        return;
    }
    next();
}