import { Edifici } from "./Edifici.js";

export class Hotel extends Edifici{
    constructor (nom, numPlantas, superficie, numHabitacions,  ){
        super (nom, numPlantas, superficie)
        this._numHabitacions = numHabitacions
        this._personalHab = null
        this._souPersonalHab = 1000
        this._costServeiHab = null
        this._costNeteja = null
        this._temps = null
        this._numVigilants = null
        this._souVigilant = 1800 // 1300 + extra de 500 euros al ser Hotel
        this._costVigilants = null
    }

    get numHabitacions(){
        return this._numHabitacions
    }
    

    serveiHabitacions(){
        this._personalHab = this._numHabitacions / 20
        this._costServeiHab = this._personalHab * 1000

        return  `Personal Servei habitacion necessari: ${this._personalHab} persones <br>
                 Cost mensual servei habitacions es ${this._costServeiHab.toFixed(2)} euros`
    }


    netejar(){
        return super.netejar()
        // this.temps = parseFloat((this._superficie / 5) + ((numPlantas -1) * 0,5 )) // tiempo en minutos de limpieza es la superficietotal / 5 m2 (por minuto) y se le suma 0,5 minutos por cada subida de planta (numPlantas-1) 
        // this._costNeteja = this.temps * 30 // se paga 1 euro por minuto por lo que coste diario sera igual al total minnutos trabajaos. Los motiplicamos por 30 para saber coste mensual

        // return `temps que sha trigat en netejar l'edifici es ${this.temps} minuts <br>`
        //         `El cost mensual de netejar es ${this._costNeteja}`

    }

    calcularCostVigilancia() {
        this._numVigilants = Math.ceil(this._superficie / 1000) 
        this._costVigilants = this._numVigilants * this._souVigilant

        return `Cost mensual vigilants : ${this._costVigilants.toFixed(2)} euros`
    }

    toString(){
        
        return `Nom hotel: ${this._nom}<br>
                Superficie : ${this._superficie} m2<br>
                Numero plantas : ${this._numPlantas}<br>
                Numero d'habitacions : ${this._numHabitacions}<br>`
    }

}