export class Edifici{
    constructor (nom, numPlantas, superficie){
        this._nom = nom
        this._numPlantas = numPlantas
        this._superficie = superficie
        this._costNetejaMensual = null
        this._costMinutNeteja = 1
        this._tempsNeteja = null
        this._personal = null
        this._numVigilants = null
        this._souVigilant = 1300 // hoteles tienen extra de 500 euros
        this._costVigilants = null
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
        this._tempsNeteja = parseFloat((this._superficie / 5) + ((this.numPlantas -1) * 0,5 )) // tiempo en minutos de limpieza es la superficietotal / 5 m2 (por minuto) y se le suma 0,5 minutos por cada subida de planta (numPlantas-1) 
        console.log(this._tempsNeteja)
        this._costNetejaMensual = (this._tempsNeteja * this._costMinutNeteja) * 30

        return  `temps necessari per netejar l'edifici : ${this._tempsNeteja/60} horas <br>
                 Cost neteja : ${this._costNeteja.toFixed(2)} euros <br>`
                         
    }

    calcularCostVigilancia() {
        this._numVigilants = Math.ceil(this._superficie / 1000) 
        this._costVigilants = this._numVigilants * this._souVigilant

        return `Cost mensual vigilants : ${this._costVigilants.toFixed(2)} euros`
    }


}