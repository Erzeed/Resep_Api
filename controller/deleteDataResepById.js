const express = require('express');
const router = express.Router();
//ambil respond
const resp = require('../respond');
//ambil schema data resep
const dataResep = require('../model/dataResepSchema');

router.delete('/:id',async (req, res) => {
    try {
        const deleteById = await dataResep.findByIdAndDelete(req.params.id);
        if(!deleteById) throw error('error');
        resp.ok('data berhasil dihapus',res);
    } catch (error) {
        res.status(400).send('something wrong');
    }
});

module.exports = router;