
//arrays donde se almacenan los edificios creados 
const edificis = []

let result = document.getElementById("result")


function crearEdifici(){
    //inputs comunes
    let tipoEdifici 
    do {
        tipoEdifici = +prompt(`seleccicona tipus edifici que vols crear:
                                1. Hospital
                                2. Cinema
                                3. Hotel`)

    }while (tipoEdifici < 1 || tipoEdifici > 3)
    let nom = prompt("indica nom edifici")
    let superficie = +(prompt("indica supercifie m2"))
    let numPlantas = +(prompt("indica numero de plantas")) 

    switch(tipoEdifici){  // con switch capturamos inputs necesarios segun tipo de edificio

        case 1 :  // Hospital
            let numMalalts = +prompt("indica numero malalts")
            const HOSPITAL = new Hospital(nom, numPlantas, superficie, numMalalts)
            const indexhospital = edificis.findIndex(edifici => edifici.nom === nom)
            if(indexhospital == -1){
                edificis.push(HOSPITAL)    // añadimos el nuevo hospital al array hospitals
                console.log(edificis)
                alert(`Hospital creat`)
                result.innerHTML = `Hospital : <br> ${HOSPITAL}`
            }else{
                alert("Hospital ya existeix a la base de dades")
            }    
           
        break;

        case 2 : // Cinema 
            let aforament = +prompt("indica aforament")
            const CINEMA = new Cinema(nom, numPlantas, superficie, aforament )
            const indexCinema = edificis.findIndex((edifici)=> edifici.nom === nom)
            if(indexCinema == -1){
                edificis.push(CINEMA)
                console.log(edificis)
                alert("Cinema creat")
                result.innerHTML = `Cinema : <br> ${CINEMA}`

            }else{
                alert("Cinema ya existeix a la base de dades")
            }
        break;

        case 3 : //Hotel
            let numHabitacions = +prompt("indica numero habitacions")
            const HOTEL = new Hotel(nom, numPlantas, superficie, numHabitacions)
            const indexHotel = edificis.findIndex((edifici)=> edifici.nom === nom)
            if(indexHotel == -1){
                edificis.push(HOTEL)
                console.log(edificis)
                alert("Hotel creat")
                result.innerHTML = `Hotel : <br> ${HOTEL}`

            }else{
                alert("Hotel ya existeix a la base de dades")
            }
        break;

    }
}




function eliminarEdifici(){
    let nom = prompt("indica nom edifici")
    const index = edificis.findIndex(edifici => edifici.nom === nom) // buscamos index del edificio indicado para saber en que posicion esta.
    if(index == -1){ 
        alert("Edificis no existeix en la base de dades")
    }else{
        confirm(`seguro que vols eliminar el edifici amb nom ${nom} `)      // si el index es diferente a -1 quiere decir que este edificio exite y lo podemos borrar
        if(confirm){
            edificis.splice(index,1) // borramos edificio
            console.log(edificis)
            alert(`Edifici ${nom} Eliminat`)
        }
    }      
}


function mostrarEdifici(){  
    let nom = prompt("indica nom edifici")
    const index = edificis.findIndex(edifici => edifici.nom === nom) // buscamos index del edifici indicado para saber en que posicion esta.
    if(index == -1){
        alert("Edifici no existeix a la base de dades")

    }else{
        let edificiActual = edificis[index]   
        if(edificiActual instanceof Hotel){      // validamos tipo de edificio y mostramos descripcion y metodos
            result.innerHTML = `Hotel : <br> ${edificiActual}`
        console.log(edificiActual)
        }else if(edificiActual instanceof Cinema){
            result.innerHTML = `Cinema : <br> ${edificiActual} <br> ${edificiActual.projectarSessio()}`

        }else if(edificiActual instanceof Hospital){
            result.innerHTML = `Hospital: <br> ${edificiActual}`
        }
    }    
      
}