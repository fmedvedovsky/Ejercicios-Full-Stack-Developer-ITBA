function aplicarDescuento(precio, porcentajeDescuento) {
  let valorDescuento = precio * porcentajeDescuento;
  let precioFinal = precio - valorDescuento;

  return precioFinal;
}

let precioMesa = 20000;
let precioSofa = 80000;

let precioFinalMesa = aplicarDescuento(precioMesa, 0.1);
let precioFinalSofa = aplicarDescuento(precioSofa, 0.25);

console.log(
  "Precio original de la mesa: $" +
    precioMesa +
    ". Descuento: 10%. Precio final:" +
    precioFinalMesa
);
console.log(
  "Precio original de la mesa: $" +
    precioSofa +
    ". Descuento: 25%. Precio final:" +
    precioFinalSofa
);
