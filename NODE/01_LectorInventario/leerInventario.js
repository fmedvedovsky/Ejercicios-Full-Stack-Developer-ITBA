const fs = require("fs");

fs.readFile("./inventario.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error al leer:", err);
    return;
  }
  console.log("Contenido del archivo:\n" + data);
});
