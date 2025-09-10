**Ejercicio 1: Mi Primer Servidor Express**

Tiempo de resolución estimado: 15 minutos

Objetivo: Practicar la configuración inicial y más fundamental de un servidor Express, creando una ruta simple.

**Tareas:**

- Creá una nueva carpeta para tu proyecto (ej: servidor-basico).
- Dentro de la carpeta, abre una terminal e inicializa un proyecto de Node.js con `npm init -y`.
- Instalá Express como una dependencia: `npm install express`.
- Creá un archivo server.js.
- Dentro de server.js, escribe el código necesario para:

  - Importar express.
  - Crear una instancia de la aplicación Express.
  - Definir un puerto (ej: 3000).
  - Crear una única ruta para el método GET en la raíz (/) que responda con el texto: "¡Bienvenido al servidor de Mueblería Jota!".
  - Iniciar el servidor para que escuche en el puerto definido.

- Ejecuta el servidor con node server.js y verifica que puedes ver el mensaje en tu navegador al visitar http://localhost:3000.

**Ejercicio 2: Middleware Logger de Peticiones**

Tiempo de resolución estimado: 20 minutos

Objetivo: Aprender a crear y aplicar un **middleware personalizado** de forma global para registrar información de cada petición.

**Tareas:**

- Usando el proyecto del ejercicio anterior, crea una función middleware llamada logger.
- Esta función debe tener los tres parámetros: req, res, next.
- Dentro de la función, debe imprimir en la consola un mensaje formateado que incluya el método HTTP de la petición (req.method), la URL solicitada (req.originalUrl) y la fecha y hora actual. Ejemplo: [GET] /productos - 20/10/2025, 10:30:15 AM.
- **Importante:** Al final de la función, asegúrate de llamar a next() para que la petición pueda continuar.
- Usá app.use() para aplicar este middleware a **todas** las peticiones que lleguen a tu servidor. (Recuerda colocar app.use(logger) antes de tus definiciones de rutas).
- Reiniciá tu servidor y haz varias peticiones en el navegador a diferentes rutas (aunque no existan) para ver los logs en tu terminal.

**Ejercicio 3: Organizando las Rutas de Productos**

Tiempo de resolución estimado: 30 minutos

Objetivo: Practicar la modularización del código usando express.Router para mantener la aplicación organizada.

**Tareas:**

- En la carpeta de tu proyecto, crea una nueva carpeta llamada routes.
- Dentro de routes, crea un archivo productosRoutes.js.
- En productosRoutes.js, importá express y creá una instancia de Router.
- Definí dos rutas en este router:

  - Una ruta GET para la raíz (/) que devuelva un array de 2 o 3 objetos de producto de ejemplo en formato JSON.
  - Una ruta GET dinámica para /:id que devuelva un mensaje en JSON como { "mensaje": "Obteniendo información del producto con ID: [id]" }. (Usa req.params.id para obtener el ID).

- Exportá el router usando module.exports.
- En tu archivo principal server.js, importá el router de productos y "móntalo" en la ruta principal /api/productos usando app.use().
- Probá que las siguientes URLs funcionen: http://localhost:3000/api/productos y http://localhost:3000/api/productos/123.

**Ejercicio 4: Creando un Nuevo Producto (POST)**

Tiempo de resolución estimado: 25 minutos

Objetivo: Aprender a manejar peticiones POST y a procesar datos JSON enviados en el cuerpo de la petición.

**Tareas:**

- En tu archivo server.js, asegúrate de tener el middleware app.use(express.json()); antes de montar tus rutas. Sin esto, req.body no funcionará.
- En tu archivo routes/productosRoutes.js, añade una nueva ruta para manejar peticiones POST a la raíz (/).
- El manejador de esta ruta debe:

  - Extraer el nuevo producto del cuerpo de la petición (req.body).
  - Imprimir en la consola el producto recibido para verificar que llegó correctamente.
  - Enviar una respuesta al cliente con un código de estado 201 (Created) y un mensaje JSON de éxito, como { "status": "éxito", "producto_recibido": ... }.

- Usá una herramienta como **Postman** o la extensión **Thunder Client** en VS Code para probar este endpoint. Envía una petición POST a http://localhost:3000/api/productos con un objeto JSON en el cuerpo.

**Ejercicio 5: Manejador de Errores Centralizado**

Tiempo de resolución estimado: 40 minutos

Objetivo: Integrar una estrategia profesional de manejo de errores para hacer la API más robusta.

**Tareas:**

- En tu archivo principal server.js, al final de todo (después de todas tus rutas y otros app.use), añade un **middleware de manejo de errores** con la firma (err, req, res, next).
- Este middleware debe enviar una respuesta JSON con el código de estado del error (o 500 si no se especifica) y el mensaje del error.
- Justo antes de este manejador de errores, añade un middleware "atrapa-todo" para las rutas no encontradas (404). Este middleware simplemente debe crear un nuevo Error con un mensaje de "Ruta no encontrada" y pasárselo a next().
- Modificá tu ruta GET /:id en productosRoutes.js. En lugar de enviar una respuesta 404 directamente, si no encuentras el producto:

  - Creá un nuevo objeto Error con el mensaje "Producto no encontrado".
  - Asignale un estado: error.status = 404;.
  - Pasalo a next() con return next(error);.

- Probá tu sistema:

  - Visitá una ruta que no exista (ej: /api/clientes). Deberías ver tu respuesta de error 404 en formato JSON.
  - Pedí un producto con un ID que no exista (ej: /api/productos/999). Deberías ver tu respuesta de error 404 personalizada en formato JSON.
