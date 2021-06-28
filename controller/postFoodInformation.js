const express = require('express');
const router = express.Router();

const resp = require('../respond');

//ambil schema dataResep
const foodInformation = require('../model/foodInformation');

router.post('/',async (req, res) => {
    try {
        const newFoodInformation = await new foodInformation(req.body);
        const post = newFoodInformation.save();
        if(!post) throw error('error');
        resp.ok('data berhasil diupload',res);
    } catch (error) {
        res.status(400).send('gagal');
    }
});

module.exports = router;