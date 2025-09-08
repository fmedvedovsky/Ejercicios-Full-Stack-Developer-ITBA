const catalogoMuebles = [
  {
    id: 1,
    nombre: "mesa",
    precio: 1000.0,
    imagenURL: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    nombre: "silla",
    precio: 750.0,
    imagenURL: "https://via.placeholder.com/152",
  },
  {
    id: 3,
    nombre: "ropero",
    precio: 3500.0,
    imagenURL: "https://via.placeholder.com/170",
  },
  {
    id: 4,
    nombre: "mueble de prueba",
    precio: 31500.0,
    imagenURL: "https://via.placeholder.com/175",
  },
];

const productContainer = document.getElementById("product-container");

catalogoMuebles.forEach((mueble) => {
  const divMueble = document.createElement("div");
  divMueble.className = "product-card";

  const nombreProducto = document.createElement("h3");
  nombreProducto.textContent = mueble.nombre;

  const precioProducto = document.createElement("p");
  precioProducto.textContent = mueble.precio;

  const imagenProducto = document.createElement("img");
  imagenProducto.setAttribute("src", mueble.imagenURL);

  divMueble.appendChild(nombreProducto);
  divMueble.appendChild(precioProducto);
  divMueble.appendChild(imagenProducto);

  productContainer.appendChild(divMueble);
});
