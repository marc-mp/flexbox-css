class Avioneta extends Avio{

    constructor(numAvio, marca, model, carregaKg, longitudMetres, numHelix){
        super (numAvio, marca, model, carregaKg, longitudMetres)
        this._numHelix = numHelix

    }

    get numHelix() {return this._numHelix}
    set numHelix(nuevonumHelix) {this._numHelix = nuevonumHelix}

    minutsNetejaAvioneta(){
        return super.minutsNetejar() / 2
    }


    combustibleNecessari(){
        return super.combustibleNecessari()
    }

    calcularDistancia(){
        this._distanciaKmTotal = parseInt(this._numHelix * 1000)
        return this._distanciaKmTotal

    }

    toString(){

        let mostrar = super.toString()
        mostrar += `Numero Helix : ${this._numHelix} <br>
                    Temps neteja avioneta : ${this.minutsNetejaAvioneta()} minuts <br>
                    Calcular distancia : ${this.calcularDistancia()} km <br>`
        return mostrar
    }


}