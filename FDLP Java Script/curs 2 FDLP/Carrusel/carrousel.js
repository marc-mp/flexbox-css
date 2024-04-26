// Variables. Al estar fuera de las funciones son variables globales

let posicion = 0;
console. log('posicion -- >', posicion)
mostrarImagen();

function avanzar(){
    posicion++
    if (posicion >= imagenes.length){
    posicion = 0
    }
    console. log('posicion avanzar -- >', posicion)
    mostrarImagen();
}


function retroceder(){
    if(posicion == 0){
    posicion = imagenes.length -1
    }else{
    posicion --
    }
    console. log('posicion retroceder -- >', posicion)
    mostrarImagen()
}

function mostrarImagen( ){
    let imagen = RUTA + imagenes[posicion].imagen;
    console.log('imagen =>', imagen)
    document.getElementById("imagen").src = imagen;
    document.getElementById("nombreImagen").innerHTML = imagenes[posicion].nombre;
    document.getElementById("desc").innerHTML = imagenes[posicion].descripcion;
    document.getElementById("imagen").title = imagenes[posicion].title;
}