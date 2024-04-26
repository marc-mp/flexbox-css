class Avio{

    #numAvio
    constructor(numAvio, marca, model, carregaKg, longitudMetres){
        this.#numAvio = numAvio
        this._marca = marca
        this._model = model
        this._carregaKg = carregaKg
        this._longitudMetres = longitudMetres
        
    }

    get numAvio() {return this.#numAvio}
    get marca() {return this._marca}
    get model() {return this._model}
    get carregaKg() {return this._carregaKg}
    get longitudMetres() {return this._longitudMetres}

    set marca(nuevamarca) {this._marca = nuevamarca}
    set model(nuevomodel) {this._model = nuevomodel}
    set carregaKg(nuevacarrega) {this._carregaKg = nuevacarrega}
    set longitudMetres(nuevalongitugMetres) {this._longitudMetres = nuevalongitugMetres}


    combustibleNecessari(){
        this._litresCombustible = parseFloat(this._longitudMetres * this.carregaKg)
        return this._litresCombustible
    }

    minutsNetejar(){
        this._minutsNeteja = parseFloat(this._longitudMetres * 10)
        return this._minutsNeteja
    }


    toString(){
        return ` Numero avio : ${this.#numAvio} <br>
                 Marca : ${this._marca} <br>
                 Model :${this._model} <br>
                 Carrega : ${this._carregaKg} Kg <br>
                 Longitud : ${this._longitudMetres} metres <br>
                 Combustible necessari : ${this.combustibleNecessari()} litres <br>`
    }
    



}