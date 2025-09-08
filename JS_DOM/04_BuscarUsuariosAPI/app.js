const form = document.getElementById("formulario");

async function buscarUsuario(event) {
  event.preventDefault();
  const nombre = form.nombreABuscar.value;
  const url = "https://jsonplaceholder.typicode.com/users?username=";

  try {
    const respuesta = await fetch(url + nombre);
    const datosUsuario = await respuesta.json();

    const outputPara = document.createElement("p");
    if (datosUsuario) {
      outputPara.textContent = `Nombre usuario: ${datosUsuario[0].name} 
        Correo: ${datosUsuario[0].email}
        Ciudad: ${datosUsuario[0].address.city}`;
    } else {
      outputPara.textContent = "Usuario no encontrado.";
    }
    document.body.appendChild(outputPara);
  } catch (error) {
    const outputPara = document.createElement("p");
    outputPara.textContent = "Usuario no encontrado";
    document.body.appendChild(outputPara);
  }
}

document.addEventListener("submit", buscarUsuario);
