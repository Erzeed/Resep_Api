const express = require('express');
const router = express.Router();

const resp = require('../respond');

//ambil schema dataResep
const dataArticle = require('../model/detailArtikel');

router.post('/',async (req, res) => {
    try {
        const newdetailArticle = await new dataArticle(req.body);
        const post = newdetailArticle.save();
        if(!post) throw error('error');
        resp.ok('data berhasil diupload',res);
    } catch (error) {
        res.status(400).send('gagal');
    }
});

module.exports = router;