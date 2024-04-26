import { Edifici } from "./Edifici.js";

export class Hospital extends Edifici{
    constructor (nom, numPlantas, superficie, numMalalts){
        super (nom, numPlantas, superficie)
        this._numMalalts = numMalalts
        this._apats = 3
        this._racions = null
        this._costNeteja = null
        this._temps = null
        this._numVigilants = null
        this._souVigilant = 1300 
        this._costVigilants = null
    }

    get numMalalts() {
        return this._numMalalts

    }

    set numMalalts(nuevonumMalalts){
        this._numMalalts = nuevonumMalalts

    }

    repartirDinar(){  
        this._racions = this._numMalalts * this._apats
        return `Se estan repartint ${this._racions} racions`
    }

        
    netejar(){
        return super.netejar()
        // this._temps = parseFloat((this._superficie / 5) + ((numPlantas -1) * 0,5 )) // tiempo en minutos de limpieza es la superficietotal / 5 m2 (por minuto) y se le suma 0,5 minutos por cada subida de planta (numPlantas-1) 
        // this._costNeteja = this._temps * 30 // se paga 1 euro por minuto por lo que coste diario sera igual al total minnutos trabajaos. Los motiplicamos por 30 para saber coste mensual

        // return `temps que sha trigat en netejar l'edifici es ${this.temps} minuts <br>`
        //         `El cost mensual de netejar es ${this._costNeteja}`

    }

    calcularCostVigilancia() {
        return super.calcularCostVigilancia()
        // this._numVigilants = math.ceil(superficie / 1000) 
        // this._costVigilants = this._numVigilants * this._souVigilant

        // return `El cost mensual de vigilants es ${this._costVigilants}`
    }

    toString(){
        
        return `Nom hospital: ${this._nom}<br>
                Superficie : ${this._superficie} m2<br>
                Numero plantas : ${this._numPlantas}<br>
                Numero de malalts en aquests moments : ${this._numMalalts}<br>`
    }


}