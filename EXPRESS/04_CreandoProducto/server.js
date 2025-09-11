const express = require("express");
const logger = require("./logger.js");

const productRoutes = require("./routes/productosRoutes.js");

const app = express();

const PORT = 3002;

app.use(logger.log);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("¡Bienvenido al servidor de Mueblería Jota!");
});

app.use("/api/productos", productRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo exitosamente en http://localhost:${PORT}`);
});
