const express = require('express');
const router = express.Router();

const resp = require('../respond');

//ambil schema dataResep
const dataArticle = require('../model/artikelScehma');

router.post('/',async (req, res) => {
    try {
        const newdataArticle = await new dataArticle(req.body);
        const post = newdataArticle.save();
        if(!post) throw error('error');
        resp.ok('data berhasil diupload',res);
    } catch (error) {
        res.status(400).send('gagal');
    }
});

module.exports = router;
