
//funciones mostrar y cerrar formularios y botones para poder usar segun convenga

function mostrarForm() {
    div = document.getElementById('form');
    div.style.display = '';
}

function cerrarForm() {
    div = document.getElementById('form');
    div.style.display = 'none';
}


function mostrarFormDni() {
    div = document.getElementById('formDni');
    div.style.display = '';
}

function cerrarFormDni() {
    div = document.getElementById('formDni');
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
            mostrarFormDni()
            mostrarForm()
            mostrarbtnCrear()
            cerrarbtnMostrar()
            cerrarbtnModificar()
            cerrarbtnActualitzar()
            cerrarbtnBorrar()
        break;

        case "Mostrar" :
            result.innerHTML = " "
            mostrarFormDni()
            mostrarbtnMostrar()
            cerrarbtnCrear()
            cerrarbtnModificar()
            cerrarbtnActualitzar()
            cerrarbtnBorrar()
        break;

        case "Modificar" :
            result.innerHTML = " "
            mostrarFormDni()
            mostrarbtnModificar()
            cerrarbtnMostrar()
            cerrarbtnCrear()
            cerrarbtnActualitzar()
            cerrarbtnBorrar()
        break;

        case "Eliminar":
            result.innerHTML = " "
            mostrarFormDni()
            mostrarbtnBorrar()
            cerrarbtnMostrar()
            cerrarbtnModificar()
            cerrarbtnActualitzar()
            cerrarbtnCrear()
        break;
    }
}

// funcion para borrar inputs introducidos al finalizar
function cleanInnputs(){  
    let inputs = document.querySelectorAll('input:not([type="button"])')
    inputs.forEach((input) => input.value = "" )
}

// llamamos a las funciones cerrar para que no se muestre nada de inicio hasta que usuario haga selección. 
cerrarForm()
cerrarFormDni()
cerrarbtnCrear()
cerrarbtnMostrar()
cerrarbtnModificar()
cerrarbtnActualitzar()
cerrarbtnBorrar()

//variable global porque lo usamos tanto en el crud como en el main.
let result = document.getElementById("result")


