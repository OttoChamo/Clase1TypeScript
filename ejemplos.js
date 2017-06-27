/* comando para install typescript
 * npm install -g typescript
 *
 * Para combrobar la version de typescript
 * tsc -v
 *
 * Comando para compilar
 * tsc nombreDeArchivo.ts
 *
 * Para configurar typescript
 * tsc -init
 *
 * Declaracion de variables
 *
 * let alcance de bloque
 *
 * var alcance global
 *
 * tipos de datos
 *
 * Boolean
 * let accesso : boolean = true;
 *
 * acceso = false
 *
 * Number
 *
 * let decimal : number = 6;
 * let hexadeicimal : number = 0xf00d;
 *
 * String
 *
 * Cadena de caracteres y textos
 *
 * let nombre : string = "juan perez";
 *
 * let direccion : string = 'mi casa';
 *
 * String template
 *
 * Son plantillas para concatenar cadenas
 * debemos usar comillas inversas
 *
 *
*/
var nombre = 'Juan Perez';
var mensaje = "Hola, mi nombre es " + nombre;
// Any puede ser cualquier tipo de objeto de javascript
var variable = 4;
variable = 'hola mundo';
variable = false;
// Arrays, sino se le especifica tipo son any
var listNumber = [1, 2, 3, 4];
var listString = ['Hola', 'saludos'];
// Metodos con parametros obligatorios
function sumar(x, y) {
    return x + y;
}
function sumar2(x, y) {
    var total = (x + y);
}
// Metodos con parametros opcionales
function sumar3(x, y) {
    console.log("x " + x + "y " + y);
}
// metodos con parametos y valores por defecto
function sumar4(x, y) {
    if (x === void 0) { x = 10; }
    if (y === void 0) { y = 10; }
    console.log(x + y);
}
