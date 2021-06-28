const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var foodInformation = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    key: {
        type:String,
        required:true,
    },
    thumb:{
        type:String,
        required:true,
    },
    asalDaerah: {
        type:String,
        required:true,
    },
    description_singkat:{
        type:String,
        required:true,
    }
});

//Export the model
module.exports = mongoose.model('foodInformation', foodInformation);