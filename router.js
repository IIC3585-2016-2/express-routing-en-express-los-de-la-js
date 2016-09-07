// router.js
var express = require('express');
var router = express.Router();

// Se le entrega una middleware específico para este router
router.use(function timeLog(req, res, next) {
  console.log('Algo está pasando...');
  next();
});
// Se define el home de esta ruta
router.get('/', function(req, res) {
  res.send('Perros Welcome page');
});
// se le agrega una página específica a esta ruta
router.get('/about', function(req, res) {
  res.send('Acerca de los perros');
});

module.exports = router;
