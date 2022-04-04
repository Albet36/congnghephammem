const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const lasaryModels = new Schema(
    {
  basicLasary: {type: String},
  bonus: {type: String},
  punish : {type: String},
  lasary : {type: String},
    },
{
    timestamps: true
}

)
function lasary() {
  return this.lasary = this.basicLasary + this.bonus - this.punish; 
}
module.exports = mongoose.model("lasary", lasaryModels);