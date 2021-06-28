const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var detailResep = new mongoose.Schema({
    key: {
        type:String,
        required:true,
    },
    linkyoutube: {
        type:String,
        required:true,
    },    
    title:{
        type:String,
        required:true,
    },
    thumb:{
        type:String,
        required:true,
    },
    servings:{
        type:String,
        required:true,
    },
    times:{
        type:String,
        required:true,
    },
    dificulty:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
        required:true,
    },
    needItem:{
        type:Array,
        required:true,
    },
    ingredient:{
        type:Array,
        required:true,
    },
    step:{
        type:Array,
        required:true,
    },
});


//Export the model
module.exports = mongoose.model('detailResep', detailResep);