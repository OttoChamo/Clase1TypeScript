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

let nombre : string = 'Juan Perez';
let mensaje : string = `Hola, mi nombre es ${nombre}`;

// Any puede ser cualquier tipo de objeto de javascript

let variable : any = 4;
variable = 'hola mundo';

variable = false;

// Arrays, sino se le especifica tipo son any
let listNumber : number[] = [1, 2, 3, 4];
let listString : Array<string> = ['Hola', 'saludos'];

// Metodos con parametros obligatorios

function sumar(x : number, y : number) : number {
    return x + y;
}

function sumar2(x : number, y : number) : void {
    let total : number = (x + y);
}

// Metodos con parametros opcionales

function sumar3(x? : number, y? : number) : void {
    console.log("x " + x + "y " + y); 
}

// metodos con parametos y valores por defecto

function sumar4(x : number = 10, y : number = 10) : void {
    console.log(x + y);
}
