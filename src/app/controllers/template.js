const employee = require("../models/employee");
const {Single, Muti } = require("../../mongoose/query");
class template{
    home(req,res,next){
        employee.find({})
        .then((listEmployee,list) => {
            res.render("home/home",{listEmployee : Muti(listEmployee)});         
        }).catch((next) );
    }
    // employee
    // employee/add
    addEmployee(req,res){
        res.render("employee/addEmployee");
    }
    // employee/edit:id
    editEmployee(req,res){
        employee.findById({_id: req.params.id})
        .then((listItem) => {
            res.render("employee/editEmployee",{listItem: Single(listItem)});
        }).catch((err) => {
            console.log("Error");
        });
     
    }
    // employee/(list-employee)
    listEmployee(req,res){
        employee.find({})
        .then((list)=>{
            res.render("employee/listEmployee",{list: Muti(list)});
        })
    }
    staff_details(req,res){
        employee.findById({_id: req.params.id})
        .then((staffItem) => {
            res.render("employee/staff-details",{staffItem: Single(staffItem)});
            
        }).catch((err) => {
            console.log("details failed");
        });
    }
    timeKeeping(req,res,next){
        employee.find({})
        .then((timeEmployee) => {
            res.render("datetime/timeKeeping",{timeEmployee: Muti(timeEmployee)});
            
        }).catch((next));
    }
    money(req,res,next){
    employee.find({}).populate('lasary')
        .then((moneyEmployee) => {
            // res.json(moneyEmployee);
            res.render("datetime/money",{moneyEmployee : Muti(moneyEmployee)})
        }).catch((next));
        
      
    }
    profile(req,res){
        res.render("profile/profile");
    }
    // calender
    calender(req,res){
        res.render("calender/calender");
    }
    // login & register
    login(req,res){
        res.render("login/login",{layout: "login.hbs"});
    }
    register(req,res){
        res.render("login/register",{layout: "login.hbs"});
    }
    // cv
    listcv(req,res){
        res.render("cv/listcv")
    }
    cv(req,res,next){
        res.render("cv/cv");

    }
}
module.exports = new template();