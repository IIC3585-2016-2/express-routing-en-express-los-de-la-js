var express = require('express')
var app = express();

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

// All Request

app.all('/all', (req, res, next) => {
  res.send('This is all route')
})

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

// Expresiones regulares

app.get(/mon/, (req, res) => {
  res.send('Probablemente es un digimon')
})

// Manejo de rutas

// doble función anidada
app.get('/doblefuncion', (req, res, next) => {
  console.log('Verificando usuario...')
  next()
}, (req, res) => {
  res.send('Información requerida por el usuario')
})

// arreglo de funciones anidadas
var login = (req, res, next) => {
  console.log('Verificando usuario...')
  next()
}

var validation = (req, res, next) => {
  console.log('Validando información...')
  next()
}

var send = (req, res, next) => {
  res.send('Información requerida por el usuario')
}

app.get('/arreglofuncion', [login, validation, send])

// Mixta

app.get('/mixfuncion', [login, validation], (req, res) => {
  res.send('Información requerida por el usuario')
})


// Router
app.route('/bears')
   .get((req, res) => {
     res.send('Toma todos los osos.')
   })
   .post((req, res) => {
     res.send('Guardando un oso.')
   })

// Se importa el router
var dogs = require('./router.js')
// Se le entrega como handler de la ruta específica
app.use('/dogs', dogs)


// Params
// index.js
// Se importa el router
var users = require('./userRouter.js')
// Se entrega como handler de la ruta
app.use('/users', users)


// Header
app.get('/header1', (req, res) => {
  res.append('Content-Type', 'text/plain');
  res.send('enviado con headers');
})

app.get('/header2', (req, res) => {
  res.set({
    'Content-Type': 'application/json'
  });
  res.json('enviado con headers')
})

app.listen(3000);
