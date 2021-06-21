const express = require('express');
const app = express();
const con = require('./connection');

//body parser
app.use(express.json());

//server
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server started on ${port}`);
});