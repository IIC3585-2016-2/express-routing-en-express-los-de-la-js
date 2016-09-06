var express = require('express')
var app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/', (req, res) => {
  res.send('Post request')
})

app.put('/user', (req, res) => {
  res.send('Put request')
})

app.delete('/user', (req, res) => {
  res.send('Delete request')
})

app.listen(3000);
