const data = require('./exportRequireRoute');

module.exports = function (app) {
    app.use('/dataResep',data.dataResep);
    app.use('/getdataResep',data.getdataResep);
    app.use('/search',data.search);
    app.use('/postDetail',data.detailResep);
    app.use('/detailRecipe',data.getdetailResep);
    app.use('/deleteAllResep',data.deleteAllDataResep);
    app.use('/deleteAllResepById',data.deleteAllDataResepById);
    app.use('/deleteAllDetailResep',data.deleteAllDetailResep);
    app.use('/register',data.regis);
    app.use('/login',data.login);
    app.use('/updateUser',data.updateFavoritUser);
    app.use('/deleteUserFavorite',data.deleteFavoritUser);
    app.use('/dataUser',data.getDataUser);
    app.use('/uploadArtikel',data.artikelPost);
    app.use('/getArtikel',data.getArtikel);
    app.use('/uploadDetailArtikel',data.artikelDetailPost);
    app.use('/searchDetailArtikel',data.searchDetailArtikel);
    app.use('/getAllDetailArtikel',data.getAllDetailArtikel);
    app.use('/postFoodInformation',data.postFoodInformation);
    app.use('/getAllFoodInformation',data.getAllFoodInformation);
    app.use('/postDetailFoodInformation',data.postDetailFoodInformation);
    app.use('/searchDetailFoodInformation',data.searchDetailFoodInformation);
    app.use('/postTrendFood',data.postTrendFood);
    app.use('/getTrendFood',data.getTrendFood);
    app.use('/getArtikelByKey',data.getArtikelDetailByKey);
    app.use('/searchArtikel',data.searchArtikel);
    app.use('/userById',data.getUserById);
    app.use('/getResepByKey',data.getResepByKey);
    // app.use('/',hah);
};
