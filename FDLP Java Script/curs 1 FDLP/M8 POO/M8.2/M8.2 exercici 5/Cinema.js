import { Edifici } from "./Edifici.js"

export class Cinema extends Edifici{
    constructor (nom, numPlantas, superficie, preuEntrada, assistents, aforament){
        super(nom, numPlantas,superficie )
        this._preuEntrada = preuEntrada
        this._assistents = assistents
        this._aforament = aforament
        this._recaptacio = null
        this._costNeteja = null
        this._temps = null
        this._numVigilants = null
        this._souVigilant = 1300 
        this._costVigilants = null

    }

    get preuEntrada(){
        return this._preuEntrada 

    }

    get assistents(){
        return this._assistents 

    }    

    get aforament(){
        return this._aforament 

    }

    set preuEntrada(nuevopreuEntrada){
        this._preuEntrada = nuevopreuEntrada

    }

    set assistents(nuevoassistents){
        this._assistents = nuevoassistents

    }    



    projectarSessio(){

        if (assistents <= aforament){
            this._recaptacio = parseFloat(this._assistents * this._preuEntrada)
            return `Shan recaptat ${this._recaptacio} euros`

        }else{
            return `numero assistents no por ser mes gran que el aforament`
        }


    }

    netejar(){
        return super.netejar()
        // this.temps = parseFloat((this._superficie / 5) + ((numPlantas -1) * 0,5 )) // tiempo en minutos de limpieza es la superficietotal / 5 m2 (por minuto) y se le suma 0,5 minutos por cada subida de planta (numPlantas-1) 
        // this._costNeteja = this.temps * 30 // se paga 1 euro por minuto por lo que coste diario sera igual al total minnutos trabajaos. Los motiplicamos por 30 para saber coste mensual

        // return `temps que sha trigat en netejar l'edifici es ${this.temps} minuts <br>`
        //         `El cost mensual de netejar es ${this._costNeteja}`

    }

    calcularCostVigilancia() {   // no uso metodo super porque en cinemas cada vigilante cubre 3000 m2
        this._numVigilants = this._superficie / 3000
        this._costVigilants = this._numVigilants * this._souVigilant
        return `Cost mensual vigilants : ${this._costVigilants.toFixed(2)} euros`
    }


    toString(){
        
        return `Nom cinema: ${this._nom}<br>
                Superficie : ${this._superficie} m2<br>
                Numero plantas : ${this._numPlantas}<br>`
    }

}