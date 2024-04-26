

console.table(pacients)

function crear(){
    let dni = prompt("indica dni")
    let nom = prompt("indica nom")
    let edat = +prompt("indica edat")
    let pesKg = +prompt("indica pes")
    let estaturaCm = parseFloat(prompt("indica estatura"))
    let cinturaCm = parseFloat(prompt("indica cintura"))
    let malucCm = parseFloat(prompt("indica maluc"))
    let sexe = parseFloat(prompt("indica sex"))
    const PACIENT = new Pacient(dni, nom, edat, pesKg, estaturaCm, cinturaCm, malucCm, sexe)
    const index = pacients.findIndex(pacient => pacient.dni === dni)
    if(index == -1){
        pacients.push(PACIENT)   
        console.log(pacients)
        alert(`Pacient creat`)
        result.innerHTML = `PACIENT : <br> ${PACIENT}`
    }else{
        alert("Pacient ya existeix a la base de dades")
    }    
}




function mostrar(){
    
    let opcion = 0
    

    do{
        
        opcion = +prompt(`Selecciona lque vols mostrar :
                                1. totes les dade d'un pacient
                                2. IMC i Categoria Pes
                                3. index Greix
                                4. relacio cintura Maluc
                                5. sortir del programa`)
        
    

        switch(opcion){

            case 1 :
                let dni1 = prompt("indica dni")
                const index = pacients.findIndex(pacient => pacient.dni === dni1) 
                if(index == -1){
                    alert("pacient no existeix")
                }else{
                    let pacientActual = pacients[index]
                    console.log(pacientActual)
                    result.innerHTML = `Pacient : <br> ${pacientActual}`
                }
                
            break;
            case 2 : 
                let dni2 = prompt("indica dni")
                const index2 = pacients.findIndex(pacient => pacient.dni === dni2) 
                if(index2 == -1){
                    alert("pacient no existeix")
            
                }else{
                    let pacientActual = pacients[index2]
                    result.innerHTML = `IMC es :${pacientActual.calculIMC()} <br> categoria pes : ${pacientActual.calculCategoriaPes(pacientActual.calculIMC())}`
                }

                
            break;

            case 3 :
                let dni3 = prompt("indica dni")
                const index3 = pacients.findIndex(pacient => pacient.dni === dni3) 
                if(index3 == -1){
                    alert("pacient no existeix")
            
                }else{
                    let pacientActual = pacients[index3]
                    result.innerHTML = `Index de greix :${pacientActual.calcularIndexGreix(pacientActual.calculIMC())}`
                }
            break

            case 4 :
                let dni4 = prompt("indica dni")
                const index4 = pacients.findIndex(pacient => pacient.dni === dni4) 
                if(index4 == -1){
                    alert("pacient no existeix")
            
                }else{
                    let pacientActual = pacients[index4]
                    result.innerHTML = `RCC :${pacientActual.calcularRCC()}`
                }
            break

            case 5 : 
            alert("programa finalitzat")
            break
            }

        }while(opcion < 1 || opcion > 5 || isNaN(opcion))
        
    
}


/// faltan muchas cosas y no he podido comproar pero no mhe da mas el tiempo :)