//Objetos

// Literal
const Persona ={
    nombre: 'jc', //Propiedades
    apellido: 'cc',
    numero: 123456
}

console. log (Persona ['nombre'])
console. log(Persona. nombre)
console. log(Persona.apellido)
console. log (Persona. numero)

Persona. nombre = 'Pepito'
console. log(Persona. nombre)

const boli ={
    color : 'blue',
    material : 'plastic',
    grosor : 'fino',
    tapa : true,

    escribir: function() {  // funciones objeto
    console. log('Escribir')
    }

    borrar: function() {
        console. log('borrar')
    }

}

console. log(boli. hasOwnProperty('color')) //metodo para preguntar si tiene esa propiedad
console. log(boli. hasOwnProperty('tapa') )
console. log(boli. hasOwnProperty('cambiar'))


saludarAAlguien : function (nombre) {          // metodo (que seria como una funcion)
    console. log('Hola cómo estás ${nom}' )
}

const JuanCa = {
    nombre: 'jc', //Propiedades
    apellido: 'cc',
    numero: 123456,
    
    saludarAAlguien : function (nombre) {
        console. log(`Hola cómo estás ${nombre}`)
    }
    
    presentarme : function(){
        console. log(`Hola, soy ${this.nombre} ${this.apellido} // this hace referencia al objeto donde estoy 
        y mi número es ${this.numero}`)

    }
}
