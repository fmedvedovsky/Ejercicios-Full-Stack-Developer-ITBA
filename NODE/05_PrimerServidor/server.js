const http = require("http");

const PORT = 5000;

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
      res.end("<h1>Bienvenido al servidor de Mueblería Jota</h1>");
      break;
    case "/productos":
      res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
      res.end("<h2>Nuestro catálogo de productos</h2>");
      break;
    case "/contacto":
      res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
      res.end("<p>Contáctanos al 555-1234</p>");
      break;
    default:
      res.writeHead(404, { "Content-Type": "text/html; charset=UTF-8" });
      res.end("<h2>404 - Página No Encontrada</h2>");
      break;
  }
});

server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
