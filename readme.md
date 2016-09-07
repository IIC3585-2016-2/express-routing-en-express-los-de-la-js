# Rutas en Express

Se refiere a la forma en que la aplicación responde los request enviador por los clientes en un endpoint particular, el cúal tiene una uri y un http request method específico.

###  Estructura básica
``` javascript
  app.METHOD(PATH, HANDLER)

  // app: se refiere a la aplicación en express
  // method: http method que se utilizará
  // path: dirección donde el cliente hace el request
  // handler: función la cuál se ejecuta al llegar el request
```

### Http Request
``` javascript
  // Http Request
  app.get('/', (req, res) => {
    res.send('Hello World!');
  });

  app.post('/', (req, res) => {
    res.send('Post request')
  })

  app.put('/', (req, res) => {
    res.send('Put request')
  })

  app.delete('/', (req, res) => {
    res.send('Delete request')
  })
```

### All request
``` javascript
  // All Request

  app.all('/all', (req, res, next) => {
    res.send('This is all route')
  })
```

### Ejemplo de rutas
``` javascript
  // Ejemplos de rutas
  app.get('/about', (req, res) => {
    res.send('About page')
  })

  app.get('/gatitos?', (req, res) => {
    res.send('Muchos gatitos!')
  })

  app.get('/grito+', (req, res) => {
    res.send('Esto es un gritooooo!')
  })

  app.get('/hola*chao', (req, res) => {
    res.send('hola amigo')
  })

  app.get('/perrit(os)?(as)?', (req, res) => {
    res.send('Es un mamifero')
  })
```

### Expresiones regulares
``` javascript
  app.get(/mon/, (req, res) => {
    res.send('Probablemente es un digimon')
  })
```

### Manejo de Rutas

``` javascript
  // doble función anidada
  app.get('/doblefuncion', (req, res, next) => {
    console.log('función 1')
    next()
  }, (req, res) => {
    res.send('funcion 2')
  })

  // arreglo de funciones anidadas
  var a1 = (req, res, next) => {
    console.log('pasé por a1')
    next()
  }

  var a2 = (req, res, next) => {
    console.log('pasé por a2')
    next()
  }

  var fin = (req, res, next) => {
    res.send('pasé por a3')
  }

  app.get('/arreglofuncion', [a1, a2, fin])

  // Mixta

  app.get('/mixfuncion', [a1, a2], (req, res) => {
    res.send('hola función mix')
  })
```

###  Router
using route in main file:
``` javascript
  // Router
  app.route('/bears')
     .get((req, res) => {
       res.send('Toma todos los osos.')
     })
     .post((req, res) => {
       res.send('Guardando un oso.')
     })
```
using route in external file
``` javascript
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
```

``` javascript
  //index.js
  // Se importa el router
  var dogs = require('./router.js')
  // Se le entrega como handler de la ruta específica
  app.use('/dogs', dogs)

```
