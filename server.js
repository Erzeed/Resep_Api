const express = require('express');
const app = express();
const cors = require('cors');

const con = require('./connection');

//middleware
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
//cors agar tidak terblock oleh browser
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
//tampilan basehome
app.get('/', (req, res) => {
    res.send({
        status:200,
        results:'haii -_-'
    });
});

//export router dari router js
const router = require('./router');
router(app);
//server
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server started on ${port}`);
});