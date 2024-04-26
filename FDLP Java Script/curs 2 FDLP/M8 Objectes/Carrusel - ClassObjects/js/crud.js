
function buscar(nombre){
    let encontrado = false;
    let indice = -1;
    let i = 0;
    let vueltas = ciudades.length
    while(i < vueltas && !encontrado){
    
        if (nombre == ciudades[i].nombre){
            indice = i;
            encontrado = true;
        }
     i++
    }
    return indice;
}
    

function  crear(){
    let nombre = prompt("Indica el nombre de la ciudad:");
    let indice = buscar(nombre)
    console.log(indice)
    if (indice == -1 ) {
        posicion = indice
        let imagen = prompt("Indica nombre de la imagen jpg (sin extension):", "San francisco") + ".jpg"
        let title = prompt("Indica el tip en la imagen:", "San Francisco");
        let descripcion = prompt("Escribe una breve descripcion:", " es una ciudad importante de California y pieza central de la Bahía de San Francisco,")
        const CIUDAD = new Ciudad(imagen, nombre, title, descripcion)
        console.log(CIUDAD)
        ciudades.push(CIUDAD)
        alert("ciudad creada")
        posicionActual = ciudades.length -1
        mostrarImagen()
    } else { 
        alert("La imagen ya existe")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
    }
}


function mostrar(){
    let nombre = prompt("Indica el nombre de la imagen:")
    let indice = buscar(nombre)
    console.log(indice)
    if (indice != -1){
        posicion = indice // para que se pueda usar la funcion mostrarImagen()
        let ciudadActual = ciudades[indice]
        mostrarImagen()
    }else{ 
        alert("La imagen NO existe")
    }
}


function borrar(){
    let nombre = prompt("Indica el nombre de la imagen:")
    let indice = buscar(nombre)
    console.log(indice)
    if (indice != -1){
        let confimarcion = confirm("seguro que quieres borrar esta ciudad")
        if(confimarcion){
            ciudades.splice(indice,1)
            alert("ciudad eliminada")
            avanzar()
        }
    }else{
        alert("Ciudad no existe en base de datos")
    }
}


function modificar(){
    let nombre = prompt("Indica nombre de la ciudad a modificar :")
    let indice = buscar(nombre)
    console.log(indice)
    if (indice != -1){
        posicion = indice // para que se pueda usar la funcion mostrarImagen()
        let ciudadActual = ciudades[indice]
        //pedimos y capturamos nuevos valores al usuario para que haga modificaciones pertinentes 
        let nombreModificado = prompt("Indica el nombre de la ciudad:", ciudadActual.nombre)
        let imagenModificada = prompt("Indica nombre.jpg de la imagen (con extension .jpg):", ciudadActual.imagen)
        let titleModificado = prompt("Indica el tip en la imagen:", ciudadActual.title)
        let descripcionModificada = prompt("Escribe una breve descripcion:", ciudadActual.descripcion)
        //asignamos Los valores de todos los campos como nuevos valores por si han sufrido alguna modificacion
        ciudadActual.imagen = imagenModificada
        ciudadActual.nombre = nombreModificado
        ciudadActual.title  = titleModificado
        ciudadActual.descripcion = descripcionModificada
        alert("ciudad  modificada")
        //mostramos
        mostrarImagen()
    }else{
        alert("Ciudad no existe en base de datos")
    }
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   