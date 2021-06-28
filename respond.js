//menangani respond dari server
exports.ok = function (val,res) {
    const data = {
        status:200,
        values:val
    };
    res.json(data);
    res.end();
};