const express = require('express');
const router = express.Router();

//ambil respond
const resp = require('../respond');

//ambil schema dataResep
const dataArtikel = require('../model/artikelScehma');

router.get('/:title', async (req, res) => {
    try {
        const data = await dataArtikel.find({$text:{$search:req.params.title}});
        // if(!data) throw new Error('Ada masalah saat mengambil data');
        resp.ok(data,res);
    } catch (error) {
        res.status(400).send("Something went wrong");
    }
});

module.exports = router;