**Ejercicio 1: Tu Página de Presentación Personal**

Tiempo de resolución estimado: 20 minutos

Objetivo: Practicar la estructura básica de un documento, el uso de títulos, párrafos, imágenes y enlaces.

**Tareas:**

- Creá un archivo llamado mi_perfil.html.
- Dale una estructura HTML completa (`<!DOCTYPE>`, `<html>`, `<head>`, `<body>`).
- En el `<head>`, pon un `<title>` que diga "Perfil de [Tu Nombre]".
- En el `<body>`, añade un título principal (`<h1>`) con tu nombre completo.
- Debajo del título, inserta una foto tuya (o una imagen de placeholder) usando la etiqueta `<img>`. No olvides el atributo alt con una descripción.
- Escribí una breve biografía de dos o tres párrafos usando la etiqueta `<p>`. En alguna parte de tu biografía, usa `<strong>` para resaltar tu principal habilidad o interés.
- Añadí un subtítulo (`<h2>`) que diga "Mis Proyectos".
- Creá una lista no ordenada (`<ul>`) donde cada ítem de la lista (`<li>`) sea un enlace (`<a>`) a un proyecto ficticio en GitHub. Por ejemplo: `<a href="#">Proyecto Tienda Online</a>`. Haz que estos enlaces se abran en una nueva pestaña.

**Ejercicio 2: La Receta de tu Comida Favorita**

Tiempo de resolución estimado: 25 minutos

Objetivo: Dominar el uso de listas ordenadas, no ordenadas y el formato de texto.

**Tareas:**

- Creá un archivo receta.html.
- El `<h1>` de la página será el nombre de tu comida favorita.
- Añadí una imagen (`<img>`) del platillo.
- Creá una sección con un `<h2>` que diga "Ingredientes".
- Debajo, usa una lista no ordenada (`<ul>`) para enumerar todos los ingredientes necesarios.
- Creá otra sección con un `<h2>` que diga "Instrucciones".
- Debajo, usa una lista ordenada (`<ol>`) para detallar, paso a paso, cómo se prepara la receta.
- Dentro de las instrucciones, usa la etiqueta `<em>` para dar énfasis a palabras clave como "con cuidado", "lentamente" o "hasta que dore".

**Ejercicio 3: Estructura Semántica de un Blog**

Tiempo de resolución estimado: 30 minutos

Objetivo: Practicar el uso correcto de las etiquetas semánticas de HTML5 para estructurar una página. No te preocupes por el estilo, solo por la estructura correcta.

**Tareas:**

- Creá un archivo blog.html.
- Usá la etiqueta `<header>` para la parte superior de la página. Dentro, coloca el `<h1>` del blog (ej: "Mi Blog de Aventuras") y una etiqueta `<nav>` con una lista de enlaces ("Inicio", "Acerca de", "Contacto").
- Usá la etiqueta `<main>` para envolver el contenido principal.
- Dentro de `<main>`, usá una etiqueta `<article>` para el post del blog. Este artículo debe tener su propio título (`<h2>`), varios párrafos (`<p>`) y una imagen.
- Dentro del article, creá dos sub-secciones temáticas usando `<section>`, cada una con su propio `<h3>` (ej: "El Viaje" y "La Comida").
- Al lado del `<article>` (pero todavía dentro de `<main>`), añade una barra lateral usando `<aside>`. Dentro, poné un `<h3>` que diga "Artículos Populares" y una lista de enlaces a otros posts.
- Finalmente, usá la etiqueta `<footer>` al final del `<body>` para la información de copyright.

**Ejercicio 4: Tabla Comparativa de Laptops**

Tiempo de resolución estimado: 25 minutos

Objetivo: Construir una tabla de datos bien estructurada, utilizando sus etiquetas semánticas y atributos para fusionar celdas.

**Tareas:**

- Creá un archivo comparativa.html.
- Insertá una `<table>` con un `<caption>` que diga "Comparativa de Laptops 2025".
- Usá `<thead>` para la fila de encabezado. La fila (`<tr>`) debe contener celdas de encabezado `<th>`) para "Modelo", "Procesador", "Memoria RAM" y "Almacenamiento". No olvides el atributo `scope="col"`.
- Usá `<tbody>` para añadir al menos tres laptops diferentes, cada una en su propia fila (`<tr>`) con sus datos en celdas `<td>`.
- Añadí una última fila que represente una "Oferta Especial". En esta fila, la primera celda (`<td>`) contendrá el texto de la oferta y deberá expandirse a lo ancho de 4 columnas usando el atributo colspan.

**Ejercicio 5: Formulario de Inscripción a un Evento**

Tiempo de resolución estimado: 35 minutos

Objetivo: Crear un formulario completo y accesible, utilizando una variedad de campos de entrada.

**Tareas:**

- Creá un archivo inscripcion.html.
- Envolvé todo en una etiqueta `<form>`.
- Creá los siguientes campos, asegurándote de que cada uno tenga una etiqueta `<label>` asociada correctamente con los atributos for e id:

  - Nombre Completo: Un `<input type="text">`.
  - Correo Electrónico: Un `<input type="email">`.
  - Crear Contraseña: Un `<input type="password">`.
  - Taller de Interés: Un menú desplegable (`<select>`) con al menos tres talleres como opciones (`<option>`).
  - Tipo de Asistencia: Usa dos `<input type="radio">` con el mismo name para las opciones "Presencial" y "Virtual".
  - Acepto los términos y condiciones: Un `<input type="checkbox">`.
  - Comentarios adicionales: Un `<textarea>` con 5 filas de alto.

- Añadí un botón de envío al final: `<button type="submit">Inscribirme</button>`.
