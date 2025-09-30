import { useState } from "react";

function Pregunta() {
  const [respuestaVisible, setRespuestaVisible] = useState(false);

  function toggleRespuestaVisible() {
    setRespuestaVisible(!respuestaVisible);
  }

  return (
    <>
      <h3>¿Lorem Ipsum?</h3>
      <button onClick={toggleRespuestaVisible}>
        {respuestaVisible ? "Ocultar Respuesta" : "Mostrar Respuesta"}
      </button>

      {respuestaVisible ? <p>Respuesta: lorem ipsum donorem</p> : null}
    </>
  );
}

export default Pregunta;
