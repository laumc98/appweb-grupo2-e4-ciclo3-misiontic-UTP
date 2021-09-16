const express = require("express");
const path = require('path');

// Se inicia un objeto express
const app = express();
// se define el puerto donde se ejecuta la aplicación
const port = process.env.PORT || 8080;

// para usar archivos estaticos dentro de las carpetas
app.use('/static/assets', express.static(path.join(__dirname,'/public/assets')));
app.use('/static/css', express.static(path.join(__dirname,'/public/css')));
app.use('/static/js', express.static(path.join(__dirname,'/public/js')));

// Rutas de navegación de la aplicación
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/public/index.html'));
    //res.sendFile(path.join(__dirname, '/public/index.js'));
});
app.get('/premios', function (req, res) {
    res.sendFile(path.join(__dirname, '/public/premios.html'));
});
app.get('/eventos', function (req, res) {
    res.sendFile(path.join(__dirname, '/public/eventos.html'));
});
app.get('/ingreso', function (req, res) {
    res.sendFile(path.join(__dirname, '/public/ingreso.html'));
});
app.get('/registro', function (req, res) {
    res.sendFile(path.join(__dirname, '/public/registro.html'));
});

// error 404
app.use(function(req, res, next) {
    res.status(404).sendFile(path.join(__dirname, '/public/404.html'));
  });

app.listen(port);
console.log('Server started at http://localhost:' + port);