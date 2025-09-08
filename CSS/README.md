**Ejercicio 1: Estilizando una Biografía**

Tiempo de resolución estimado: 25 minutos

Objetivo: Practicar el uso de selectores básicos (tipo, clase, ID) y las propiedades fundamentales de texto.

**Tareas:**

- Creá un archivo biografia.html y un estilos.css enlazado a él.
- En el HTML, crea una página simple sobre tu personaje histórico o artista favorito. Debe incluir un `<h1>` para el nombre, un `<h2>` para "Biografía", varios párrafos `<p>` y otro `<h2>` para "Obras Notables" con una lista `<ul>`.

- En tu CSS: Usa un selector de tipo para que todos los párrafos (p) tengan una font-family y font-size específicas.
- Dale al `<h1>` un id único (ej: `id="titulo-principal"`) y usá un selector de ID para centrar el texto (`text-align: center`) y darle un color único.
- Dale a los `<h2>` una misma class (ej: `class="subtitulo"`) y usá un selector de clase para cambiarles el color y añadirles un `font-weight: bold;`.
- Usá un selector descendente (`ul a`) para quitarle el subrayado a cualquier enlace que esté dentro de una lista (`text-decoration: none;`).

**Ejercicio 2: Creando una Tarjeta de Presentación**

Tiempo de resolución estimado: 20 minutos

Objetivo: Enfocarse y dominar el Modelo de Cajas (padding, border, margin).

**Tareas:**

- Creá un `<div>` principal en tu HTML con la clase `tarjeta-presentacion`.
- Dentro de la tarjeta, añade un `<h2>` con un nombre, un `<p>` con un cargo y otro `<p>` con un email.

- En tu CSS: Seleccioná la clase `.tarjeta-presentacion`.
- Dale un width fijo de 350px.
- Añadí un padding de 25px para que el contenido no esté pegado a los bordes.
- Creá un border sutil, por ejemplo: `1px solid #cccccc;`.
- Añadí una sombra suave para que parezca que "flota" con la propiedad `box-shadow: 5px 5px 10px #e0e0e0;`.
- Finalmente, usa `margin: 40px auto;` para centrar la tarjeta horizontalmente en la página y darle un espacio superior.

**Ejercicio 3: Maquetando una Galería de Imágenes Fluida**

Tiempo de resolución estimado: 30 minutos

Objetivo: Practicar el uso de display: flex para crear un layout básico y el uso de porcentajes para un diseño fluido.

**Tareas:**

- En tu HTML, crea un `<div>` contenedor con la clase `galeria`. Dentro, coloca tres de las "tarjetas" del ejercicio anterior (puedes usar un `<div>` con la clase `tarjeta-foto` para cada una). Cada tarjeta debe contener una imagen `<img>` y un pie de foto `<p>`.

- En tu CSS: Aplica la regla universal de `box-sizing: border-box;` al inicio de tu archivo.
- Seleccioná `.galeria` y aplícale `display: flex;` para que sus hijos (las tarjetas) se pongan uno al lado del otro. Usa `gap: 20px;` para crear un espacio entre ellas.
- Seleccioná `.tarjeta-foto` y dale un width en porcentaje (ej: `30%`) para que el layout sea fluido.
- Añadí una regla para que las imágenes (img) dentro de las tarjetas nunca se desborden: `width: 100%; height: auto;`.

**Ejercicio 4: Adaptando la Galería (Diseño Responsivo)**

Tiempo de resolución estimado: 35 minutos

Objetivo: Implementar Media Queries para que el diseño del ejercicio anterior se adapte a pantallas de móvil.

**Tareas:**

- Asegurate de tener la meta etiqueta viewport en tu HTML.
- Adoptá un enfoque Mobile-First. En tus estilos base (fuera de cualquier media query), haz que `.galeria` se apile verticalmente: `flex-direction: column;`. Las tarjetas (`tarjeta-foto`) deberían ocupar casi todo el ancho, por ejemplo `width: 95%;`.
- Ahora, añadí una Media Query al final de tu archivo CSS: `@media (min-width: 768px) { ... }`. Este será nuestro "breakpoint" para tablets y escritorios.
- Dentro de la media query, sobreescribe los estilos para pantallas grandes:
  - Cambiá `.galeria` para que vuelva a ser horizontal: `flex-direction: row;`.
  - Ajustá el ancho de `.tarjeta-foto` a un porcentaje más pequeño para que quepan varias en una fila, por ejemplo `width: 31%;`.
  - Abrí la página en tu navegador y cambia el tamaño de la ventana. ¡Observa cómo el layout cambia de una columna a varias!

**Ejercicio 5: Creando un "Hero Banner" de Pantalla Completa**

Tiempo de resolución estimado: 40 minutos

Objetivo: Combinar todos los conceptos, incluyendo unidades de viewport (vh) y display: flex para centrado vertical y horizontal.

**Tareas:**

- Creá una sección `<header>` con la clase `hero-banner`. Dentro, coloca un `<h1>` y un `<p>` con un llamado a la acción.
- En tu CSS: Usa el reseteo universal `* { margin: 0; padding: 0; box-sizing: border-box; }`.
- Seleccioná `.hero-banner` y haz que ocupe el 100% de la altura de la ventana del navegador con `height: 100vh;`.
- Dale un color de fondo o una imagen de fondo.
- Para centrar el texto perfectamente, usa la "magia" de Flexbox: CSS

```css
.hero-banner {
  /* ... otros estilos ... */
  display: flex;
  flex-direction: column;
  justify-content: center; /* Centra verticalmente */
  align-items: center; /* Centra horizontalmente */
}
```

- Estilizá el `<h1>` y el `<p>` dentro del banner (color, tamaño de fuente, etc.). Usa una media query para reducir el `font-size` del `<h1>` en pantallas pequeñas y que no se vea desproporcionado.
