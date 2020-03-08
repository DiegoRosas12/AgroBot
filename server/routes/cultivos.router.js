module.exports = app => {

    const cultivos = require('../controllers/cultivos.controller.js');

    var router = require("express").Router();

    // Show all cultivos
    // router.get('/', cultivos.findAll);
    router.get('/', function(req, res){
        res.send("get cultivos")
    })
    // Insertar nuevo cultivo
    router.post('/', cultivos.create);

    app.use('/cultivos', router);
}
