const express = require("express");
const logger = require("./logger.js");

const app = express();

const PORT = 3002;

app.use(logger.log);

app.get("/", (req, res) => {
  res.send("¡Bienvenido al servidor de Mueblería Jota!");
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo exitosamente en http://localhost:${PORT}`);
});
