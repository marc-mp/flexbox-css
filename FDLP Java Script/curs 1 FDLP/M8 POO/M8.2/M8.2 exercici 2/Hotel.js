export class hotel {

    constructor(nombreHotel, numHabitaciones, numPlantas, superficieHotel){
        this._nombreHotel = nombreHotel
        this._numHabitaciones = numHabitaciones
        this._numPlantas = numPlantas
        this._superficieHotel = superficieHotel
        this._personal = null
        this._cost = null
        this._habpersonal = 20
        this._sueldo = 1500
    }



    get nombreHotel(){

        return this._nombreHotel
    }
    
    get numHabitaciones(){

        return this._numHabitaciones
    }

    get numPlantas(){

        return this._numPlantas
    }

    get superficieHotel(){

        return this._superficieHotel
    }



    set numHabitaciones(nuevonumHabitaciones){

        this._numHabitaciones = nuevonumHabitaciones
    }

    set numPlantas(nuevonumPlantas){

        this._numPlantas = nuevonumPlantas
    }

    set superficieHotel(nuevosuperficieHotel){

        this._superficieHotel = nuevosuperficieHotel
    }

    calcularmanteniment(){

        this._personal = Math.ceil(this.numHabitaciones / this._habpersonal)
        this._costepersonal = this._personal * this._sueldo
        
        return `personal necesario: ${this._personal} personas <br> 
                coste del personal : ${this._costepersonal} euros <br> `
    
    }

    toString(){

        return `Hotel ${this._nombreHotel}<br>
                Numero habitaciones : ${this._numHabitaciones} <br>
                Numero plantas : ${this._numPlantas}<br>
                superficieHotel: ${this._superficieHotel}<br>`
    }

}
