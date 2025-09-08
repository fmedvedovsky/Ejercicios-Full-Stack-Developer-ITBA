**Ejercicio 1: Calculadora de Precios para "Mueblería Hermanos Jota"**

Tiempo de resolución estimado: 15 minutos

Objetivo: Practicar el uso de variables (const, let), tipos de datos (Number, String), operadores aritméticos y el uso de console.log.

**Tareas:**

- Creá un nuevo archivo ejercicio1.js y enlázalo a un index.html.
- Dentro de ejercicio1.js, declara una constante precioBaseSilla y asígnale un valor numérico (ej: 4500.50).
- Declará una constante iva y asígnale el valor 0.21.
- Calculá el valor del IVA para la silla y guárdalo en una variable valorIva.
- Calculá el precio final de la silla (precio base + IVA) y guárdalo en una variable precioFinal.

```
Usando console.log(), muestra un resumen en la consola con un formato claro, por ejemplo:
Precio Base de la Silla: $4500.5
IVA: $945.105
Precio Final: $5445.605
```

**Ejercicio 2: Verificador de Acceso con Contraseña**

Tiempo de resolución estimado: 20 minutos

Objetivo: Practicar el uso de if/else if/else, prompt para recibir datos y el operador de comparación estricta (===).

**Tareas:**

- En un nuevo archivo ejercicio2.js, declara una constante contrasenaCorrecta y asígnale un valor de tipo string (ej: "Jota123").
- Usá la función prompt() para pedirle al usuario que ingrese su contraseña. Guarda el valor en una variable.
- Usá una estructura if/else if/else para verificar la contraseña ingresada:
  - **Si** la contraseña es estrictamente igual a contrasenaCorrecta, muestra un alert() con el mensaje "¡Acceso concedido!".
  - **Si no**, si el valor ingresado es una cadena vacía (""), muestra un alert() que diga "No se ingresó ninguna contraseña".
  - **Si no**, para cualquier otra contraseña incorrecta, muestra un alert() que diga "Contraseña incorrecta. Acceso denegado.".

**Ejercicio 3: Simulador de Carrito de Compras**

Tiempo de resolución estimado: 25 minutos

Objetivo: Practicar el uso del bucle while y la función confirm para crear un flujo interactivo.

**Tareas:**

- En un nuevo archivo ejercicio3.js, inicializa una variable totalCompra en 0.
- Iniciá un bucle while que se ejecute mientras el usuario quiera seguir comprando.
- Dentro del bucle, usa `confirm('¿Desea agregar un producto al carrito?')`. La respuesta (true o false) determinará si el bucle continúa.
- Si el usuario hace clic en "Aceptar" (true):

  - Usá `prompt('Ingrese el valor del producto:')`.
  - **Importante:** Convertí el valor ingresado (que es un string) a un número usando `parseFloat()`.
  - Verificá si el valor ingresado es un número válido. Si lo es, súmalo a totalCompra.

- Cuando el usuario haga clic en "Cancelar" (false), el bucle terminará.

- Fuera del bucle, muestra un `alert()` con el total de la compra. Por ejemplo: `El total de su compra es: $[valor_total]`.

**Ejercicio 4: Generador de Lista de Productos**

Tiempo de resolución estimado: 20 minutos

Objetivo: Practicar el uso del bucle for para realizar una tarea un número determinado de veces.

**Tareas:**

- En un nuevo archivo ejercicio4.js, usa prompt para preguntarle al usuario: `"¿Cuántos productos desea agregar a la lista?"`. Convierte la respuesta a un número y guárdala en una variable cantidadProductos.
- Creá un bucle for que se ejecute desde 1 hasta cantidadProductos.
- Dentro del bucle, en cada iteración, usa `console.log()` para imprimir un mensaje que simule la creación de un producto. Por ejemplo: `"Producto #1 agregado"`, `"Producto #2 agregado"`, etc.
- Al finalizar el bucle, mostrá en la consola un mensaje de resumen: `"Se han agregado [cantidadProductos] productos a la lista."`.

**Ejercicio 5: Función Reutilizable para Calcular Descuentos**

Tiempo de resolución estimado: 30 minutos

Objetivo: Integrar varios conceptos creando una función que encapsule una lógica de negocio y pueda ser reutilizada.

**Tareas:**

- En un nuevo archivo ejercicio5.js, declara una función llamada aplicarDescuento.
- Esta función debe aceptar dos parámetros: precio y porcentajeDescuento.
- Dentro de la función, calcula el monto del descuento y el precio final.
- La función debe retornar (return) el precio final con el descuento ya aplicado.
- Fuera de la función, declara el precio de dos productos diferentes de "Mueblería Jota" en variables (ej: precioMesa, precioSofa).
- Llamá a tu función aplicarDescuento dos veces:

  - Una vez para la mesa, con un 10% de descuento.
  - Otra vez para el sofá, con un 25% de descuento.

- Guardá los resultados en nuevas variables (precioFinalMesa, precioFinalSofa).

```
Muestra los resultados en la consola de forma clara. Ejemplo:
Precio original de la mesa: $20000. Descuento: 10%. Precio final: $18000
Precio original del sofá: $80000. Descuento: 25%. Precio final: $60000
```
