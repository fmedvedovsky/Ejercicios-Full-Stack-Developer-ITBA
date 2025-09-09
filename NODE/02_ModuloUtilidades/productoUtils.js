module.exports = {
  estaDisponible,
  obtenerInfo,
};

function estaDisponible(producto) {
  if (producto.stock > 0) {
    return true;
  }

  return false;
}

function obtenerInfo(producto) {
  let infoProd = "Nombre producto: " + producto.nombre;
  infoProd += "\n";
  infoProd += "Stock producto: " + producto.stock;
  return infoProd;
}
