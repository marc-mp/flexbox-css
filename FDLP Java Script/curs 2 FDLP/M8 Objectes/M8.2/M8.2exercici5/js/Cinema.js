class Cinema extends Edifici{
    constructor (nom, numPlantas, superficie, aforament){
        super(nom, numPlantas,superficie )
        this._aforament = aforament
    }


    get aforament() {return this._aforament}

    set aforament(nuevoaforament){
        this._aforament = nuevoaforament

    }


    projectarSessio(){
        let assistents = 0 
        let preuEntrada = 0
        do{
            assistents = +prompt(`indica numero assistents. No pot superar al aformanet : ${this._aforament} persones`)
            preuEntrada = +prompt("indica preu entrada")
            if(preuEntrada == 0 ){
                alert("L'entrada es gratuita")
            }
        }while((assistents > this._aforament) || isNaN(assistents) || isNaN(preuEntrada) || assistents == 0)
        this._recaptacio = parseFloat(assistents  * preuEntrada)
            return `Shan recaptat ${this._recaptacio} euros`
    }

    netejar(){
        return super.netejar()
    }

    calcularCostVigilancia() {   // no uso metodo super porque en cinemas cada vigilante cubre 3000 m2
        this._numVigilants = this._superficie / 3000
        this._costVigilants = this._numVigilants * 1300
        return `Cost mensual vigilants : ${this._costVigilants.toFixed(2)} euros`
    }


    toString(){
        let mostrar = super.toString()
        mostrar += `Aforament maxim: ${this._aforament} persones <br>
                    ${this.calcularCostVigilancia()}`  
        return mostrar           
    }

}