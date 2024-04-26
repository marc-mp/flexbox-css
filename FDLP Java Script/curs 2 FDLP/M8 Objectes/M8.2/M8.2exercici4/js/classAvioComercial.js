class AvioComercial extends Avio{

    
    constructor (numAvio, marca, model, carregaKg, longitudMetres){
        super (numAvio, marca, model, carregaKg, longitudMetres)
    }


    minutsNetejarAvioComercial(){
        return super.minutsNetejar() + 240
    }

    combustibleNecessari(){
        return super.combustibleNecessari()
    }

    calcularCostMenjar(){
        let numPassatgers = +prompt("indica numero passatgers", 250)
        this._costMenjarTotal = parseFloat(numPassatgers * 10)
        return `Cost menjar : ${this._costMenjarTotal} euros`
    }

    toString(){
        let mostrar = super.toString()
            mostrar += `Temps neteja avio : ${this.minutsNetejarAvioComercial()} minuts <br>`
            return mostrar
    }

}