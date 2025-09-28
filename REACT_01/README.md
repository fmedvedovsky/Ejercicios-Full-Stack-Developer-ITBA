**Ejercicio 1: "Mi Primera App" - Configuración y Limpieza**
Tiempo de resolución estimado: 20 minutos

Objetivo: Practicar la creación de un proyecto desde cero y familiarizarse con la estructura de archivos, modificando el componente principal.

**Tareas:**

- Abre tu terminal en la carpeta donde guardas tus proyectos.
- Crea una nueva aplicación de React llamada mi-primera-app usando el comando npx create-react-app mi-primera-app.
- Una vez que termine la instalación, entra en la carpeta del proyecto (cd mi-primera-app) y arráncalo con npm start. Deberías ver la página de bienvenida de React en tu navegador.
- Abre el proyecto en tu editor de código y ve al archivo src/App.js.
- _Limpia el componente:_ Borra todo el contenido dentro del `<div>` con `className="App"`.
- Dentro de ese div, añade tu propio JSX:
  - Un `<h1>` que diga "Mi Primera App en React".
  - Un `<p>` que contenga tu nombre.
- Guarda el archivo y comprueba que el navegador se actualiza mostrando tu nuevo contenido.

**Ejercicio 2: "Tarjeta de Presentación" - Creación de Componentes**
Tiempo de resolución estimado: 15 minutos

Objetivo: Practicar la creación de un componente funcional en un archivo separado y su posterior renderizado.

**Tareas:**

- Dentro de la carpeta src de tu proyecto, crea un nuevo archivo llamado `TarjetaPresentacion.js`.
- Dentro de este nuevo archivo, crea un componente funcional llamado `TarjetaPresentacion`.
- Este componente debe devolver un div que contenga:
  - Un `<h2>` con un nombre ficticio (ej: "Ada Lovelace").
  - Un `<p>` con una profesión (ej: "Programadora y Matemática").
  - Otro `<p>` con un dato curioso (ej: "Considerada la primera programadora de la historia").
- No olvides exportar tu componente con `export default TarjetaPresentacion;`.
- Vuelve a `App.js`, importa tu nuevo componente (`import TarjetaPresentacion from './TarjetaPresentacion';`).
- Usa tu componente `<TarjetaPresentacion />` dentro del JSX de App.js. Para probar su reutilización, ¡ponlo dos o tres veces seguidas!

**Ejercicio 3: "Info de Producto" - JSX y Expresiones**
Tiempo de resolución estimado: 20 minutos

Objetivo: Practicar el uso de variables de JavaScript y atributos dentro de JSX para mostrar información dinámica.

**Tareas:**

- Crea un nuevo componente llamado `Producto.js`.
- Dentro de la función del componente `Producto`, define algunas variables de JavaScript:

```js
const nombreProducto = "Teclado Mecánico RGB";
const descripcion = "Un teclado increíble para gaming y programación.";
const precio = 125;
```

- El JSX que devuelva el componente debe mostrar esta información usando llaves {}:
  - Un `<h3>` para nombreProducto.
  - Un `<p>` para descripcion.
  - Un `<h4>` que muestre el precio, por ejemplo: `Precio: ${precio} USD`.
- Al div principal del componente, asígnale un `className="product-card"`.
- En `App.js`, importa y renderiza el componente `<Producto />`.

**Ejercicio 4: "Bio de Usuario" - Atributos Dinámicos y Estilos**
Tiempo de resolución estimado: 25 minutos

Objetivo: Practicar el uso de atributos dinámicos como src y el atributo style para aplicar estilos en línea.

**Tareas:**

- Crea un componente `Bio.js`.
- Dentro del componente, crea un objeto usuario: JavaScript

```js
const usuario = {
  nombre: "Clark Kent",
  avatarURL: "https://via.placeholder.com/150", // URL de una imagen de prueba
  trabajo: "Reportero en el Daily Planet",
};
```

- El componente debe renderizar:
  - Una etiqueta `<img>` cuyo atributo src sea usuario.avatarURL y su atributo alt sea "Avatar".
  - Un `<h1>` que muestre el usuario.nombre.
  - Un `<p>` que muestre el usuario.trabajo.
- Crea un objeto de estilo para la tarjeta:

```js
const cardStyles = {
  border: "2px solid #eee",
  borderRadius: "10px",
  padding: "15px",
  textAlign: "center",
  width: "300px",
};
```

- Aplica este objeto de estilos al div principal de tu componente usando el atributo style.
- Importa y renderiza `<Bio />` en `App.js`.

**Ejercicio 5: "Armando Mi Página" - Composición**
Tiempo de resolución estimado: 20 minutos

Objetivo: Entender cómo se arma una aplicación completa componiendo múltiples componentes simples.

**Tareas:**

- Crea tres componentes en archivos separados: `Header.js`, `MainContent.js` y `Footer.js`.
- **Header.js**: Debe devolver una etiqueta `<header>` con un `<h1>` que diga "Mi Página Personal".
- **MainContent.js:** Debe devolver una etiqueta `<main>` con un `<p>` que contenga un párrafo de texto (puedes usar "Lorem Ipsum").
- **Footer.js**: Debe devolver una etiqueta `<footer>` con un `<p>` que diga "© 2025. Creado con React."
- Ahora, ve a `App.js` y borra todo lo que habías puesto de los ejercicios anteriores.
- Importa tus tres nuevos componentes (Header, MainContent, Footer).
- Dentro del return de App, renderiza los tres componentes en orden para formar la estructura de una página web.

```js
function App() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}
```
