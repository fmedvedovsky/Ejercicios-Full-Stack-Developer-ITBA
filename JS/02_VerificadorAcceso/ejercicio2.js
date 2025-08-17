const contrasenaCorrecta = "hola123";

const contrasena = prompt("Ingrese su contraseña:");

if (contrasena === contrasenaCorrecta) {
  alert("¡Acceso concedido!");
} else if (contrasena === "") {
  alert("No se ingresó ninguna contraseña.");
} else {
  alert("Contraseña incorrecta. Acceso denegado.");
}
