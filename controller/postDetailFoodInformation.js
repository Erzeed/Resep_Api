const express = require('express');
const router = express.Router();

const resp = require('../respond');

//ambil schema dataResep
const foodDetailInformation = require('../model/detailFoodInformaion');

router.post('/',async (req, res) => {
    try {
        const newDetailFoodInformation = await new foodDetailInformation(req.body);
        const post = newDetailFoodInformation.save();
        if(!post) throw error('error');
        resp.ok('data berhasil diupload',res);
    } catch (error) {
        res.status(400).send('gagal');
    }
});

module.exports = router;