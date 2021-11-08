const mongoose = require("mongoose");
const {model} = require("mongoose");

const carSchema = new mongoose.Schema({
    driver: {type: String, required: true},
    number_plate: {type: String, required: true},
    
});

module.exports = model('car', carSchema);
// -74.0007316,40.7629786