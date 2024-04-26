class Client{   
    #dni
    #edat
    #nacionalitat

    constructor(dni, edat, nacionalitat, numVols){
        this.#dni = dni
        this.#edat = edat
        this.#nacionalitat = nacionalitat
        this._numVols = numVols
        this._tonesCO2Viatge = 0.5
        
    }

    get dni(){
        return this.#dni
    }

    get edat(){
        return this.#edat
    }

    get nacionalitat(){
        return this.#nacionalitat
    }

    get numVols(){
        return this._numVols
    }


    set numVols (nuevonumVols){
        this._numVols = nuevonumVols
    }

   calcularPedajadaCarboni(){
        this._pedjadaCO2 = parseFloat(this._numVols * this._tonesCO2Viatge)
        return `PEDJADA CO2 : ${this._pedjadaCO2.toFixed(1)} tones de CO2`

   }

   toString(){
        return  `DNI: ${this.#dni} <br>
                 EDAT: ${this.#edat} <br>
                 NACIONALITAT : ${this.#nacionalitat} <br>
                 NUMERO VOLS : ${this._numVols} <br>
                 PEDJADA CO2 : ${this._pedjadaCO2.toFixed(1)}` 
   }

}