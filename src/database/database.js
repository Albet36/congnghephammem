
const mongoose = require("mongoose");
function Connect() {
    try {
        mongoose.connect("mongodb://localhost:27017/website");
        console.log("Success");
    } catch (error) {
        console.log("failed");
    }
}
module.exports = { Connect };