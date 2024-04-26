class client{

    #dni
    constructor(nom, dni, llistaProuctesComprats){
        this._nom = nom
        this.#dni = dni
        this._llistaProductesComprats = llistaProuctesComprats

    }

    get nom(){
        return this._nom
    }

    get dni(){
        return this.#dni
    }

    get llistaProuctesComprats(){
        return this._llistaProductesComprats
    }

    set 

}