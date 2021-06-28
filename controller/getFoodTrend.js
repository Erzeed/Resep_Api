const express = require('express');
const router = express.Router();
//ambil respond
const resp = require('../respond');

//ambil schema dataResep
const trendFood = require('../model/trendFood');

router.get('/', async (req, res) => {
    try {
        const neWfood = await trendFood.find();
        if(!neWfood) throw error('gagal');
        resp.ok(neWfood,res);
    } catch (error) {
        res.status(400).send('gagal');
    }
});

module.exports = router;