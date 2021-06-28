const express = require('express');
const router = express.Router();

//ambil respond
const resp = require('../respond');

//ambil schema dataResep
const dataUser = require('../model/user');

router.patch('/:id',async (req, res) => {
    try {
        const newData = await dataUser.findByIdAndUpdate(req.params.id,{$push:req.body});
        if(!newData) throw error('gagal');
        resp.ok('data berhasil diupdate',res);
    } catch (error) {
        res.status(400).send('gagal');
    }
});

module.exports = router;