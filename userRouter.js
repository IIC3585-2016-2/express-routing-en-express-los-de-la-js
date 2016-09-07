// router.js
var express = require('express');
var router = express.Router();

// Se toma el parámetro que ingresa
router.param('user_id', function(req, res, next, id) {
  console.log('buscando usuario de parámetro:',id);
  console.log('buscando usuario de parámetro:',req.params.user_id)
  req.user = {
    name: 'Usuario1',
    id: id
  }
  next();
});

router.get('/:user_id', function (req, res) {
  res.send('Nombre:' + req.user.name);
});

module.exports = router;
