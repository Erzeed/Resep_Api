const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var detailArtikel = new mongoose.Schema({
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
        unique:true,
    },
    author:{
        type:String,
        required:true,
        unique:true,
    },
    date_published:{
        type:String,
        required:true,
    },
    description:{
        type:Array,
        required:true,
    },
});

//Export the model
module.exports = mongoose.model('detailArtikel', detailArtikel);