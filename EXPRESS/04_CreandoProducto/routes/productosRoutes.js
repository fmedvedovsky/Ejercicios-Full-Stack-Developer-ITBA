const express = require("express");
const router = express.Router();

const products = [
  {
    id: 1,
    nombre: "Silla de roble",
    precio: 1000,
  },
  {
    id: 2,
    nombre: "Mesa de roble",
    precio: 2000,
  },
  {
    id: 3,
    nombre: "Ropero de abedul",
    precio: 3500,
  },
];

router.get("/", (req, res) => {
  res.json(products);
});

router.get("/:id", (req, res) => {
  const product = products.find((prod) => prod.id === parseInt(req.params.id));
  if (!product) {
    return res.status(404).json({ message: "Producto no encontrado" });
  }
  res.json({
    mensaje: "Obteniendo información del producto con ID:" + product.id,
    producto: product,
  });
});

router.post("/", (req, res) => {
  const producto = req.body;
  console.log(producto);
  products.push(producto);
  res.status(201).json({
    status: "Éxito",
    message: "Producto creado",
    producto_creado: producto,
  });
});

module.exports = router;
