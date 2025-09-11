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

app.use((req, res, next) => {
  const error = new Error(`Ruta no encontrada: ${req.originalUrl}`);
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  const statusCode = err.status || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({
    message: err.message || "Ha ocurrido un error en el servidor.",
    stack: err.stack,
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo exitosamente en http://localhost:${PORT}`);
});
