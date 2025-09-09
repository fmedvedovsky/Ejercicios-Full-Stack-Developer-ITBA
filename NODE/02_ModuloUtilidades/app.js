const pU = require("./productoUtils.js");

const productoEnStock = {
  nombre: "Producto 1",
  stock: 5,
};

const productoSinStock = {
  nombre: "Producto 2",
  stock: 0,
};

console.log("Producto 1 tiene stock?", pU.estaDisponible(productoEnStock));
console.log("Producto 2 tiene stock?", pU.estaDisponible(productoSinStock));

console.log(pU.obtenerInfo(productoEnStock));
console.log(pU.obtenerInfo(productoSinStock));
