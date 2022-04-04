const mongoose = require("mongoose");
const lasary = require("../models/lasary");
const Schema = mongoose.Schema;
const employeeModels = new Schema(
    {
    idEmployee: {type: String},
    imagesEmployee: {type: String},
    nameEmployee:{type: String},
    ageEmployee: {type:String},
    addressEmployee: {type:String},
    genderEmployee:{type:String},  
    phoneEmployee:{type:String},
    githubEmployee: {type:String},
    positionEmployee:{type:String},
    salaryEmployee:{type:String},
    birthdayEmployee:{type:String},
    workdaysEmployee:{type:String,default: ""},
    status:{type: String},
    work :{type:Number, default: 0},
    work2 :{type:Number, default: 0},
    lasary: [{ 
        type: Schema.Types.ObjectId, ref: 'lasary'
     }],
    account:[{
        type : Schema.Types.ObjectId , ref: 'account'
    }]
    },
{
    timestamps: true
}

)

module.exports = mongoose.model("employee", employeeModels);