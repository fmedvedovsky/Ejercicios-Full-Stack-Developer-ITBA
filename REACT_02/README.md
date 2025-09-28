**Ejercicio 1: Tarjeta de Producto Configurable**
Tiempo de resolución estimado: 20 minutos

Objetivo: Practicar la creación de componentes y el uso de props para hacerlos dinámicos y reutilizables.

**Tareas:**

- Crea un nuevo componente en un archivo llamado `Producto.js`.
- Este componente debe renderizar la tarjeta de un producto con un div principal, una imagen, un nombre (h3) y un precio (p).
- En lugar de escribir los datos directamente en el componente, haz que los acepte como **props**: imageUrl, nombre, y precio.
- En `App.js`, importa el componente `Producto`.
- Renderiza al menos **tres** componentes `<Producto />`, pasándole datos diferentes a cada uno a través de sus props para mostrar tres productos distintos.

**Ejercicio 2: El Contador de Clics**
Tiempo de resolución estimado: 15 minutos

Objetivo: Entender el concepto fundamental de estado con el hook useState y manejar la interacción del usuario con onClick.

**Tareas:**

- Crea un componente llamado `Contador.js`.
- Dentro del componente, utiliza el hook `useState` para crear una variable de estado llamada clics, inicializada en 0.
- El componente debe mostrar un título (h1) que diga "Contador de Clics" y un número grande (h2) que muestre el valor actual de clics.
- Añade un botón con el texto "Haz Clic Aquí".
- Cuando el usuario haga clic en el botón, el valor de clics debe aumentar en 1.

**Ejercicio 3: Acordeón de Preguntas Frecuentes (FAQ)**
Tiempo de resolución estimado: 25 minutos

Objetivo: Practicar el renderizado condicional para mostrar u ocultar información basándose en el estado.

**Tareas:**

- Crea un componente `Pregunta.js`.
- Usa `useState` para crear una variable de estado booleana llamada respuestaVisible, inicializada en false.
- El componente debe mostrar siempre una pregunta (un h3).
- Añade un botón que diga "Mostrar Respuesta" o "Ocultar Respuesta" dependiendo del estado de respuestaVisible.
- Debajo de la pregunta, usa un operador ternario o el operador && para renderizar un párrafo con la respuesta solo si respuestaVisible es true.
- Al hacer clic en el botón, el estado debe cambiar, mostrando u ocultando la respuesta.

**Ejercicio 4: Galería de Personajes**
Tiempo de resolución estimado: 30 minutos

Objetivo: Practicar cómo renderizar una lista de elementos desde un array de datos, utilizando .map() y asignando la prop key correctamente.

**Tareas:**

- En tu componente `App.js` (o en un nuevo componente `Galeria.js`), crea un array de objetos. Cada objeto representará un personaje y debe tener al menos tres propiedades: id (un número o string único), nombre y rol (ej: "Mago", "Guerrero").
- Crea un componente simple llamado `PersonajeCard.js` que acepte nombre y rol como props y los muestre.
- En el componente `Galeria.js`, utiliza el método .map() sobre tu array de personajes.
- Dentro del .map(), por cada personaje en el array, renderiza un componente `<PersonajeCard />`, pasándole los datos correspondientes como props.
- **Muy importante:** Asegúrate de que cada `<PersonajeCard />` en la lista tenga una prop key única, utilizando el id del personaje.

**Ejercicio 5: Carrito de Compras Básico**
Tiempo de resolución estimado: 40 minutos

Objetivo: Integrar todos los conceptos aprendidos: componentes, props, estado, eventos, renderizado condicional y listas.

**Tareas:**

- Crea un componente `Tienda.js`.
- Define un array de productos disponibles (con id, nombre y precio).
- Utiliza `useState` para crear un estado llamado carrito, inicializado como un array vacío [].
- Muestra la lista de productos disponibles usando .map(). Cada producto en la lista debe tener un botón de "Agregar al Carrito".
- Al hacer clic en el botón "Agregar", el producto correspondiente debe añadirse al array carrito en el estado.
- En otra sección de la pantalla, muestra los productos que están en el carrito.
- Usa **renderizado condicional** para mostrar un mensaje como "El carrito está vacío" si el array carrito no tiene elementos.
- (Opcional Avanzado): Muestra el precio total de los artículos en el carrito.
