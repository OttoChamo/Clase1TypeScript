var Persona = (function () {
    function Persona(nombre) {
        this.nombre = nombre;
    }
    Persona.prototype.saludar = function () {
        return "Hola soy " + this.nombre;
    };
    return Persona;
}());
