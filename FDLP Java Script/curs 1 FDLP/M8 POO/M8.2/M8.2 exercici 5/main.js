import { Edifici } from "./Edifici.js"
import { Cinema } from "./Cinema.js"
import { Hospital } from "./Hospital.js"
import { Hotel } from "./Hotel.js"

// addEventListener para que al hacer click en boton ejecute el evento función.
document.getElementById("btnCrear").addEventListener("click", crearEdifici)
document.getElementById("btnEliminar").addEventListener("click", eliminarEdifici)
document.getElementById("btnMostrar").addEventListener("click", mostrarEdifici)

// funcion para borrar inputs introducidos al finalizar
function cleanInnputs(){  
    let inputs = document.querySelectorAll('input:not([type="button"])')
    inputs.forEach((input) => input.value = "" )
}

//arrays donde se almacenan los edificios creados 
const hospitals = []
const cinemas = []      
const hotels = []

const result = document.getElementById("result")


function crearEdifici(){
    //capturar inputs comunes
    let TipusEdifici = document.getElementById("TipusEdifici").value
    let nom = document.getElementById("nomEdifici").value
    let superficie = parseFloat(document.getElementById("superficie").value)
    let numPlantas = parseInt(document.getElementById("numPlantas").value) 
    document.getElementById("nomEdifici").style.display = 'false'

    switch(TipusEdifici){  // con switch capturamos inputs necesarios segun tipo de edificio

        case "Hospital" :      
            let numMalalts = document.getElementById("numMalalts").value
            const HOSPITAL = new Hospital(nom, numPlantas, superficie, numMalalts)
            const indexhospital = hospitals.findIndex(Hospital => Hospital.nom === nom)
            if(indexhospital == -1){
                hospitals.push(HOSPITAL)    // añadimos el nuevo hospital al array hospitals
                console.log(hospitals)
                alert("Hospital creat")
            }else{
                alert("Hospital ya existeix a la base de dades")
            }    

            cleanInnputs()
        break;

        case "Cinema" :
            let preuEntrada = document.getElementById("preuEntrada").value
            let assistents = parseFloat(document.getElementById("assistents").value)
            let aforament = parseInt(document.getElementById("aforament").value)
            const CINEMA = new Cinema(nom, numPlantas, superficie, preuEntrada, assistents, aforament )
            const indexCinema = cinemas.findIndex((Cinema)=> Cinema.nom === nom)
            if(indexCinema == -1){
                cinemas.push(CINEMA)
                console.log(cinemas)
                alert("Cinema creat")
            }else{
                alert("Cinema ya existeix a la base de dades")
            }

            cleanInnputs()
        break;

        case "Hotel" :
            let numHabitacions = document.getElementById("numHabitacions").value
            const HOTEL = new Hotel(nom, numPlantas, superficie, numHabitacions)
            const indexHotel = hotels.findIndex((Hotel)=> Hotel.nom === nom)
            if(indexHotel == -1){
                hotels.push(HOTEL)
                console.log(hotels)
                alert("Hotel creat")
            }else{
                alert("Hotel ya existeix a la base de dades")
            }

            cleanInnputs()
        break;

        default : alert("Selecciona tipus d'edifici que vols crear")
        break;
    }

    cleanInnputs()
}




function eliminarEdifici(){

    let TipusEdifici = document.getElementById("TipusEdifici").value
    let nom = document.getElementById("nomEliminar").value

    switch(TipusEdifici){

        case "Hospital" :
            const indexhospital = hospitals.findIndex(Hospital => Hospital.nom === nom) // buscamos index del hospital indicado para saber en que posicion esta.
            if(indexhospital != -1){  // si el index es diferente a -1 quiere decir que este hospital exite y lo podemos borrar
                hospitals.splice(indexhospital,1) // borramos hopital
                console.log(hospitals)
                alert("Hospital Eliminat")
            }else{
                alert("Hospital no existeix en la base de dades")
            }   
            
            cleanInnputs()
        break;

        case "Cinema" :
            const indexCinema = cinemas.findIndex(Cinema => Cinema.nom === nom)
            if(indexCinema != -1){
                cinemas.splice(indexCinema,1)
                console.log(cinemas)
                alert("Cinema Eliminat")
            }else{
                alert("Cinema no existeix en la base de dades")
            }    

            cleanInnputs()
        break;

        case "Hotel" :
            const indexHotel = hotels.findIndex(Hotel => Hotel.nom === nom)
            if(indexHotel != -1){
                hotels.splice(indexHotel,1)
                console.log(hotels)
                alert("Hotel Eliminat")
            }else{
                alert("Hotel no existeix en la base de dades")
            }    

            cleanInnputs()
        break;

        default : alert("Selecciona tipus d'edifici que vols crear")
        break;
    }  

    cleanInnputs()      
}


function mostrarEdifici(){  

    let TipusEdifici = document.getElementById("TipusEdifici").value
    let nom = document.getElementById("nomMostrar").value

    switch(TipusEdifici){

        case "Hospital" :
            const indexHospital = hospitals.findIndex(Hospital => Hospital.nom === nom) // buscamos index del hospital indicado para saber en que posicion esta.
            if(indexHospital != -1){
                let hospitalActual = hospitals[indexHospital]   // mostramos descripcion y metodos
                result.innerHTML = `${hospitalActual.toString()} <br>  
                                    ${hospitalActual.repartirDinar()} <br>
                                    ${hospitalActual.netejar()} <br>
                                    ${hospitalActual.calcularCostVigilancia()} <br> `
            }else{
                alert("Hospital no existeix a la base de dades")
            }    

            cleanInnputs()
        break;

        case "Cinema" :
            const indexCinema = cinemas.findIndex(Cinema => Cinema.nom === nom)
            if(indexCinema != -1){
                let cinemaActual = cinemas[indexCinema]
                result.innerHTML = `${cinemaActual.toString()} <br>
                                    ${cinemaActual.projectarSessio()} <br>
                                    ${cinemaActual.netejar()} <br>
                                    ${cinemaActual.calcularCostVigilancia()} <br>`
            }else{
                alert("Cinema no existeix a la base de dades")
            }    

            cleanInnputs()
        break;

        case "Hotel" :
            const indexHotel = hotels.findIndex(Hotel => Hotel.nom === nom)
            if(indexHotel != -1){
                let hotelActual = hotels[indexHotel]
                result.innerHTML = `${hotelActual.toString()} <br>
                                    ${hotelActual.serveiHabitacions()} <br>
                                    ${hotelActual.netejar()} <br>
                                    ${hotelActual.calcularCostVigilancia()} <br>`
     
            }else{
                alert("Hotel no existeix a la base de dades")
            }    

            cleanInnputs()
        break;

        default : alert("Selecciona tipus d'edifici que vols crear")
        break;
    }        

    cleanInnputs()
}