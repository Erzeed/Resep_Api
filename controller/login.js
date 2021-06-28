const express = require('express');
const router = express.Router();

//ambil respond
const resp = require('../respond');

//ambil schema dataResep
const dataUser = require('../model/user');
const md5 = require('md5');

router.post('/', async (req, res) => {

    try {
        const newDataUser = await dataUser.find({
            email: req.body.email,
            password: md5(req.body.password)
        });
        if(!newDataUser) throw new error('error');
        resp.ok(newDataUser,res);
    } catch (error) {
        res.status(400).send('gagal');
    }
});

module.exports = router;