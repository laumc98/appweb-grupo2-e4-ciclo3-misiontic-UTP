/**
 * Archivo de arranque del proyecto
 */

// Módulos necesarios
const express = require('express'); // Se trae la librería de express


// Se crea la aplicación express
const app = express();


app.get('/', function (req, res) {
  res.send('Hello World!');
});
//se recomienda usar el puerto especificado como una variable de entorno
app.set('puerto', process.env.PORT || 3000);

app.listen(app.get('puerto'), function () {
  console.log('Example app listening on port ' + app.get('puerto') + '!');
});