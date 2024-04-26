export class cliente {
    #dni
    #nombre 
    #apellido 
    #cuentas

    constructor(dni, nombre, apellido){
        this.#dni = dni 
        this.#nombre = nombre 
        this.#apellido = apellido
        this.#cuentas = []

    }

    get dni (){
        return this.#dni
    }

    get nombre (){
        return this.#nombre
    }

    get apellido(){
        return this.#apellido
    }

    get cuentas(){
        return this.#cuentas
    }



    nuevacuentausuario(nuevaCuenta){
        return this.#cuentas.push(nuevaCuenta)
    }

    toString(){
        return `Dni: ${ this.#dni}<br>
                Nombre: ${ this.#nombre} <br>
                Apellido : ${ this.#apellido }<br>
                Cuentas: ${this.#cuentas.join("<br>")}<br>`
    
    }
}



