import { useState } from "react";
function Contador() {
  const [clics, setClics] = useState(0);

  function aumentarContador() {
    setClics(clics + 1);
  }

  return (
    <>
      <h1>Contador de Clics</h1>
      <h2>{clics}</h2>
      <button onClick={aumentarContador}>Haz Clic Aquí</button>
    </>
  );
}

export default Contador;
