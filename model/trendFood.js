const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var trendFood = new mongoose.Schema({
    key:{
        type:Array,
    }
});

//Export the model
module.exports = mongoose.model('trendFood', trendFood);