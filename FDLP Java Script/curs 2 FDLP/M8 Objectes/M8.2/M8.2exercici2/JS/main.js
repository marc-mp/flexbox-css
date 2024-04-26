function mostrarFormVol1() {
    div = document.getElementById('formVol1');
    div.style.display = '';
}

function cerrarFormVol1() {
    div = document.getElementById('formVol1');
    div.style.display = 'none';
}


function mostrarFormVol2() {
    div = document.getElementById('formVol2');
    div.style.display = '';
}

function cerrarFormVol2() {
    div = document.getElementById('formVol2');
    div.style.display = 'none';
}


function mostrarbtnCrear() {
    div = document.getElementById('btnCrear');
    div.style.display = '';
}

function cerrarbtnCrear() {
    div = document.getElementById('btnCrear');
    div.style.display = 'none';
}


function mostrarbtnMostrar() {
    div = document.getElementById('btnMostrar');
    div.style.display = '';
}

function cerrarbtnMostrar() {
    div = document.getElementById('btnMostrar');
    div.style.display = 'none';
}

function mostrarbtnModificar() {
    div = document.getElementById('btnModificar');
    div.style.display = '';
}

function cerrarbtnModificar() {
    div = document.getElementById('btnModificar');
    div.style.display = 'none';
}

function mostrarbtnActualitzar() {
    div = document.getElementById('btnActualitzar');
    div.style.display = '';
}

function cerrarbtnActualitzar() {
    div = document.getElementById('btnActualitzar');
    div.style.display = 'none';
}


function mostrarbtnBorrar() {
    div = document.getElementById('btnBorrar');
    div.style.display = '';
}

function cerrarbtnBorrar() {
    div = document.getElementById('btnBorrar');
    div.style.display = 'none';
}

// funcion que  muestra formularios y botones necesarios según opcion seleccionada por el usuario

function mostrarSeleccion(){
    let opcion = document.getElementById("opcion").value
    switch(opcion){
        case "Crear" : 
            result.innerHTML = " "
            mostrarFormVol1()
            mostrarFormVol2()
            mostrarbtnCrear()
            cerrarbtnMostrar()
            cerrarbtnModificar()
            cerrarbtnBorrar()
            cerrarbtnActualitzar()
        break;

        case "Mostrar" :
            result.innerHTML = " "
            mostrarFormVol1()
            mostrarbtnMostrar()
            cerrarbtnCrear()
            cerrarbtnModificar()
            cerrarbtnBorrar()
            cerrarbtnActualitzar()
            cerrarFormVol2()
        break;

        case "Modificar" :
            result.innerHTML = " "
            mostrarFormVol1()
            mostrarbtnModificar()
            cerrarbtnCrear()
            cerrarbtnMostrar()
            cerrarbtnBorrar()
            cerrarbtnActualitzar()
            cerrarFormVol2()
        break;

        case "Eliminar":
            result.innerHTML = " "
            mostrarFormVol1()
            mostrarbtnBorrar()
            cerrarbtnCrear()
            cerrarbtnMostrar()
            cerrarbtnModificar()
            cerrarbtnActualitzar()
            cerrarFormVol2()
        break;
    }
}

// funcion para borrar inputs introducidos al finalizar
function cleanInnputs(){  
    let inputs = document.querySelectorAll('input:not([type="button"])')
    inputs.forEach((input) => input.value = "" )
}




// llamamos a las funciones cerrar para que no se muestre nada de inicio hasta que usuario haga selección. 
cerrarFormVol2()
cerrarFormVol1()
cerrarbtnCrear()
cerrarbtnMostrar()
cerrarbtnModificar()
cerrarbtnActualitzar()
cerrarbtnBorrar()

//variable global porque lo usamos tanto en el crud como en el main.
let result = document.getElementById("result")





