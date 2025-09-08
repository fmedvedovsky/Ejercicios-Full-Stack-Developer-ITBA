**Ejercicio 1: Catálogo de Productos Dinámico**

Tiempo de resolución estimado: 35 minutos

Objetivo: Practicar la manipulación del DOM para renderizar una lista de productos a partir de un array de objetos.

**Tareas:**

- En tu archivo app.js, crea un array llamado catalogoMuebles. Este array debe contener al menos 3 objetos. Cada objeto representará un producto y debe tener las propiedades: id, nombre, precio y imagenURL (puedes usar URLs de imágenes de placeholder como https://via.placeholder.com/150).
- En tu index.html, crea un `<div>` vacío con un `id="product-container"`.
- En app.js, selecciona ese contenedor.
- Usa el método .forEach() para iterar sobre tu array catalogoMuebles.
- Dentro del bucle, por cada objeto de producto:
  - Crea un nuevo `<div>` con `document.createElement('div')` y asígnale una clase (ej: `product-card`).
  - Crea un `<h3>` para el nombre del producto.
  - Crea un `<p>` para el precio.
  - Crea un `<img>` y establece su atributo src con la imagenURL del producto.
  - Usa appendChild() para añadir el `<h3>`, `<p>` e `<img>` al div de la tarjeta.
  - Finalmente, añade la tarjeta completa al `product-container`.

**Ejercicio 2: Botón de "Añadir a Favoritos"**

Tiempo de resolución estimado: 25 minutos

Objetivo: Practicar el manejo de eventos (addEventListener) y la manipulación de clases y texto en el DOM.

**Tareas:**

- En tu HTML, crea un botón con el texto `"❤️ Añadir a Favoritos"`.
- En tu app.js, selecciona ese botón usando querySelector.
- Añade un "escuchador de eventos" (addEventListener) para el evento 'click'.
- La función que se ejecute al hacer clic debe hacer dos cosas:
  - Usar `button.classList.toggle('favorito')` para añadir o quitar una clase CSS llamada favorito.
  - Usar una estructura if/else para cambiar el texto del botón. Si el botón tiene la clase favorito, su texto debe ser `"⭐ Quitar de Favoritos"`. Si no la tiene, debe volver a ser `"❤️ Añadir a Favoritos"`.
  - (Opcional) En un archivo CSS, define un estilo para la clase `.favorito` (ej: un background-color diferente) para ver el efecto visual.

**Ejercicio 3: Guardar y Cargar Preferencias con JSON**

Tiempo de resolución estimado: 30 minutos

Objetivo: Practicar el uso de JSON.stringify() y JSON.parse() para guardar y recuperar datos complejos en el localStorage del navegador.

**Tareas:**

- En app.js, crea un objeto llamado preferenciasUsuario con algunas claves (ej: tema: 'oscuro', idioma: 'es', notificaciones: true).
- En tu HTML, crea dos botones: uno con `id="btn-guardar"` y otro con `id="btn-cargar"`.
- Añade un addEventListener al botón "guardar":
  - Al hacer clic, debe convertir el objeto preferenciasUsuario a un string JSON usando `JSON.stringify()`.
  - Luego, debe guardar ese string en localStorage con la clave 'misPreferencias'.
  - Muestra un alert que diga "Preferencias guardadas".
- Añade un addEventListener al botón "cargar":
  - Al hacer clic, debe obtener el string JSON de localStorage.
  - Usa JSON.parse() para convertir ese string de vuelta a un objeto JavaScript.
  - Muestra el objeto recuperado en un console.log() para verificar que funciona.

**Ejercicio 4: Buscador de Usuarios de una API**

Tiempo de resolución estimado: 45 minutos

Objetivo: Practicar el uso de fetch con async/await para consumir una API externa y mostrar los datos en el DOM.

**Tareas:**

- En tu HTML, crea un formulario simple con un `<input type="text">` (para el nombre de usuario) y un `<button type="submit">`.
- En app.js, añade un addEventListener al evento submit del formulario. Recuerda usar `event.preventDefault()`.
- Dentro del manejador del evento, crea una función async llamada buscarUsuario.
- Esta función debe tomar el nombre de usuario del input y hacer una petición fetch a la API pública de JSONPlaceholder: https://jsonplaceholder.typicode.com/users?username=[nombre_de_usuario].
- Usa await para esperar la respuesta y await response.json() para obtener los datos.
- **Importante:** Envuelve tu lógica de fetch en un bloque try...catch para manejar errores.
- Si la petición es exitosa y el array de resultados no está vacío, usa manipulación del DOM para mostrar el nombre (data[0].name), el email (data[0].email) y la ciudad (data[0].address.city) en tu página.
- Si el array está vacío o hay un error, muestra un mensaje de "Usuario no encontrado".

**Ejercicio 5: Galería de Fotos Asíncrona con Eventos**

Tiempo de resolución estimado: 50 minutos

Objetivo: Integrar todos los conceptos: fetch para obtener un array de objetos, .forEach() para iterar, y addEventListener para añadir interactividad a elementos creados dinámicamente.

**Tareas:**

- Crea una función async que se ejecute cuando se cargue la página.
- Dentro de ella, usa fetch para obtener una lista de 12 fotos de la API https://jsonplaceholder.typicode.com/photos?_limit=12.
- Selecciona un `<div>` vacío de tu HTML que servirá como contenedor para la galería.
- Usa .forEach() para iterar sobre el array de fotos que recibiste.
- Por cada foto, crea dinámicamente un elemento `<img>` en JavaScript.
- Establece el src del img con la propiedad thumbnailUrl del objeto de la foto.
- Establece el alt del img con la propiedad title.
- **El reto:** Añade un addEventListener de tipo 'click' a cada imagen que creas. Al hacer clic en una imagen específica, se debe mostrar un alert con el title de esa foto.
- Finalmente, usa appendChild() para añadir cada imagen al contenedor de la galería.
