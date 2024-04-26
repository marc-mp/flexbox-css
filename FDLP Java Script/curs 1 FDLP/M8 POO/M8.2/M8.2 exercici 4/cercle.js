export class cercle{
    constructor(centre, radi){
        this._centre = centre
        this._radi = radi
    }

    get centre(){
        return this._centre
    }

    get radi(){
        return this._radi
    }

    set centre(nuevocentre){
        this._centre = nuevocentre
    }

    set radi(nuevoradi){
        this._radi = nuevoradi
    }


    distanciaCentres(altreCercle){

        
    }

    equals(altreCercle){}

    sonConcentrics(altreCercle){}

    tenenIgualRadi(altreCercle){}

    sonTangents(altreCercle){}

    sonSecants(altreCercle){}

    noEsToquen(altreCercle){}


}