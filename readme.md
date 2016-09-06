# Rutas en Express

Se refiere a la forma en que la aplicación responde los request enviador por los clientes en un endpoint particular, el cúal tiene una uri y un http request method específico.

TODO:
- definir request
- definir endpoint
- definir http request method


###  Estructura básica
``` javascript
  app.METHOD(PATH, HANDLER)

  // app: se refiere a la aplicación en express
  // method: http method que se utilizará
  // path: dirección donde el cliente hace el request
  // handler: función la cuál se ejecuta al llegar el request
```
