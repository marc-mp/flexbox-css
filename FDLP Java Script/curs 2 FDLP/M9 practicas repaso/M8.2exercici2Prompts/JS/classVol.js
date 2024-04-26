class Vol{

    static tones = 0.1
    #numVol

    constructor (numVol, distanciaKM, companyia, numPassatgers, numMotors){
        this.#numVol = numVol
        this._distanciaKm = distanciaKM
        this._companyia = companyia
        this._numPassatgers = numPassatgers
        this._numMotors = numMotors
        this._tonesCO2Km = null 
       
    }

    get numVol(){
        return this.#numVol
    }

    get distanciaKM(){
        return this._distanciaKm
    }

    get companyia(){
        return this._companyia
    }

    get numPassatgers(){
        return this._numPassatgers
    }

    get numMotors(){
        return this._numMotors
    }


    set distanciaKM(nuevadistanciaKm){
        this._distanciaKm = nuevadistanciaKm
    }

    set companyia(nuevacompanyia){
        this._companyia = nuevacompanyia
    }

    set numPassatgers(nuevonumPassatgers){
        this._numPassatgers = nuevonumPassatgers
    }

    set numMotors(nuevonumMotors){
        this._numMotors = nuevonumMotors
    }

    calcularPedjadaCO2(){
        this._tonesCO2Km = parseFloat(Vol.tones / 1000) 
        this._pedjadaCO2 = parseFloat(this._distanciaKm * this._tonesCO2Km * this._numMotors)
        return `Pedjada CO2 : ${this._pedjadaCO2.toFixed(1)} tones de CO2`

    }

    toString(){
        return `Numero vol :   ${this.#numVol} <br>
                Distancia :    ${this._distanciaKm} <br>
                Companyia :    ${this._companyia} <br>
                Numero passatgers :    ${this._numPassatgers} <br>
                Numero motors :    ${this._numMotors} <br>`              
    }

}