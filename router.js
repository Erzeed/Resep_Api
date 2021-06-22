const dataResep = require('./controller/dataResep');
const getdataResep = require('./controller/getAllDataResep');
const search = require('./controller/search');
const detailResep = require('./controller/postDetailResep');
const getdetailResep = require('./controller/getDetailRecep');

module.exports = function (app) {
    app.use('/dataResep',dataResep);
    app.use('/getdataResep',getdataResep);
    app.use('/search',search);
    app.use('/postDetail',detailResep);
    app.use('/detailRecipe',getdetailResep);
};