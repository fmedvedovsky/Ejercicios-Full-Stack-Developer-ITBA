import PersonajeCard from "./PersonajeCard";

const personajes = [
  {
    id: 0,
    nombre: "Fldsmdfr III",
    rol: "Guerrero",
  },
  {
    id: 1,
    nombre: "Lorem Ipsum",
    rol: "Mago",
  },
  {
    id: 2,
    nombre: "Vayne",
    rol: "Tirador",
  },
  {
    id: 3,
    nombre: "Lucian",
    rol: "Tirador",
  },
];

function Galeria() {
  return (
    <>
      {personajes.map((personaje) => {
        return <PersonajeCard nombre={personaje.nombre} rol={personaje.rol} />;
      })}
    </>
  );
}

export default Galeria;
