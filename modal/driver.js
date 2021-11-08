const mongoose = require("mongoose");
const {model} = require("mongoose");

const driverSchema = new mongoose.Schema({
    name: {type: String, required: true},
    contact: {type: Number, required: true},
    
});

module.exports = model('driver', driverSchema);
// -74.0007316,40.7629786
// -73.856077,40.848447
// -73.9815103,40.7475731