const express = require('express');
const router = express.Router();

//ambil respond
const resp = require('../respond');

//ambil schema dataResep
const dataUser = require('../model/user');

router.patch('/',async (req, res) => {
    try {
        const newData = await dataUser.findByIdAndUpdate(
            req.body.id,
            {$push:{favorit:req.body.key}});
        if(!newData) throw error('gagal');
        resp.ok('data berhasil diupdate',res);
    } catch (error) {
        res.status(400).send('gagal');
    }
});

module.exports = router;