const express = require('express');
const router = express.Router();

//ambil respond
const resp = require('../respond');

//ambil schema dataResep
const dataUser = require('../model/user');

router.get('/', async (req, res) => {

    try {
        const newDataUser = await dataUser.find();
        if(!newDataUser) throw error(error);
        resp.ok(newDataUser,res);
    } catch (error) {
        res.status(400).send('gagal');
    }
});

module.exports = router;