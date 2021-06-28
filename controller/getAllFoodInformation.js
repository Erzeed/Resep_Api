const express = require('express');
const router = express.Router();
//ambil respond
const resp = require('../respond');

//ambil schema dataResep
const foodInformation = require('../model/foodInformation');

router.get('/', async (req, res) => {
    try {
        const Food = await foodInformation.find();
        if(!Food) throw new Error('Ada masalah saat mengambil data');
        resp.ok(Food,res);
    } catch (error) {
        res.status(400).send("Something went wrong");
    }
});

module.exports = router;