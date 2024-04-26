
    
class Persona {
    constructor(nombre, apellido, edad, cocina){
        this._nombre = nombre
        this._apellido = apellido
        this._edad = parseInt (edad)
        this._cocina = cocina
    }
    
    description() {
        console. log('Hola, soy ${this ._ nombre} y tengo ${this._ edad} años')
    }
    
    get nombre(){
        return this. nombre
    }
    
    set nombre ( nuevoNombre){
    
        let password = prompt('Escriba su password')
        
        //Contenido de una base de datos
        if (password == '1234') {
        this._nombre = nuevoNombre
        } else {
        alert('Password invalid')
        }
    }
}
