const express = require('express');
const router = express.Router();
//ambil respond
const resp = require('../respond');

//ambil schema dataResep
const detailResep = require('../model/detailResepSchema');

router.post('/', async (req, res) => {
    const newDetailResep = new detailResep(req.body);
    try {
        const post = newDetailResep.save();
        if(!post) throw new Error('Ada masalah saat upload');
        resp.ok('data berhasil di upload',res);
    } catch (error) {
        res.status(400).send("Something went wrong");
    }
});

module.exports = router;