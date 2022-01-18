const express = require('express');
route = express.Router();
controllerContas = require('../controller/controllerContas');

route.get('/', controllerContas.get);
route.get('/:id', controllerContas.getById);
route.post('/', controllerContas.post);
route.put('/', controllerContas.put);
route.delete('/', controllerContas.delete);

module.exports = route;