import { hotel } from "./Hotel.js"


document.getElementById('botonCrear').addEventListener('click', crearHotel)
document.getElementById('botonEliminar').addEventListener('click', donarDeBaixaHotel)
document.getElementById('botonVer').addEventListener('click', veureHotel)
document.getElementById('botonModificar').addEventListener('click', modificarHotel)
document.getElementById('botonActualizar').addEventListener('click', actualizarHotel)

const Hoteles = []

function cleanInnputs(){        // funcion para limpiar los inputs 
    let inputs = document. querySelectorAll('input:not([type="button"])')
    inputs.forEach((input) => input.value = "" )
}

function crearHotel(){
    let nombreHotel= document.getElementById("nombreHotel").value
    let numHabitaciones = parseInt(document.getElementById("numHabitaciones").value)    //capturamos datos del hotel a crear
    let numPlantas = parseInt(document.getElementById("numPlantas").value)
    let  superficieHotel = parseInt(document.getElementById("superficieHotel").value)
    const HOTEL = new hotel(nombreHotel, numHabitaciones, numPlantas, superficieHotel)  // creamos instancia de un nuevo hotel
    const indexHotel = Hoteles.findIndex(hotel => hotel.nombreHotel === nombreHotel)    // buscamos nombreHotel en array Hoteles
    if(indexHotel == -1){   // validacion para comprobar si el hotel que se quiere crear es nuevo o ya esta en nuestra base de datos
        Hoteles.push(HOTEL) //añadimos hotel
        HOTEL.calcularmanteniment()
        console.log(Hoteles)
        alert("Hotel creat")
    }else{
        alert("Hotel ya existeix a la base de dades")
    }    
    cleanInnputs()
}


function donarDeBaixaHotel(){
    let nombreHotel= document.getElementById("nombreHotelEliminar").value
    let result = document.getElementById("result")
    const index = Hoteles.findIndex(hotel => hotel.nombreHotel === nombreHotel)  // buscamos hotel en array hoteles
    if(index == -1){ 
        alert(`El hotel ${nombreHotel} no existeix a la nostra aplicació`) // validación para ver si el hotel esta en nuestra base de datos
    }else{      
        Hoteles.splice(index,1)  // borramos hotel
        alert(`hotel ${nombreHotel} eliminat`)
        console.log((Hoteles))
    }
    cleanInnputs()
}


function veureHotel() {
    let nombreHotel= document.getElementById("nombreHotelver").value
    let result = document.getElementById("result")
    const index = Hoteles.findIndex((hotel) => hotel.nombreHotel === nombreHotel) // buscamos nombreHotel en array Hoteles
    if(index == -1){ 
        alert(`El hotel ${nombreHotel} no existeix a la nostra aplicació`) // validación para ver si el hotel esta en nuestra base de datos
    }else{     
        let hotelActual = Hoteles[index]     
        result.innerHTML = `${hotelActual} <br> ${hotelActual.calcularmanteniment()}` 
    }  
    cleanInnputs()
}


function modificarHotel(){
    let nombreHotel= document.getElementById("nombreHotelmodificar").value
    const index = Hoteles.findIndex((hotel) => hotel.nombreHotel === nombreHotel) // buscamos nombreHotel introducido en nustro array Hoteles con metodo findIndex
    if(index == -1){ 
        alert(`El hotel ${nombreHotel} no existeix a la nostra aplicació`) // validación para ver si el hotel esta en nuestra base de datos
    }else{     
        let hotelActual = Hoteles[index]   
        document.getElementById("nombreHotelmodificar").value = hotelActual.nombreHotel  //Mostramos datos del hotel que tenemos en nuestra base de datos en los inputs
        document.getElementById("numHabModificar").value = hotelActual.numHabitaciones
        document.getElementById("numPlantasModificar").value = hotelActual.numPlantas
        document.getElementById("superficieModificar").value = hotelActual.superficieHotel
        document.getElementById('nombreHotelmodificar').disabled = true //desabilitamos nombre hotel porque no lo pueden cambiar
    }   
}

function actualizarHotel(){
    let nombreHotel = document.getElementById("nombreHotelmodificar").value
    const index = Hoteles.findIndex((hotel) => hotel.nombreHotel === nombreHotel) 
    let hotelActual = Hoteles[index]   
    let numHabModificar = parseInt(document.getElementById('numHabModificar').value)    // capturamos los campos que pueden ser modificados
    let numPlantasModificar = parseInt(document.getElementById('numPlantasModificar').value)
    let superficieModificar = parseFloat(document.getElementById('superficieModificar').value)
    hotelActual.numHabitaciones = numHabModificar // actualizamos values por si alguno ha sido modificado 
    hotelActual.numPlantas = numPlantasModificar
    hotelActual.superficieHotel = superficieModificar
    document.getElementById('nombreHotelmodificar').disabled = false //  volvemos a habilitar nombre hotel 
    cleanInnputs()
    
}