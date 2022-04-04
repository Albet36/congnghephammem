const employee = require("../models/employee");
const employeeModels = require("../models/employee");
class Api{
createEmployee(req,res,next){
   const data = req.body;
const employee= new employeeModels(data);
employee.save()
.then(() => res.redirect("/employee"))
.catch(next);
}
editEmployee(req,res,next){
employee.updateOne({_id: req.params.id}, req.body)
.then(() => res.redirect("/employee")).catch((next));
}
deleteEmployee(req,res,next){
    const id = req.params._id;
    const checkId = employee.findById(id);
    if(checkId){
    employee.deleteOne(id)
    .then(() => res.redirect("/employee"))
    .catch((next));
  }
  else{
     res.send("id không tồn tại");
  }
}
}
module.exports = new Api();
