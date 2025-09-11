const express = require("express");

const app = express();

const PORT = 3002;

app.get("/", (req, res) => {
  res.send("¡Bienvenido al servidor de Mueblería Jota!");
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo exitosamente en http://localhost:${PORT}`);
});
