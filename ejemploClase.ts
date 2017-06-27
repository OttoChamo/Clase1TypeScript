class Persona {
    public nombre : string;

    constructor(nombre : string) {
        this.nombre = nombre;
    }

    saludar() : string {
        return `Hola soy ${this.nombre}`; 
    }
}