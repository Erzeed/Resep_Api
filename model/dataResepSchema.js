const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var resep = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    like:{
        type:Boolean,
        required:true,
    },
    thumb:{
        type:String,
        required:true,
    },
    key:{
        type:String,
        required:true,
    },
    times:{
        type:String,
        required:true,
    },
    serving:{
        type:String,
        required:true,
    },
    origin:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    difficulty:{
        type:String,
        required:true,
    },
});

resep.index({
    title:'text',
    description:'text'
});

//Export the model
module.exports = mongoose.model('dataResep', resep);


