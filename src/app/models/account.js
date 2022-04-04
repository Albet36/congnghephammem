const mongoose = require("mongoose");
const bcrypt =require("bcrypt");
const Schema = mongoose.Schema;
const accountModels = new Schema(
    {
  username: {type: String},
  password: {type: String},
  
    },
{
    timestamps: true
}

)


module.exports = mongoose.model("account", accountModels);