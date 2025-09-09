const fs = require("fs");

module.exports = {
  log,
};

function log(mensaje) {
  const currentDate = new Date();
  const fecha =
    currentDate.getDate() +
    "/" +
    currentDate.getMonth() +
    "/" +
    currentDate.getFullYear();

  const tiempo =
    currentDate.getHours() +
    ":" +
    currentDate.getMinutes() +
    ":" +
    currentDate.getSeconds() +
    ":" +
    currentDate.getMilliseconds();

  const mensajeFinal = fecha + " - " + tiempo + ": " + mensaje + "\n";
  fs.appendFile("./sistema.log", mensajeFinal, (error) => {
    if (error) {
      console.log("Error: " + error);
    }
  });
}
