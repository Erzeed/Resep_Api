const express = require('express');
const router = express.Router();
//ambil respond
const resp = require('../respond');

//ambil schema dataResep
const fooddetailArtikel = require('../model/detailFoodInformaion');

router.get('/:key', async (req, res) => {
    try {
        const data = await fooddetailArtikel.findOne({key:req.params.key});
        if(!data) throw new Error('Ada masalah saat mengambil data');
        resp.ok(data,res);
    } catch (error) {
        res.status(400).send("Something went wrong");
    }
});

module.exports = router;