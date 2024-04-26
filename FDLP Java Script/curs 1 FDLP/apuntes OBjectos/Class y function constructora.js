
// Function construtora  // es como se hacia antes y es lo que passa por dentro de las CLASS
  
    function Animal(nombre, genero, sonido) {
    this. nombre = nombre
    this.genero = genero
    this.sonido = sonido

    //sonar = function() {
    console. log(this.sonido)
    }

    Animal.prototype. sonar = function() {  // los metodos (funciones) se suelen usar por fuera del objeto. para usarlo se usa prototypes
    console. log(`Hago sonidos`)}



// class = a una plantilla. ES LA NUEVA VERSION DE FUNCION CONSTRUCTORA (es la que usaremos!!!)
// Las funciones o metodos son mas faciles de llamar

class Animal{   //objeto Animal

    constructor(nombre, genero, sonido) {    // propiedades por un lado
    this.nombre = nombre
    this.genero = genero
    this. sonido = sonido                  
    this.especie = especie
    }

        
    saludar(){       // metodos (acciones) por otro
    console. log(`Soy un `+ this.especie +` y hago ` + this.sonido +' '+ this.sonido)
    }

}
    
let Perro = new Animal ('glop', 'macho', 'guau')
console. log(Perro)
Perro.saludar()

let Gata = new Animal ('Lia', 'hembra', 'miau')
console. log (Gata)
Gata.saludar()


    
        