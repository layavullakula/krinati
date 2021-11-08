const mongoose = require("mongoose");
const {model} = require("mongoose");

const locationSchema = new mongoose.Schema({
    number_plate: {type: String, required: true},
    location: {type: Object, required: true},
    // name: {type: String, required: true}, 
});

locationSchema.index({
    location: "2dsphere",
})


module.exports = model('location', locationSchema);