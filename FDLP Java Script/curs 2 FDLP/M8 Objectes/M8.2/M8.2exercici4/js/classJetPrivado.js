class JetPrivat extends Avio{

    constructor(numAvio, marca, model, carregaKg, longitudMetres){
        super (numAvio, marca, model, carregaKg, longitudMetres)

    }

    minutsNetejaAvioComercial(){
        return super.minutsNetejar() / 2 + 15

    }

    combustibleNecessari(){
        return super.combustibleNecessari()
    }

    calcularCostReserva(){
        let numPassatgers
        do{
        numPassatgers = +prompt("indica numero passatgers(max 10 pers)", 10)
        }while (numPassatgers < 1 || numPassatgers > 10)

        this._costReserva = parseInt(numPassatgers * 1000)
        return `Cost reserva : ${this._costReserva}`
    }

    toString(){
        let mostrar = super.toString()
        mostrar += `Temps netejar JetPrivat : ${this.minutsNetejaAvioComercial()} minuts <br>`
        return mostrar
    }
}
