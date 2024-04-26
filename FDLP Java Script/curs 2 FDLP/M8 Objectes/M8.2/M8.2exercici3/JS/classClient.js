class Client{   
    #dni
    #nom
    #cognom
    #edat
    #nacionalitat
    

    constructor(dni, nom, cognom, nacionalitat, edat){
        this.#dni = dni
        this.#nom = nom
        this.#cognom = cognom
        this.#nacionalitat = nacionalitat
        this.#edat = edat
        this.vols = []
        
    }

    get dni(){
        return this.#dni
    }

    get nom(){
        return this.#nom
    }

    get cognom(){
        return this.#cognom
    }

    get edat(){
        return this.#edat
    }

    get nacionalitat(){
        return this.#nacionalitat
    }


    set edat (nuevaedat){
        this.#edat = nuevaedat
    }

    set nacionalitat(nuevanacionalitat) { 
        this.#nacionalitat = nuevanacionalitat
    }

    esMajorEdat(){
        if(this.#edat >= 18){
             return true 
        }else{ 
            return false 
        }
    }


    agregarVol(vol){
        this.vols.push(vol)
    }


   toString(){
        return  `DNI: ${this.#dni} <br>
                 NOM : ${this.#nom} <br>
                 COGNOM : ${this.#cognom} <br>
                 NACIONALITAT : ${this.#nacionalitat} <br>
                 EDAT: ${this.#edat} <br>
                 MAJOR D'EDAD : ${this.esMajorEdat()}` 
   }

}