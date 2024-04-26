export class punt {
    contructor (posicioX, posicioY){
        this._posicioX = posicioX
        this._posicioY = posicioY
    }

    get posicioX(){
        return this._posicioX 
    }

    get posicioY(){
        return this._posicioY 
    }

    set posicioX(nuevaposicioX){
        this._posicioX = nuevaposicioX
    }

    set posicioY(nuevaposicioY){
        this._posicioY = nuevaposicioY
    }

}