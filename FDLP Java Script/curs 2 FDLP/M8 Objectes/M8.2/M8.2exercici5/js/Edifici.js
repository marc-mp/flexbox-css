class Edifici{
    
    constructor (nom, numPlantas, superficie){
        this._nom = nom
        this._numPlantas = numPlantas
        this._superficie = superficie
    }


    get nom() {
        return this._nom
    }

    get numPlantas() {
        return this._numPlantas
    }

    get superficie() {
        return this._superficie
    }



    netejar(){
        let tempsNetejaMinuts = parseFloat((this._superficie / 5) + ((this.numPlantas -1) * 0,5 )) // tiempo en minutos de limpieza es la superficietotal / 5 m2 (por minuto) y se le suma 0,5 minutos por cada subida de planta (numPlantas-1) 
        let tempsNetejaHoras = parseFloat(tempsNetejaMinuts / 60)
        let costNetejaMensual = (tempsNetejaMinuts  * 1) * 30    // tempsNeteja en minutos por 1 euro minuto (no haria falta reflejarlo). Se podria reflejar solo tempsNeteja

        return  `temps necessari per netejar l'edifici : ${tempsNetejaHoras.toFixed(2)} horas <br>
                 Cost neteja Mensual : ${costNetejaMensual.toFixed(2)} euros <br>`
                         
    }

    calcularCostVigilancia() {
        let numVigilants = Math.ceil(this._superficie / 1000) 
        let costVigilants = numVigilants * 1300

        return `Cost mensual vigilants : ${costVigilants.toFixed(2)} euros`
    }

    toString(){
        return `nom : ${this._nom } <br>
                numero plantas : ${this._numPlantas} <br>
                Superficie : ${this._superficie} <br>
                ${this.netejar()}`
    }
}