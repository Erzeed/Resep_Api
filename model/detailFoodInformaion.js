const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var foodDetailInformation = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    key: {
        type: String,
        required: true,
    },
    thumb: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    date_published: {
        type: String,
        required: true,
    },
    asalDaerah: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
});

//Export the model
module.exports = mongoose.model('foodDetailInformation', foodDetailInformation);