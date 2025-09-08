const preferenciasUsuario = {
  tema: "oscuro",
  idioma: "es",
  notificaciones: true,
};

const btnGuardar = document.getElementById("btn-guardar");
const btnCargar = document.getElementById("btn-cargar");

function handleBtnGuardar() {
  const preferenciasString = JSON.stringify(preferenciasUsuario);
  localStorage.setItem("misPreferencias", preferenciasString);
  alert("Preferencias guardadas.");
}

function handleBtnCargar() {
  const preferenciasString = localStorage.getItem("misPreferencias");
  const preferencias = JSON.parse(preferenciasString);
  console.log(preferencias);
}

btnGuardar.addEventListener("click", handleBtnGuardar);
btnCargar.addEventListener("click", handleBtnCargar);
