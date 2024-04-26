class Hotel extends Edifici{
    constructor (nom, numPlantas, superficie, numHabitacions){
        super (nom, numPlantas, superficie)
        this._numHabitacions = numHabitacions
    }

    get numHabitacions() {return this._numHabitacions}
    

    serveiHabitacions(){
        let personalHab = this._numHabitacions / 20
        let costServeiHab = personalHab * 1000

        return  `Personal Servei habitacion necessari: ${Math.floor(personalHab)} persones <br>
                 Cost mensual servei habitacions es ${costServeiHab.toFixed(2)} euros`
    }


    netejar(){
        return super.netejar()
    }

    calcularCostVigilancia() {   // no uso metodo super porque en Hoteles cada vigilante cobra 1800
        this._numVigilants = this._superficie / 1000
        this._costVigilants = this._numVigilants * 1800
        return `Cost mensual vigilants : ${this._costVigilants.toFixed(2)} euros`
    }


 

    toString(){
        let mostrar = super.toString()
        mostrar += `Numero habitacions : ${this._numHabitacions} <br>
                    ${this.calcularCostVigilancia()} <br>
                    ${this.serveiHabitacions()}` 
        return mostrar           
    }

}