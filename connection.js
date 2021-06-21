const mongoose = require('mongoose');
const { MONGO_URI } = require('./config/config');

mongoose.Promise = global.Promise;

// Connect MongoDB 
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology:true,
}, (err) => {
    if (!err) {
        console.log('MongoDB Connection Succeeded.');
    } else {
        console.log('Error in DB connection: ' + err);
    }
});
