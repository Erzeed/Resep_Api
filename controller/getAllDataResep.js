const express = require('express');
const router = express.Router();
//ambil respond
const resp = require('../respond');

//ambil schema dataResep
const dataResep = require('../model/dataResepSchema');

router.get('/', async (req, res) => {
    try {
        const data = await dataResep.find();
        if(!data) throw new Error('Ada masalah saat mengambil data');
        resp.ok(data,res);
    } catch (error) {
        res.status(400).send("Something went wrong");
    }
});

module.exports = router;