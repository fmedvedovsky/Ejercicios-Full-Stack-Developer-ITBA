import { useState } from "react";

const productosDisponible = [
  {
    id: 1,
    nombre: "silla",
    precio: 500,
  },
  {
    id: 2,
    nombre: "mesa",
    precio: 1000,
  },
  {
    id: 3,
    nombre: "ropero",
    precio: 1500,
  },
  {
    id: 4,
    nombre: "escritorio",
    precio: 750,
  },
];

function Tienda() {
  const [carrito, setCarrito] = useState([]);

  function agregarAlCarrito(producto) {
    console.log(producto);
    let nuevoCarrito = Array.from(carrito);
    nuevoCarrito.push(producto);
    setCarrito(nuevoCarrito);
  }

  function mostrarProductosDisponibles() {
    return productosDisponible.map((producto) => {
      return (
        <>
          <h2>{producto.nombre}</h2>
          <p>${producto.precio}</p>
          <button onClick={() => agregarAlCarrito(producto)}>
            Agregar al Carrito
          </button>
        </>
      );
    });
  }

  function mostrarProductosDelCarrito() {
    return carrito.map((producto) => {
      return (
        <>
          <p>
            Nombre: {producto.nombre}. Precio: ${producto.precio}
          </p>
        </>
      );
    });
  }

  function getTotalCarrito() {
    let total = 0;
    carrito.forEach((producto) => {
      total += producto.precio;
    });

    return total;
  }

  return (
    <>
      <h1>Productos:</h1>
      {mostrarProductosDisponibles()}

      <h1>Carrito:</h1>
      {carrito.length === 0
        ? "El carrito está vacío"
        : mostrarProductosDelCarrito()}

      <h1>Total Carrito: {getTotalCarrito()}</h1>
    </>
  );
}

export default Tienda;
