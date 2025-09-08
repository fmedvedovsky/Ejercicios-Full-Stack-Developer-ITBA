**Ejercicio 1: Lector de Inventario**

Tiempo de resolución estimado: 20 minutos

Objetivo: Practicar el uso del módulo nativo fs para leer un archivo de forma asíncrona.

**Tareas:**

- En una nueva carpeta de proyecto, crea un archivo llamado inventario.txt.
- Dentro de inventario.txt, escribe una lista simple de muebles, cada uno en una nueva línea. Por ejemplo:

```
Silla de Comedor - 15 unidades
Mesa de Roble - 5 unidades
Sofá de 3 Cuerpos - 0 unidades
```

- Crea un archivo JavaScript llamado leerInventario.js.
- Dentro de leerInventario.js, usa el módulo fs para leer el archivo inventario.txt de forma asíncrona (fs.readFile).
- Implementa la función de callback:
  - Si ocurre un error (ej: el archivo no existe), debe mostrar un mensaje de error en la consola.
  - Si la lectura es exitosa, debe imprimir en la consola el contenido completo del archivo.
- Ejecuta tu script desde la terminal con node leerInventario.js.

**Ejercicio 2: Módulo de Utilidades para Productos**

Tiempo de resolución estimado: 25 minutos

Objetivo: Practicar la creación y el uso de módulos personalizados para organizar el código.

**Tareas:**

- Crea un archivo llamado productoUtils.js. Este será tu módulo.
- Dentro de productoUtils.js, crea una función llamada estaDisponible(producto). Esta función recibirá un objeto de producto (ej: { nombre: 'Silla', stock: 5 }) y devolverá true si el stock es mayor a 0, y false en caso contrario.
- En el mismo archivo, crea otra función llamada obtenerInfo(producto) que devuelva un string formateado con la información del producto, por ejemplo: Producto: Silla de Pino - Stock: 10 unidades..
- Usa module.exports para exportar ambas funciones.
- Crea un archivo principal app.js.
- En app.js, **importa** tu módulo productoUtils.js usando require.
- Crea dos objetos de producto de prueba, uno con stock y otro sin stock.
- Llama a las funciones de tu módulo con los productos de prueba y muestra los resultados en la consola.

**Ejercicio 3: Registro de Eventos del Sistema**

Tiempo de resolución estimado: 30 minutos

Objetivo: Combinar el uso de módulos (fs y personalizados) para una tarea de escritura de archivos.

**Tareas:**

- Creá un módulo llamado logger.js.
- Dentro de logger.js, crea una función log(mensaje).
- Esta función debe tomar un mensaje (string), añadirle la fecha y hora actual al principio, y un salto de línea (\n) al final.
- Luego, debe usar fs.appendFile() para añadir esa línea al final de un archivo llamado sistema.log. appendFile es ideal porque no sobreescribe el contenido anterior.
- Exportá la función log.
- En tu archivo principal app.js, importa tu módulo logger.
- Llamá a la función log varias veces con diferentes mensajes, como: log('Se inició el proceso de inventario.'), log('Se detectó un producto sin stock.'), etc.
- Ejecutá el script node app.js varias veces. Verifica que el archivo sistema.log se cree y que cada ejecución añada nuevas líneas al final del archivo sin borrar las anteriores.

**Ejercicio 4: Inicialización del Proyecto Backend**

Tiempo de resolución estimado: 20 minutos

Objetivo: Practicar el flujo de trabajo de NPM para inicializar un proyecto e instalar un paquete externo.

**Tareas:**

- Creá una nueva carpeta vacía para el backend del proyecto "Mueblería Jota".
- Abre la terminal dentro de esa carpeta y ejecuta npm init -y para crear un archivo package.json por defecto.
- Elige un paquete simple de NPM para instalar. Uno excelente para este ejercicio es chalk, que permite dar color al texto de la consola. Instálalo como una dependencia de producción: npm install chalk.
- Verificá que tu package.json se haya actualizado con la nueva dependencia y que se haya creado la carpeta node_modules.
- Creá un archivo index.js.
- Dentro de index.js, importa chalk usando require.
- Usá chalk para imprimir mensajes de diferentes colores en la consola. Por ejemplo:

```
const chalk = require('chalk');
console.log(chalk.blue('¡Bienvenido a Mueblería Jota!'));
console.log(chalk.green.bold('Producto en oferta'));
console.log(chalk.red('Error: Stock no disponible'));
```

- Ejecutá el script con node index.js y observa la magia de los colores en tu terminal.

**Ejercicio 5: Mi Primer Servidor de "Mueblería Jota"**

Tiempo de resolución estimado: 35 minutos

Objetivo: Utilizar el módulo http para crear un servidor web básico y nodemon con un script de NPM para mejorar el flujo de desarrollo.

**Tareas:**

- Usando el proyecto del ejercicio anterior, instala nodemon como una dependencia de desarrollo: npm install nodemon -D.
- En tu package.json, modifica la sección de "scripts" para añadir un script "dev" que ejecute nodemon server.js.
- Creá un archivo server.js.
- Dentro de server.js, usa el módulo http para crear un servidor que escuche en el puerto 5000.
- Configurá el servidor para que responda a diferentes rutas (req.url):
  - Si la ruta es /, debe responder con un `<h1>Bienvenido al servidor de Mueblería Jota</h1>`.
  - Si la ruta es /productos, debe responder con un `<h2>Nuestro catálogo de productos</h2>`.
  - Si la ruta es /contacto, debe responder con un `<p>Contáctanos al 555-1234</p>`.
  - Para cualquier otra ruta, debe responder con un código de estado 404 y el mensaje "Página no encontrada".
- Ejecutá tu servidor usando el nuevo script: npm run dev.
- Abrí tu navegador y prueba las tres rutas (http://localhost:5000, http://localhost:5000/productos, etc.) para verificar que tu servidor responde correctamente.
- Mientras el servidor corre, haz un cambio en el archivo server.js y guárdalo. ¡Observa cómo nodemon reinicia el servidor por ti!
