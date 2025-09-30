function Producto({ imageUrl, nombre, precio }) {
  return (
    <div>
      <img src={imageUrl} alt="blabla"></img>
      <h3>Nombre: {nombre}</h3>
      <p>Precio: ${precio}</p>
    </div>
  );
}

export default Producto;
