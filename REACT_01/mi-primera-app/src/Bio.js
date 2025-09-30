const usuario = {
  nombre: "Clark Kent",
  avatarURL: "https://via.placeholder.com/150", // URL de una imagen de prueba
  trabajo: "Reportero en el Daily Planet",
};

const cardStyles = {
  border: "2px solid #eee",
  borderRadius: "10px",
  padding: "15px",
  textAlign: "center",
  width: "300px",
};

function Bio() {
  return (
    <div style={cardStyles}>
      <img src={usuario.avatarURL} alt="Avatar"></img>
      <h1>{usuario.nombre}</h1>
      <p>{usuario.trabajo}</p>
    </div>
  );
}

export default Bio;
