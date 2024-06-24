const express = require('express');
const app = express();
const port = 3000;

// Middleware para verificar el tiempo de conexión
app.use((req, res, next) => {
  console.log(`Tiempo de conexión: ${new Date()}`);
  next();
});

// Ruta para la página de inicio
app.get('/', (req, res) => {
  res.sendFile(__dirname + 'express.html');
});

// Ruta para el formulario de contacto
app.get('express formulario.html', (req, res) => {
  res.sendFile(__dirname + 'express.html');
});

// Controlador para el formulario de contacto
app.post('express formulario.html', (req, res) => {
  console.log(req.body);
  res.send('Gracias por enviar el formulario!');
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});