const express = require('express');
const router = express.Router();

//ambil respond
const resp = require('../respond');

//ambil schema dataResep
const trendFood = require('../model/trendFood');

router.patch('/',async (req, res) => {
    try {
        const post = await trendFood.findByIdAndUpdate({_id : '60d9e3eda3ac5e15756e317f'},{$push : req.body});
        if(!post) throw error('error');
        resp.ok('data berhasil diupload',res);
    } catch (error) {
        res.status(400).send('gagal');
    }
});
module.exports = router;