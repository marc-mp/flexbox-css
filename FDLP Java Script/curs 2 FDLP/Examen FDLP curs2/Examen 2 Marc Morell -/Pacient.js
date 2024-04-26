class Pacient{

    #dni
    constructor(dni, nom, edat, pesKg, estaturaCm, cinturaCm, malucCm, sexe){
        this.#dni = dni
        this._nom = nom
        this._edat = edat
        this._pesKg = pesKg
        this._estaturaCm = estaturaCm
        this._cinturaCm = cinturaCm
        this._malucCm = malucCm
        this._sexe = sexe
    }

    get dni(){
        return this.#dni
    }
    get nom(){ 
        return this.nom
    }
    get edat(){ 
        return this._edat
    }
    get pesKg(){ 
        return this._pesKg
    }
    get estaturaCm(){ 
        return this._estaturaCm
    }
    get cinturaCm(){ 
        return this._cinturaCm
    }
    get malucCm(){ 
        return this._malucCm
    }
    get sexe(){ 
        return this._sexe
    }

    set pesKg(noupesKg){
        this._pesKg =  noupesKg
    }
    set estaturaCm(novaestaturaCm){ 
        this._estaturaCm = novaestaturaCm
    }
    set cinturaCm(novacinturaCm){ 
        this._cinturaCm = novacinturaCm
    }
    set malucCm(noumalucCm){ 
        this.malucCm = noumalucCm
    }


    

    calculIMC(){
        this._IMC = parseFloat(this._pesKg / ((this._estaturaCm * 100)**2))
        return this._IMC
    }

    calculCategoriaPes(IMC){

        

        if(IMC < 18.5){ 
            return "pes insuficient"
        }else if(IMC >= 18.5 && IMC <= 24.9){
            return "pes normal"
        }else if(IMC >= 25 && 29.9){
            return "sobre pes"
        }else if(IMC > 30){
            return "obesitat"
        }

    }

    calcularIndexGreix(IMC){

        let indexGreix = 0

        if(this._sexe == "dona"){
            indexGreix = parseFloat(((1.2 * IMC) + 0.23) * this._edat)

        }else if(this._sexe == "home"){
            indexGreix = parseFloat((((1.2 * IMC) + 0.23) * this._edat) - 5.4)
        }

        return indexGreix
    }

    calcularRCC(){
        let relCC = this._cinturaCm / this._malucCm
        return relCC
    }

    calcularRiscSalut(relCC){
        
        if(this._sexe == "dona" && relCC > 0.82){
            return "risc salut"

        }else if(this._sexe == "home" && relCC > 0.95){
            return "risc salut"
        }
    }

    toString(){
        return  `DNI: ${this.#dni} <br>
                NOM : ${this._nom} <br>
                EDAT : ${this._edat} <br>
                PES : ${this._pesKg} <br>
                ESTATURA : ${this._estaturaCm} <br>
                CINTURA: ${this._cinturaCm} <br>
                MALUC : ${this._malucCm} <br>
                SEXE : ${this._sexe} <br>` 

    }

}