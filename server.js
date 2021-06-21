const express = require('express');
const app = express();
const con = require('./connection');

//body parser
app.use(express.json());

//welcome
app.get('/', (req, res) => {
    res.send( {
        status:200,
        result:'Welcome -_- '
    });
});

//router
const router = require('./router');
app.use(router);
//server
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server started on ${port}`);
});