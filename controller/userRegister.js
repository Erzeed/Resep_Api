const express = require('express');
const md5 = require('md5');
const router = express.Router();
//ambil respond
const resp = require('../respond');
//ambil schema data resep
const user = require('../model/user');

router.post('/',async (req, res) => {
    try {
        const newUser = new user({
            Username: req.body.Username,
            email: req.body.email,
            password: md5(req.body.password)
        });
        const User = newUser.save();
        if(!User) throw new Error('Ada masalah saat upload');
        resp.ok('data berhasil di upload',res);
    } catch (error) {
        res.status(400).send("Something went wrong");
    }
});
module.exports = router;

