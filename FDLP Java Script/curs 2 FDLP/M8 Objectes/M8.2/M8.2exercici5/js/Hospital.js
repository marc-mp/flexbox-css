class Hospital extends Edifici{
    constructor (nom, numPlantas, superficie, numMalalts){
        super (nom, numPlantas, superficie)
        this._numMalalts = numMalalts
    }

    get numMalalts() {
        return this._numMalalts
    }

    set numMalalts(nuevonumMalalts){
        this._numMalalts = nuevonumMalalts
    }

    repartirDinar(){  
        let racions = this._numMalalts * 3
        return `Se estan repartint ${racions} racions`
    }

    netejar(){
        return super.netejar()
    }

    calcularCostVigilancia(){
        return super.calcularCostVigilancia()
    }

    toString(){
        let mostrar = super.toString()
        mostrar += `Numero de malalts : ${this._numMalalts} <br>
                    ${this.calcularCostVigilancia()} <br>
                    ${this.repartirDinar()}` 
        return mostrar           
    }

}