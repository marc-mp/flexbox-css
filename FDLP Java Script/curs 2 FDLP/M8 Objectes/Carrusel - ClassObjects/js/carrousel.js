// Variables. Al estar fuera de las funciones son variables globales

let posicion = 0;
mostrarImagen();

function avanzar(){
    posicion++
    if (posicion >= ciudades.length){
        posicion = 0
    }
    console.log('posicion avanzar -- >', posicion)
    mostrarImagen();
}


function retroceder(){
    if(posicion == 0){
        posicion = ciudades.length -1
    }else{
        posicion --
    }
    console.log(posicion)
    mostrarImagen()
}


function mostrarImagen(){
    let ciudadActual = ciudades[posicion]
    document.getElementById("imagen").src = RUTA + ciudadActual.imagen
    document.getElementById("nombreImagen").innerHTML = ciudadActual.nombre;
    document.getElementById("desc").innerHTML = ciudadActual.descripcion;
    document.getElementById("imagen").title = ciudadActual.title;
}

