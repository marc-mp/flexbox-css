export class cuenta{

    #numCuenta
    #saldo
    constructor(numCuenta, saldo,){
        this.#numCuenta = numCuenta, 
        this.#saldo = 0 
    }


    get numCuenta(){
        return this.#numCuenta 
    }

    get saldo(){
        return this.#saldo 
    }


    ingresarDinero(importe){
        this.#saldo += parseFloat(importe)
    }

    retirarDinero(importe){
        if(this.#saldo >= importe){}
        this.#saldo -= parseFloat(importe)
    }    


}


