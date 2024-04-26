export class Docente{
    
    #dni
    #nombre
    #apellido
    #experiencia
    #estado
    #especialidades 
    #sueldo
    #sueldoBase
    #trienio
    #sextenio


    constructor(dni, nombre, apellido, experiencia, estado){
        this.#dni = dni
        this.#nombre = nombre
        this.#apellido = apellido
        this.#experiencia = experiencia
        this.#estado = estado
        this.#especialidades = []
        this._cantidadMaximaEspecialidades = 3
        this.#sueldo = null
        this.#sueldoBase = 1500
        this.#trienio = 50
        this.#sextenio = 100



    }

    get dni(){
        return this.#dni
    }

    get nombre(){
        return this.#nombre
    }

    get apellido(){
        return this.#apellido
    }

    get experiencia(){
        return this.#experiencia
    }

    get estado(){
        return this.#estado
    }

    set experiencia(nuevaexperiencia){
        this.#experiencia = nuevaexperiencia
    }

    set estado(nuevoestado){
        this.#estado = estado
    }

    calcularSueldo(){
        if(this.#estado == funcionario){
            this.#sueldo = this.#sueldoBase + Math.floor((this.#experiencia / 3) * this.#trienio) + Math.floor((this.#experiencia / 6) * this.#trienio) 

        }else{
            this.#sueldo = this.#sueldoBase + Math.floor((this.#experiencia / 6) * this.#sextenio) 
        }

    }

    añadirnuevaEspecialidad(nuevaEspecialidad){
        if(this.#especialidades.length < this._cantidadMaximaEspecialidades){
            return this.#especialidades.push(nuevaEspecialidad)
        }else{
            return alert("Docente no puede tener más de 3 especialidades")
        }
    }

    toString(){
        return `${this.#dni} - ${this.#nombre} - ${this.#apellido} - ${this.#experiencia} años - ${this.#estado}<br>`
    }
}