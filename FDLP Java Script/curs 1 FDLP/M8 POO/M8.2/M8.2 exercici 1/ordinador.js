export class ordinador{
 
    constructor (marca, model, procesador, RAM, disco){
        this._marca = marca,
        this._model = model,
        this._procesador = procesador,
        this._RAM = RAM, 
        this._disco = disco
    }

    get marca(){
        return this._marca
    }
    
    get model(){
        return this._model
    }

    get procesador(){
        return this._procesador
    }

    get RAM(){
        return this._RAM
    }

    get disco(){
        return this._disco
    }

    set procesador(nuevoprocesador){
        this.procesador = nuevoprocesador
    }

    set RAM(nuevoRAM){
        this.RAM = nuevoRAM
    }

    set disco(nuevodisco){
        this._disco =  nuevodisco
    }
        
    executarprograma(programaexecutant){
        return `En aquests moments s'està executant el programa: ${programaexecutant}<br>`
    }

    toString(){
        return `Ordinador de la marca ${this._marca}<br> 
        Model ${this._model}<br> 
        Procesador ${this._procesador}<br> 
        Memoria RAM ${this._RAM}<br> 
        Disc dur de ${this._disco}<br><br>`
    }

}
