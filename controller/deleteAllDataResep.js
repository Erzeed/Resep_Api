const express = require('express');
const router = express.Router();
//ambil respond
const resp = require('../respond');
//ambil schema data resep
const dataResep = require('../model/dataResepSchema');


router.delete('/',async (req, res) => {
    try {
        const newdata = await dataResep.deleteMany({});
        if(!newdata) throw error('error');
        resp.ok('data berhasil dihapus',res);
    } catch (error) {
        res.status(400).send('something wrong');
    }
});

module.exports = router;