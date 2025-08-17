let totalCompra = 0;
let deseaSeguirComprando = true;

let valorProducto = 0;

deseaSeguirComprando = confirm("¿Desea agregar un producto al carrito?");
while (deseaSeguirComprando) {
  valorProducto = parseFloat(prompt("Ingrese el valor del producto:"));

  if (valorProducto > 0) {
    totalCompra += valorProducto;
  }
  deseaSeguirComprando = confirm("¿Desea agregar un producto al carrito?");
}

alert("El total de su compra es: $" + totalCompra);
